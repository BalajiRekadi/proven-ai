import axios from "axios";
import { DOMAIN } from "../../shared/constants";

const runTestDetail = async (payload, endpoint) => {
  const res = await axios({
    url: `${DOMAIN}/${endpoint}/`,
    method: "POST",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
      content: "application/json",
    }),

    data: payload,
  });

  return mapResponse(res.data);
};

const mapResponse = (data) => {
  return data;
};

export default runTestDetail;
