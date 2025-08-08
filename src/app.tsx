import Data from "@/data/report.json";
import { PDFTextBlocks } from "./features/pdf/pdf-text-blocks";
import type {
  PDFBlockIdState,
  PDFTextItem,
} from "./features/pdf/types/pdf.types";
import { useState } from "react";
import { PDFViewer } from "./features/pdf/pdf-viewer";

export function App() {
  const [hoverId, setHoverId] = useState<PDFBlockIdState>(null);
  const [selectId, setSelectId] = useState<PDFBlockIdState>(null);

  const commonProps = {
    selectId,
    setHoverId,
    setSelectId,
    textBlocks: Data.texts as PDFTextItem[],
  };

  return (
    <div className="h-screen w-full grid grid-cols-2">
      <div className="h-full overflow-hidden">
        <PDFViewer {...commonProps} />
      </div>
      <div className="h-full overflow-hidden">
        <PDFTextBlocks hoverId={hoverId} {...commonProps} />
      </div>
    </div>
  );
}
