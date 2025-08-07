import type { PDFBBox, PDFCaptionedItem } from "./types/pdf.types";

type PDFCell = PDFBBox & {
  row_span: number;
  col_span: number;
  start_row_offset_idx: number;
  end_row_offset_idx: number;
  start_col_offset_idx: number;
  end_col_offset_idx: number;
  text: string;
  column_header: boolean;
  row_header: boolean;
  row_section: boolean;
};

type PDFTableProps = PDFCaptionedItem & {
  data: {
    num_rows: number;
    num_cols: number;
    table_cells: PDFCell[];
    grid: PDFCell[];
  };
};
export const PDFTable = (props: PDFTableProps) => {
  console.log("@@@@@@@@@@@@@@@@@@@@@@@", props);
  return <div>pdf-table</div>;
};
