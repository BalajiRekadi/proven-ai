import axios from "axios";

const runWorksheet = async (product, payload) => {
  const res = await axios({
    url: `https://8df4-2405-201-c03a-a1f1-8493-81f2-6680-8b27.ngrok-free.app/run/?code=${product}`,
    method: "POST",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
      content: "application/json",
    }),

    data: payload,
  });

  return res.data;
};

export default runWorksheet;
