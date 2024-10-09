import React, { ErrorInfo } from 'react';
import { toast } from 'react-hot-toast';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error to an error reporting service (optional)
    console.error("Error caught by ErrorBoundary:", error, errorInfo);

    // Show a toast notification
    toast.error("Something went wrong. Please try again later.");
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return null; // or a fallback UI if desired
    }

    return this.props.children;
  }
}

export default ErrorBoundary;