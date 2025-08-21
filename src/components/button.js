export function Button({ children, className, ...props }) {
    return (
        <button
            className={`transition-all duration-200 font-medium cursor-pointer ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
