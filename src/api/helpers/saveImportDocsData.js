import axios from "axios";
import { DOMAIN } from "../../shared/constants";
import { appendDocxExtension } from "../../shared/utilities";

const saveImportDocsData = async (data, file1, file2, module = "Caliber") => {
  const payload = mapPayload(data, file1, file2, module);
  const res = await axios({
    url: `${DOMAIN}/save/`,
    method: "post",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
    }),
    data: payload,
  });
  return res.data;
};

const mapPayload = (data, file1, file2, module) => {
  const key = module == "labware" ? "Title" : "Product";
  return {
    [key]: data.product,
    Code: data.code,
    SPEC_ID: data.specId,
    STP_NO: data.methodId,
    grade: data.grade,
    samplingPoint: data.samplingPoint,
    Test_Plan_Code: data.testPlanCode,
    MARKET: data.market,
    Rev_No: data.revNo,
    CC_No: data.ccNo,
    company: data.company,
    facility: data.facility,
    methodId: data.methodId,
    filename1: appendDocxExtension(file1?.name || ""),
    filename2: appendDocxExtension(file2?.name || ""),
  };
};

export default saveImportDocsData;
