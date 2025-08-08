import { useEffect, useRef } from "react";
import type { PDFBlockId, PDFBlockIdState } from "../types/pdf.types";

type useScrollToBlockOptions = {
  targetId: PDFBlockIdState;
  scrollOptions?: ScrollIntoViewOptions;
};
export const useScrollToBlock = ({
  targetId,
  scrollOptions = {
    behavior: "smooth",
    block: "center",
  },
}: useScrollToBlockOptions) => {
  const blockRef = useRef<Record<PDFBlockId, HTMLElement>>({});

  const setBlockRef = (el: HTMLDivElement | null, id: PDFBlockId) => {
    if (!el) return;

    blockRef.current[id] = el;
  };

  useEffect(() => {
    if (targetId && blockRef.current[targetId]) {
      blockRef.current[targetId].scrollIntoView(scrollOptions);
    }
  }, [scrollOptions, targetId]);

  return { blockRef, setBlockRef };
};
