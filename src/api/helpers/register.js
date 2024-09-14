import { DOMAIN } from "../../shared/constants";
import axios from "axios";

const register = async (data) => {
  const res = await axios({
    url: `${DOMAIN}/register/?collection_name=Login`,
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
