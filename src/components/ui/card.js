// src/components/ui/card.js
export function Card({ children, className, ...props }) {
    return (
      <div className={`bg-white shadow-lg rounded-lg p-6 ${className}`} {...props}>
        {children}
      </div>
    );
  }
  
  export function CardContent({ children }) {
    return <div className="space-y-4">{children}</div>;
  }
  