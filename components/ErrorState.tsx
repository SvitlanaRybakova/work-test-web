interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

const ErrorState = ({
  title = 'Something went wrong',
  message = 'Unable to connect to our servers. Please check your internet connection and try again.',
  onRetry,
}: ErrorStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 bg-red-50/50 border border-red-100 rounded-2xl max-w-xl mx-auto text-center my-6 select-none animate-fadeIn">
      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-xl mb-4">
        !
      </div>

      <h2 className="text-lg font-medium text-gray-900 mb-1">{title}</h2>

      <p className="text-sm text-gray-500 mb-6 max-w-sm leading-relaxed">
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="px-5 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-900 transition-colors duration-150 cursor-pointer select-none"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorState;
