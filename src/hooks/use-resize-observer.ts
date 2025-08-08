import { useEffect, useState, type RefObject } from "react";

type UseResizeObserverOptions = {
  ref: RefObject<HTMLElement | null>;
  onResize?: (width: number) => void;
};
export const useResizeObserver = ({
  ref,
  onResize,
}: UseResizeObserverOptions) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        const observeWidth = entries[0].contentRect.width;
        setWidth(observeWidth);

        if (onResize) {
          onResize(observeWidth);
        }
      }
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [onResize, ref]);

  return width;
};
