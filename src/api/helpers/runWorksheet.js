import axios from "axios";
import { DOMAIN } from "../../shared/constants";

const runWorksheet = async (product, payload) => {
  const res = await axios({
    url: `${DOMAIN}/run/?code=${product}`,
    method: "POST",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
      content: "application/json",
    }),

    data: payload,
  });

  return res.data;
};

export default runWorksheet;
