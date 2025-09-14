import { useEffect, useState } from 'react';

export const FuturisticCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: position.x - 4,
          top: position.y - 4,
        }}
      />
      <div
        className="cursor-outline"
        style={{
          left: position.x - 20,
          top: position.y - 20,
        }}
      />
    </>
  );
};