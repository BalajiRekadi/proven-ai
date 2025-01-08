import axios from 'axios'

import { getDomain } from '../../shared/utilities'

const fetchAnalysisXMLData = async (taskId, module, client) => {
  const res = await axios({
    url: `${getDomain(
      client
    )}/get_analysis_xml?TaskId=${taskId}&module=${module}&Client=${client}`,
    method: "POST",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
      content: "application/json",
    }),
  })

  return res.data
}

export default fetchAnalysisXMLData
