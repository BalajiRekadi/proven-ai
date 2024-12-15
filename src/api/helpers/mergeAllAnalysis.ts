import axios, { AxiosHeaders } from 'axios'

import { getDomain } from '../../shared/utilities'

const mergeAllAnalysis = async (taskId: string, module: string, client: string) => {
  const res = await axios({
    url: `${getDomain(client)}/merge_all?TaskId=${taskId}&module=${module}&Client=${client}`,
    method: "POST",
    headers: new AxiosHeaders({
      "ngrok-skip-browser-warning": "69420",
    }),
  });

  return res.data;
}

export default mergeAllAnalysis;
