import { DOMAIN } from "../../shared/constants";
import { appendDocxExtension } from "../../shared/utilities";
import axios from "axios";

const processFiles = async (files, module, client, user) => {
  const spec = appendDocxExtension(files[0]);
  const stp = appendDocxExtension(files[1]);

  const res = await axios({
    url: `${DOMAIN}/process/`,
    method: "POST",
    data: {
      filenames: { spec, stp },
      details: { module, client, userId: user.userId, password: user.password },
    },
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
      content: "application/json",
    }),
  });

  return mapResponse(res.data);
};

const mapResponse = (data, file1, file2) => {
  return {
    company: "",
    facility: "",
    grade: "",
    samplingPoint: "",
    product: data["Product"] || data["Title"],
    specId: data["SPEC_ID"] || "",
    methodId: data["STP_NO"] || "",
    market: data["MARKET"],
    code: data["Code"],
    testPlanCode: data["Test_Plan_Code"],
    revNo: data["Rev_No"],
    ccNo: data["CC_No"],
    taskId: data["TaskId"],
    specFileName: file1,
    methodFileName: file2,
  };
};

export default processFiles;
