import axios from "axios";
import { getDomain } from "../../shared/utilities";

const uploadFile = async (endpoint, files, client) => {
  const form = new FormData();
  files.forEach((file, index) => {
    form.append(`file${index + 1}`, file);
  });
  const res = await axios({
    url: `${getDomain(client)}/${endpoint}`,
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
