import React from "react";

interface ErrorMessageProps {
  message: string;
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <span className="error-message" data-testid="error-message">
      {message}
    </span>
  );
};

export default ErrorMessage;
