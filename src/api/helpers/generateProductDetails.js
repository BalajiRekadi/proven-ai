import axios from "axios";
import { DOMAIN } from "../../shared/constants";

const generateProductDetails = async (data) => {
  //TODO Remove hardcoded values
  const payload = {
    ITEM_CODE: data.code,
    PRODUCT_NAME: data.product,
    SPEC_ID: data.specId,
    STP_No: data.methodId,
    MARKET: data.market,
    GRADE: data.grade || "FP",
    SAMPLING_POINT: data.samplingPoint || "Release",
  };

  const res = await axios({
    url: `${DOMAIN}/machine_res`,
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

export default generateProductDetails;