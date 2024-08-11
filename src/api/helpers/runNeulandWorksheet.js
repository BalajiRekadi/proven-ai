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

    data: {
      WorkSheetContent:
        "Instrument ID: __________ \nBalance ID: __________ \nStandard Preparation: \nWeighed __________ (400 to 500) mg of KBr and transferred into a mortar \nAdded __________ (4 to 5) mg of Working standard, triturated and prepared the pellet. \nSample Preparation: \nWeighed __________ (400 to 500) mg of KBr and transferred into a mortar Added __________ (4 to 5) mg of Sample, triturated and prepared the pellet.",
    },
  });

  return res.data;
};

export default runNeulandWorksheet;
