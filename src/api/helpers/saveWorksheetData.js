import axios from "axios";
import { getDomain } from "../../shared/utilities";

const saveWorksheetData = (payload, endpoint, client) => {
  return axios({
    url: `${getDomain(client)}/${endpoint}`,
    method: "POST",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
      content: "application/json",
    }),

    data: payload,
  });
};

export default saveWorksheetData;
