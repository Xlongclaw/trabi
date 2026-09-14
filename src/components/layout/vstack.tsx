import { cn } from "@/utils";
import type { ComponentPropsWithoutRef, ElementType } from "react";


interface VStackProps extends ComponentPropsWithoutRef<"div"> {
  spacing?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around";
  as?: ElementType;
}

const spacingMap = {
  none: "gap-0",
  xs: "gap-2",
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-10",
  "2xl": "gap-12",
};

const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

const justifyMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
};

export function VStack({
  spacing = "md",
  align = "stretch",
  justify = "start",
  as = "div",
  children,
  className,
  ...props
}: VStackProps) {
  const Component = as;
  return (
    <Component
      className={cn(
        "flex flex-col",
        spacingMap[spacing],
        alignMap[align],
        justifyMap[justify],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}