import React, { useMemo } from 'react';
import { useWindowSize } from './useWindowSize';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DisplayWindowSize() {
  const { width, height } = useWindowSize();

  const deviceIcon = useMemo(() => {
    if (width >= 1024) {
      return (
        <>
          <i className="bi bi-display"></i>
          <h1>Монітор</h1>
        </>
      );
    } else if (width >= 768) {
      return (
        <>
          <i className="bi bi-tablet"></i>
          <h1>Планшет</h1>
        </>
      );
    } else {
      return (
        <>
          <i className="bi bi-phone"></i>
          <h1>Телефон</h1>
        </>
      );
    }
  }, [width]);

  return (
    <div className="text-center mt-5">
      <div className="p-4 border-0">
        <h2 className="mb-3">Розміри вікна</h2>
        <p className="fs-4">
          {width}px × {height}px
        </p>
        <div className="my-3">{deviceIcon}</div>
      </div>
    </div>
  );
}
