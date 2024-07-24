import axios from "axios";
import { DOMAIN } from "../../shared/constants";

const saveImportDocsData = async (payload) => {
  const res = await axios({
    url: `${DOMAIN}/save/`,
    method: "post",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
    }),
    data: payload,
  });
  return res.data;
};

export default saveImportDocsData;
