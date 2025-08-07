import type { PDFCaptionedItem } from "./types/pdf.types";

type PDFImageProps = PDFCaptionedItem & {
  image: {
    mimetype: "image/png";
    dpi: number;
    size: {
      width: number;
      height: number;
    };
    uri: string;
  };
  annotations: [];
};

export const PDFImage = (props: PDFImageProps) => {
  console.log("@@@@@@@@@@@@@@@@@@@@@@@", props);
  return <div>pdf-image</div>;
};
