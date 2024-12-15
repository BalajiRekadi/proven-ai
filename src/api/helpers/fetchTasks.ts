import axios from 'axios'

import { getDomain } from '../../shared/utilities'

const fetchTasks = async (module, client) => {
  const res = await axios({
    url: `${getDomain(client)}/Dashboard?module=${module}&Client=${client}`,
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
      company: item.COMPANY || "-",
      product: item.PRODUCT_NAME || "-",
      market: item.MARKET || "-",
      spec: item.SPEC_ID || "-",
      method: item.method || "-",
      code: item.ITEM_CODE || "-",
      stpNo: item.STP_No || "-",
      taskId: item.taskid || "-",
      createdBy: item.createdBy || "-",
      createdOn: item.createdOn || "-",
      status: item.status,
      facility: item.FACILITY || "-",
      revNo: item.REV_No || "-",
      ccNo: item.CC_No || "-",
      version: item.VERSION || "-",
    };
  });
  return tasks;
};

export default fetchTasks;
