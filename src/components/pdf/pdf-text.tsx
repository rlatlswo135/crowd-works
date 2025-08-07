import type { PDFBase } from "./types/pdf.types";

type PDFTextProps = PDFBase & {
  orig: string;
  text: string;
};
export const PDFText = (props: PDFTextProps) => {
  console.log("@@@@@@@@@@@@@@@@@@@@@@@", props);
  return <div>pdf-text</div>;
};
