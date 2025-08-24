import { useQuery } from "@tanstack/react-query"
import { useStore } from "../../store/useStore"

import axios from "axios"

import { getDomain } from "../../shared/utilities"

const fetchFileContent = async (client, module, path, taskid) => {
  const payload = {
    details: {
      client,
      module,
      path,
      taskid,
    },
  }
  const res = await axios({
    url: `${getDomain(client)}/stp_content_get`,
    method: "POST",
    data: payload,
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
      content: "application/json",
    }),
  })

  return res.data
}

const useFileContent = (filepath, taskid) => {
  const { client, module } = useStore()
  const { data = null } = useQuery({
    queryKey: [client, taskid],
    queryFn: () => fetchFileContent(client, module, filepath, taskid),
    retry: 0,
    refetchOnWindowFocus: false,
    enabled: !!(client && filepath),
  })
  return { data }
}

export default useFileContent
