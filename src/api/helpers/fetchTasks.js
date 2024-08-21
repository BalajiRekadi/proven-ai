import { DOMAIN } from "../../shared/constants";
import axios from "axios";

const fetchTasks = async (endpoint) => {
  const res = await axios({
    url: `${DOMAIN}/${endpoint}/`,
    method: "GET",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
      content: "application/json",
    }),
  });

  return mapResponse(res.data);
};

const mapResponse = (data) => {
  const tasks = data.map((item) => {
    return {
      id: item._id?.$oid || "-",
      company: item.company || "-",
      product: item.Product || "-",
      market: item.MARKET || "-",
      spec: item.SPEC_ID || "-",
      method: item.methodId || "-",
      code: item.Code || "-",
      stpNo: item.STP_NO || "-",
      taskId: item.TaskId || "-",
      createdBy: item.CreatedBy || "-",
      createdOn: item.CreatedOn || "-",
      status: item.Status,
      facility: item.facility || "-",
    };
  });
  return tasks;
};

const mapSections = (data) => {
  const sections = Object.values(data);
  const dict = {};
  sections.forEach((item) => {
    dict[item.TestName] = [
      { "Worksheet Content": { value: item.WorkSheetContent } },
    ];
  });
  return dict;
};

export default fetchTasks;
