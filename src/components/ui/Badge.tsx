import { cn } from "@/lib/utils"
import { type HTMLAttributes, forwardRef } from "react"

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "danger" | "info" | "outline"
  size?: "sm" | "md" | "lg"
  dot?: boolean
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "md", dot, children, ...props }, ref) => {
    const variants = {
      default: "bg-blue-100 text-blue-800",
      success: "bg-green-100 text-green-800",
      warning: "bg-yellow-100 text-yellow-800",
      danger: "bg-red-100 text-red-800",
      info: "bg-purple-100 text-purple-800",
      outline: "border border-gray-300 text-gray-700 bg-transparent",
    }

    const sizes = {
      sm: "px-2 py-0.5 text-xs",
      md: "px-2.5 py-1 text-sm",
      lg: "px-3 py-1.5 text-base",
    }

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 font-medium rounded-full",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {dot && <span className={cn("w-1.5 h-1.5 rounded-full", variants[variant].replace("text-", "bg-"))} />}
        {children}
      </span>
    )
  }
)

Badge.displayName = "Badge"
export { Badge }