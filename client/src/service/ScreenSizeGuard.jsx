import { useState, useEffect } from 'react';
import StyleSheet from './ScreenSizeGuard.module.css';

function ScreenSizeGuard({ children }) {
  const [isScreenAllowed, setIsScreenAllowed] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Defina os tamanhos permitidos (por exemplo, largura entre 768 e 1440 pixels)
      if (width < 950 || height < 500) {
        setIsScreenAllowed(false);
      } else {
        setIsScreenAllowed(true);
      }
    };

    // Verifique o tamanho da tela ao carregar e ao redimensionar
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (!isScreenAllowed) {
    return <div className={StyleSheet.screenRestricted}>Este site é otimizado apenas para tamanhos de tela específicos. <br/> Em breve este site estará disponível para demais tamanhos de tela.</div>;
  }

  return children;
}

export default ScreenSizeGuard;