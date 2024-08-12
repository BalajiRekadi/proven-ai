import axios from "axios";
import { DOMAIN } from "../../shared/constants";

const runNeulandWorksheet = async (product, payload) => {
  const res = await axios({
    url: `${DOMAIN}/run_neuland/?code=${product}`,
    method: "POST",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
      content: "application/json",
    }),

    data: { WorkSheetContent: payload },
  });

  return res.data;
};

export default runNeulandWorksheet;
