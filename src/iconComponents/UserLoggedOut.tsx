import * as React from "react";
import { SVGProps } from "react";

const SvgUserLoggedOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 23.333 24"
    {...props}
  >
    <g fill="#172026">
      <path d="M22.333 24a1 1 0 0 1-1-1v-2.667A4.338 4.338 0 0 0 17 16H6.333A4.333 4.333 0 0 0 2 20.333V23a1 1 0 0 1-2 0v-2.667A6.333 6.333 0 0 1 6.333 14H17a6.341 6.341 0 0 1 6.333 6.333V23a1 1 0 0 1-1 1ZM11.333 0a6 6 0 1 1-6 6 6.007 6.007 0 0 1 6-6Zm0 10a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
    </g>
  </svg>
);

export default SvgUserLoggedOut;
