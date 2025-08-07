import Data from "@/data/documents/report.json";
import { PdfTest } from "./pdf-test";

export const App = () => {
  console.log("Data", Data.texts, Data.tables, Data.pictures);
  return (
    <div className="w-screen h-screen grid grid-cols-2">
      <div className="border-2 border-amber-200">
        <PdfTest />
      </div>
      <div className="border-2 border-red-400">json영역</div>
    </div>
  );
};
