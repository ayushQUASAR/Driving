"use client"

import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type ButtonOwnProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp"
  size?: "sm" | "md" | "lg" | "xl"
  loading?: boolean
  href?: string
  fullWidth?: boolean
}

type ButtonProps = ButtonOwnProps & 
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "ref"> & 
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "ref">

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading, disabled, children, href, fullWidth, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-150 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation select-none"

    const variants = {
      primary: "bg-gradient-to-r from-blue-700 to-blue-600 text-white hover:from-blue-800 hover:to-blue-700 active:from-blue-900 active:to-blue-800 focus-visible:ring-blue-500 shadow-lg shadow-blue-500/25",
      secondary: "bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:from-orange-700 hover:to-orange-600 active:from-orange-800 active:to-orange-700 focus-visible:ring-orange-500 shadow-lg shadow-orange-500/25",
      outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100 focus-visible:ring-blue-500",
      ghost: "text-blue-600 hover:bg-blue-50 active:bg-blue-100 focus-visible:ring-blue-500",
      whatsapp: "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 active:from-green-700 active:to-green-800 focus-visible:ring-green-500 shadow-lg shadow-green-500/25",
    }

    const sizes = {
      sm: "px-4 py-2.5 text-sm gap-1.5 min-h-[44px]",
      md: "px-6 py-3.5 text-base gap-2 min-h-[48px]",
      lg: "px-8 py-4 text-lg gap-2.5 min-h-[52px]",
      xl: "px-10 py-5 text-xl gap-3 min-h-[56px]",
    }

    const isLink = !!href
    const Component = isLink ? "a" : "button"

    return (
      <Component
        ref={ref as any}
        href={isLink ? href : undefined}
        className={cn(
          baseStyles, 
          variants[variant], 
          sizes[size], 
          fullWidth && "w-full",
          className
        )}
        disabled={!isLink && (disabled || loading)}
        aria-disabled={!isLink && (disabled || loading)}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </Component>
    )
  }
)

Button.displayName = "Button"
export { Button }