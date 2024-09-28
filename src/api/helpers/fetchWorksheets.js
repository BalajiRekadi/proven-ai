import { DOMAIN, CLIENTS } from "../../shared/constants";

const fetchWorksheets = async (endpoint, product, client) => {
  const res = await fetch(`${DOMAIN}/${endpoint}?Product=${product}`, {
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
    }),
  });
  const data = await res.clone().json();
  return mapResponse(data, client);
};

const mapResponse = (data, client) => {
  return client === CLIENTS.SUN_PHARMA.value
    ? { worksheets: data[0], tests: data[1] }
    : data;
};

export default fetchWorksheets;
