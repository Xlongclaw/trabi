import { cn } from "@/utils";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

// ==========================================
// 1. Box (Generic wrapper with element polymorphism)
// ==========================================
export type BoxProps<T extends ElementType = "div"> = {
  as?: T;
  children?: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export function Box<T extends ElementType = "div">({
  as,
  children,
  className,
  ...props
}: BoxProps<T>) {
  const Component = as || "div";
  return (
    <Component className={cn(className)} {...props}>
      {children}
    </Component>
  );
}