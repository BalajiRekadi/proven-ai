import axios from "axios";
import { getDomain } from "../../shared/utilities";

const register = async (data) => {
  const res = await axios({
    url: `${getDomain(data.client[0])}/register?collection_name=Login`,
    method: "POST",
    data: { ...data },
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
      content: "application/json",
    }),
  });

  return res.data;
};

export default register;
