import { useQuery } from "@tanstack/react-query"
import { useStore } from "../../store/useStore"

import axios from "axios"

import { getDomain } from "../../shared/utilities"

const fetchFileContent = async (client, filepath) => {
  const res = await axios({
    url: `${getDomain(client)}/stp_content?path=${filepath}`,
    method: "GET",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
      content: "application/json",
    }),
  })

  return res.data
}

const useFileContent = (filepath) => {
  const { client } = useStore()
  const { data = null } = useQuery({
    queryKey: [client, filepath],
    queryFn: () => fetchFileContent(client, filepath),
    retry: 0,
    enabled: !!(client && filepath),
  })
  return { data }
}

export default useFileContent
