import axios from "axios";
import { DOMAIN } from "../../shared/constants";

const runWorksheet = async (payload, endpoint) => {
  const res = await axios({
    url: `${DOMAIN}/${endpoint}/?code=${payload.product}`,
    method: "POST",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
      content: "application/json",
    }),

    data: payload.body,
  });

  return res.data;
};

export default runWorksheet;
