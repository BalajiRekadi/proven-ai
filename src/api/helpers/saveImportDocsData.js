import axios from "axios";
import { DOMAIN } from "../../shared/constants";
import { appendDocxExtension } from "../../shared/utilities";

const saveImportDocsData = async (data, file1, file2) => {
  const payload = mapPayload(data, file1, file2);
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

const mapPayload = (data, file1, file2) => {
  return {
    Product: data.product,
    Test_Plan_Code: data.testPlanCode,
    MARKET: data.market,
    Rev_No: data.revNo,
    CC_No: data.ccNo,
    company: data.company,
    facility: data.facility,
    specId: data.specId,
    methodId: data.methodId,
    filename1: appendDocxExtension(file1?.name || ""),
    filename2: appendDocxExtension(file2?.name || ""),
  };
};

export default saveImportDocsData;
