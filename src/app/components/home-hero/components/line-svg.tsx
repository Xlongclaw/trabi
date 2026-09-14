import { cn } from "@/utils";
import { ReactNode } from "react";

export default function LineSVG(): ReactNode {
  return (
    <svg
      className={cn(" w-20 sm:w-32", "text-[#b8f45a] ")}
      viewBox="0 0 130 25"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 17C34 2 83 2 126 12"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
