interface ErrorAlertProps {
    message: string
    onClose?: () => void
}

export const ErrorAlert = ({ message, onClose }: ErrorAlertProps) => (
    <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded mb-4 flex items-center justify-between">
        <span>{message}</span>
        {onClose &&
        <button onClick={onClose} className="ml-4 text-red-500 hover:text-red-700 font-bold text-lg" aria-label="Cerrar">
            ×
        </button>
        }
    </div>
)
