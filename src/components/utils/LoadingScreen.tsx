import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 800); // Reduced from 1500ms to 800ms for faster initial load

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-sky-600 rounded-full animate-spin" />
    </div>
  );
};

export default LoadingScreen;