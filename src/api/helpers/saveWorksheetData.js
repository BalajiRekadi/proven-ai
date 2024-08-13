import axios from "axios";
import { DOMAIN } from "../../shared/constants";

const saveWorksheetData = (payload) => {
  return axios({
    url: `${DOMAIN}/save2`,
    method: "POST",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
      content: "application/json",
    }),

    data: payload,
  });
};

export default saveWorksheetData;
