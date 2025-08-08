import type { Dispatch, SetStateAction } from "react";

export type PDFBlockId = `#/${"texts" | "groups" | "pictures"}/${number}`;

type PDFRefObject = {
  $ref: PDFBlockId;
};

type BBox = {
  l: number;
  t: number;
  r: number;
  b: number;
  coord_origin: "BOTTOMLEFT" | "TOPLEFT";
};

type PDFBase = {
  parent: PDFRefObject;
  children: PDFRefObject[];
  content_layer: string;
  label: string;
  prov: {
    bbox: BBox;
    page_no: number;
    charspan: number[];
  }[];
};

export type PDFTextItem = PDFBase & {
  self_ref: `#/texts/${number}`;
  orig: string;
  text: string;
  enumerated?: boolean;
  marker?: string;
};

export type PDFBlockIdState = PDFBlockId | null;
export type SetPDFBlockIdState = Dispatch<SetStateAction<PDFBlockIdState>>;

export type PDFCommonProps = {
  selectId: PDFBlockIdState;
  textBlocks: PDFTextItem[];
  setHoverId: SetPDFBlockIdState;
  setSelectId: SetPDFBlockIdState;
};
