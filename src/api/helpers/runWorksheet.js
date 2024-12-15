import axios from "axios";
import { getDomain } from "../../shared/utilities";

const runWorksheet = async (payload, endpoint, client) => {
  const res = await axios({
    url: `${getDomain(client)}/${endpoint}?code=${payload.product}`,
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
