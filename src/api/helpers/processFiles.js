import { DOMAIN } from "../../shared/constants";
import { appendDocxExtension } from "../../shared/utilities";

const processFiles = async (files) => {
  const name = appendDocxExtension(files[0]);
  const res = await fetch(`${DOMAIN}/process/?file_name=${name}`, {
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
    }),
  });
  const data = await res.clone().json();
  return mapResponse(data, files[0], files[1]);
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
