import { cn } from "@/lib/utils"
import { type TextareaHTMLAttributes, forwardRef } from "react"

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-")

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={textareaId} className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "w-full rounded-xl border bg-white transition-all duration-200 resize-y",
            "placeholder:text-gray-400",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            "disabled:bg-gray-50 disabled:cursor-not-allowed",
            "p-4 text-base text-gray-900",
            "text-[16px]", // Prevents zoom on iOS
            "min-h-[120px]",
            error
              ? "border-red-300 focus:ring-red-500"
              : "border-gray-200 hover:border-gray-300",
            className
          )}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${textareaId}-error` : hint ? `${textareaId}-hint` : undefined}
          {...props}
        />
        {error && (
          <p id={`${textareaId}-error`} className="mt-2 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${textareaId}-hint`} className="mt-2 text-sm text-gray-500">
            {hint}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = "Textarea"
export { Textarea }