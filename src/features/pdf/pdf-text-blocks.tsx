import type {
  PDFBlockId,
  PDFBlockIdState,
  PDFCommonProps,
} from "./types/pdf.types";
import clsx from "clsx";
import { useScrollToBlock } from "./hooks/use-scroll-to-block";

type PDFTextBlocksProps = PDFCommonProps & {
  hoverId: PDFBlockIdState;
};

export const PDFTextBlocks = ({
  hoverId,
  selectId,
  setSelectId,
  setHoverId,
  textBlocks,
}: PDFTextBlocksProps) => {
  const { setBlockRef } = useScrollToBlock({ targetId: hoverId });

  const handleClick = (id: PDFBlockId) => {
    setSelectId(id);
    setHoverId(null);
  };

  return (
    <div className="h-full p-4 overflow-y-auto">
      {textBlocks.map((text) => (
        <div
          key={text.self_ref}
          ref={(el) => setBlockRef(el, text.self_ref)}
          className={clsx(
            "border-1 border-slate-400 mb-2 p-4 rounded-xl cursor-pointer",
            {
              "pdf-selected":
                hoverId == text.self_ref || selectId == text.self_ref,
            }
          )}
          onClick={() => handleClick(text.self_ref)}
        >
          {text.text}
        </div>
      ))}
    </div>
  );
};
