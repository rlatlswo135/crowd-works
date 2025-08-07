type RefType = "texts" | "pictures" | "groups" | "tables";

type Ref = `#/${RefType}/${number}`;

export type PDFRef = {
  $ref: Ref;
};

export type BBox = {
  l: number;
  t: number;
  r: number;
  b: number;
  coord_origin: string;
};

export type PDFBBox = {
  bbox: BBox;
};

export type Prov = PDFBBox & {
  page_no: number;
  charspan: [number, number];
};

export type PDFBase = {
  self_ref: Ref;
  parent: PDFRef;
  children: PDFRef[];
  content_layer: string;
  label: string;
  prov: [Prov];
};

export type PDFCaptionedItem = PDFBase & {
  captions: string[];
  references: string[];
  footnotes: unknown[];
};
