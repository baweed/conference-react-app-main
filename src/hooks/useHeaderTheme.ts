import { HeaderThemes } from '../types/headerThemes.ts';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from 'react';

export function useHeaderTheme(currentTheme: HeaderThemes, setFunction: Dispatch<SetStateAction<HeaderThemes>>) {
  const ref = useRef<HTMLElement>(null);

  const logRef = useCallback(() => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    if (rect.y <= 0 && rect.y >= -rect.height) {
      setFunction(currentTheme);
    }

  }, [setFunction, currentTheme]);

  useEffect(() => {
    window.addEventListener('scroll', logRef);
    return () => {
      window.removeEventListener('scroll', logRef);
    };
  }, [logRef]);

  return ref;
}