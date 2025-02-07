// src/components/ui/button.js
export function Button({ children, className, ...props }) {
    return (
      <button
        className={`px-4 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  