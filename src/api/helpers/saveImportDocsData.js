import axios from "axios";
import { DOMAIN, MODULES } from "../../shared/constants";

const saveImportDocsData = async (data, file1, file2, module, client) => {
  const payload = mapPayload(data, module, client);
  const res = await axios({
    url: `${DOMAIN}/save?module=${module}`,
    method: "post",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
    }),
    data: payload,
  });
  return res.data;
};

const mapPayload = (data, module, client) => {
  return {
    PRODUCT_NAME: data.product,
    ITEM_CODE: data.code,
    SPEC_ID: data.specId,
    STP_No: data.methodId,
    GRADE: data.grade,
    SAMPLING_POINT: data.samplingPoint,
    Test_Plan_Code: data.testPlanCode,
    MARKET: data.market,
    Rev_No: data.revNo,
    CC_No: data.ccNo,
    taskid: data.taskId,
    createdBy: data.createdBy,
    createdOn: data.createdOn,
    status: data.status,
    COMPANY: data.company,
    FACILITY: data.facility,
    client: client,
    module: module,
  };
};

export default saveImportDocsData;
