import React, { useRef } from "react";

const SmartCanvas = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  return (
    <div className="relative h-full w-full bg-neutral-50">
      <svg
        ref={svgRef}
        className="h-full w-full border border-dashed border-neutral-400"
      />
    </div>
  );
};

export default SmartCanvas;

