import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@d3/sticky-force-layout";

function StickyForceLayout() {
  const d3Ref = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "d3") return new Inspector(d3Ref.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={d3Ref} />
      <p>Credit: <a href="https://observablehq.com/@d3/sticky-force-layout">Sticky Force Layout by D3</a></p>
    </>
  );
}

export default StickyForceLayout;