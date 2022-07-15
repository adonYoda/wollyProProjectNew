import * as React from "react";
import { SVGProps } from "react";

const SvgInstagram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 22 22"
    {...props}
  >
    <g
      transform="translate(1 1)"
      fill="none"
      stroke="#172026"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <rect data-name="Rectangle 1587" width={20} height={20} rx={5} />
      <path
        data-name="Path 38012"
        d="M14 9.37A4 4 0 1 1 10.63 6 4 4 0 0 1 14 9.37Z"
      />
      <path data-name="Line 475" d="M15.5 4.5h.01" />
    </g>
  </svg>
);

export default SvgInstagram;
