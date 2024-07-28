import { DOMAIN } from "../../shared/constants";
import { appendDocxExtension } from "../../shared/utilities";

const processFiles = async (file1, file2) => {
  const name = appendDocxExtension(file1);
  const res = await fetch(`${DOMAIN}/process/?file_name=${name}`, {
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
    }),
  });
  const data = await res.clone().json();
  return mapResponse(data, file1, file2);
};

const mapResponse = (data, file1, file2) => {
  return {
    company: "",
    facility: "",
    grade: "",
    samplingPoint: "",
    product: data["Product"] || data["Title"],
    specId: data["SPEC_ID"] || "NA",
    methodId: data["STP_NO"] || "NA",
    market: data["MARKET"],
    code: data["Code"],
    testPlanCode: data["Test_Plan_Code"],
    revNo: data["Rev_No"],
    ccNo: data["CC_No"],
    specFile: file1,
    methodFile: file2,
  };
};

export default processFiles;

// {
//   "Product": "3000714",
//   "Test_Plan_Code": "",
//   "MARKET": "Not applicable",
//   "Rev_No": "5.0",
//   "CC_No": "1614274"
// }
