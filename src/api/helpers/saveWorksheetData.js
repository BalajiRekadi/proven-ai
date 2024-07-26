import axios from "axios";
import { DOMAIN } from "../../shared/constants";

// TODO: check why fetch api is not working
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
  //   return fetch(
  //     `https://8df4-2405-201-c03a-a1f1-8493-81f2-6680-8b27.ngrok-free.app/save2`,
  //     {
  //       method: "post",
  //       headers: new Headers({
  //         "ngrok-skip-browser-warning": "69420",
  //         content: "application/json",
  //       }),
  //       body: JSON.parse(JSON.stringify(payload)),
  //     }
  //   );
};

export default saveWorksheetData;
