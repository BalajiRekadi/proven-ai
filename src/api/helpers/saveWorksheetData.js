import axios from "axios";
import { DOMAIN } from "../../shared/constants/constants";

const saveWorksheetData = (payload, endpoint) => {
  return axios({
    url: `${DOMAIN}/${endpoint}`,
    method: "POST",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
      content: "application/json",
    }),

    data: payload,
  });
};

export default saveWorksheetData;
