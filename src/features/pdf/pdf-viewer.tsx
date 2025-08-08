import { Document, Page, pdfjs } from "react-pdf";
import type {
  PDFBlockId,
  PDFCommonProps,
  PDFTextItem,
} from "./types/pdf.types";

import { useRef, useState, type CSSProperties } from "react";
import clsx from "clsx";

import { useResizeObserver } from "@/hooks/use-resize-observer";
import { useScrollToBlock } from "./hooks/use-scroll-to-block";
import type { PageCallback } from "react-pdf/dist/shared/types.js";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

export const PDFViewer = ({
  selectId,
  textBlocks,
  setHoverId,
  setSelectId,
}: PDFCommonProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [originSize, setOriginSize] = useState({
    width: 0,
    height: 0,
  });

  const { setBlockRef } = useScrollToBlock({ targetId: selectId });

  const width = useResizeObserver({ ref: containerRef });

  const getOverlayStyle = (item: PDFTextItem): CSSProperties => {
    const bbox = item.prov[0].bbox;
    const ratio = originSize.width ? width / originSize.width : 1;

    const locationPadding = 6;
    const sizePadding = 10;

    return {
      position: "absolute",
      top: (originSize.height - bbox.t) * ratio - locationPadding,
      left: bbox.l * ratio - locationPadding,
      width: (bbox.r - bbox.l) * ratio + sizePadding,
      height: (bbox.t - bbox.b) * ratio + sizePadding,
    };
  };

  const handleRenderSuccess = (page: PageCallback) => {
    const { width, height } = page.getViewport({ scale: 1 });
    setOriginSize({ width, height });
  };

  const handleMouseEnter = (id: PDFBlockId) => {
    setHoverId(id);
    setSelectId(null);
  };

  const handleMouseLeave = () => {
    setHoverId(null);
  };

  return (
    <div className="h-full overflow-y-auto" ref={containerRef}>
      <Document file="/report.pdf">
        <div className="relative">
          <Page
            pageNumber={1}
            width={width}
            onRenderSuccess={handleRenderSuccess}
          />
          {textBlocks.map((text) => (
            <div
              key={text.self_ref}
              ref={(el) => setBlockRef(el, text.self_ref)}
              onMouseEnter={() => handleMouseEnter(text.self_ref)}
              onMouseLeave={handleMouseLeave}
              className={clsx("z-10 rounded-lg hover:pdf-selected", {
                "pdf-selected": selectId == text.self_ref,
              })}
              style={getOverlayStyle(text)}
            />
          ))}
        </div>
      </Document>
    </div>
  );
};
