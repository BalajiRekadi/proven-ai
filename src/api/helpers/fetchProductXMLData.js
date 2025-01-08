import axios from "axios"

import { getDomain } from "../../shared/utilities"

const fetchProductXMLData = async (taskId, names, client, module) => {
  const res = await axios({
    url: `${getDomain(
      client
    )}/get_product_xml?TaskId=${taskId}&module=${module}&Client=${client}`,
    method: "POST",
    data: { analysis: names },
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
      content: "application/json",
    }),
  })

  return res.data
}

export default fetchProductXMLData
