import { useState, useLayoutEffect } from 'react';
import { TIME_UNIT }  from '../constants/constants';

function useWindowSize() { // Отслеживает изменение ширины окна браузера и автоматически обновляет ее
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useLayoutEffect(() => {
    window.addEventListener('resize', setWindowSize({ width: window.innerWidth, height: window.innerHeight }));
    return () => {
      window.removeEventListener('resize', setWindowSize({ width: window.innerWidth, height: window.innerHeight }));
    };
  }, []);

  return windowSize.width;
}

export { useWindowSize };

export default function duration(movieDuration) { // Переводит продолжительность фильма в часы:минуты
    const hours = Math.floor(movieDuration / TIME_UNIT);
    const minutes = movieDuration % TIME_UNIT;
    return `${hours ? `${hours}ч` : ''} ${minutes ? `${minutes}м` : ''}`
}
