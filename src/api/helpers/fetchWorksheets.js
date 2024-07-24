import { DOMAIN } from "../../shared/constants";

const fetchWorksheets = async (product) => {
  const res = await fetch(`${DOMAIN}/generate_worksheet/?Product=${product}`, {
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
    }),
  });
  const data = await res.clone().json();
  return data;
};

export default fetchWorksheets;
