import axios from "axios";
import { getDomain } from "../../shared/utilities";

const login = async (data) => {
  const res = await axios({
    url: `${getDomain(data.client)}/login?collection_name=Login`,
    method: "POST",
    data: { ...data },
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
      content: "application/json",
    }),
  });

  return res.data;
};

export default login;
