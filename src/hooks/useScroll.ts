import get from 'lodash.get';
import { useEffect } from 'react';

type elementScrollCallback = (scrollY: number, scrollX: number) => void;

export function useElementScroll(ref: any, callback: elementScrollCallback) {
  useEffect(() => {
    const handleScroll = (e: any) =>
      callback(get(e, 'path[1].scrollY'), get(e, 'path[1].scrollX'));

    ref.addEventListener('scroll', handleScroll);

    return () => {
      ref.removeEventListener('scroll', handleScroll);
    };
  });
}
