import axios from "axios";
import { DOMAIN } from "../../shared/constants";

const uploadFile = async (endpoint, files) => {
  const form = new FormData();
  files.forEach((file, index) => {
    form.append(`file${index + 1}`, file);
  });
  const res = await axios({
    url: `${DOMAIN}/${endpoint}`,
    method: "POST",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
      content: "application/json",
    }),

    data: form,
  });

  return res.data;
};

export default uploadFile;
