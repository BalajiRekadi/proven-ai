import { DOMAIN } from "../../shared/constants";
import axios from "axios";

const fetchTasks = async (module, client) => {
  const res = await axios({
    url: `${DOMAIN}/Dashboard/?module=${module}&Client=${client}`,
    method: "POST",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
      content: "application/json",
    }),
  });

  return mapResponse(res.data.response);
};

const mapResponse = (data) => {
  const tasks = data.map((item) => {
    return {
      id: item._id || "-",
      company: item.company || "-",
      product: item.product || "-",
      market: item.market || "-",
      spec: item.spec || "-",
      method: item.method || "-",
      code: item.Code || "-",
      stpNo: item.STP_NO || "-",
      taskId: item.taskid || "-",
      createdBy: item.createdby || "-",
      createdOn: item.createdon || "-",
      status: item.status,
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
