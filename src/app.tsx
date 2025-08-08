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

  return (
    <div className="h-screen w-full grid grid-cols-2">
      <div className="h-full overflow-hidden">
        <PDFViewer
          selectId={selectId}
          textBlocks={Data.texts as PDFTextItem[]}
          setHoverId={setHoverId}
          setSelectId={setSelectId}
        />
      </div>
      <div className="h-full overflow-hidden">
        <PDFTextBlocks
          textBlocks={Data.texts as PDFTextItem[]}
          selectId={selectId}
          hoverId={hoverId}
          setHoverId={setHoverId}
          setSelectId={setSelectId}
        />
      </div>
    </div>
  );
}
