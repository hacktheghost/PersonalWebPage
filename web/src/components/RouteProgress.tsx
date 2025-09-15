"use client";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function RouteProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Start
    setVisible(true);
    setProgress(0);
    const i1 = setTimeout(() => setProgress(60), 80);
    const i2 = setTimeout(() => setProgress(85), 400);
    // Finish when path stabilizes
    const i3 = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setVisible(false), 180);
    }, 600);
    return () => { clearTimeout(i1); clearTimeout(i2); clearTimeout(i3); };
  }, [pathname]);

  return (
    <div aria-hidden className={`fixed left-0 right-0 top-0 z-[1000] ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-150`}>
      <div className="mx-auto h-0.5 w-full max-w-6xl overflow-hidden">
        <div className="h-full bg-secondary transition-[width] duration-150 ease-out" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}


