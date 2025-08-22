import { useQuery } from "@tanstack/react-query"
import { useStore } from "../../store/useStore"

import axios from "axios"

import { getDomain } from "../../shared/utilities"

const fetchRules = async (type, client) => {
  const res = await axios({
    url: `${getDomain(client)}/get_rules?rules=${type}`,
    method: "POST",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
      content: "application/json",
    }),
  })

  return res.data
}

const useRules = (type) => {
  const { client } = useStore()
  const { data = [] } = useQuery({
    queryKey: ["rules", client, type],
    queryFn: () => fetchRules(type, client),
    retry: 0,
    refetchOnWindowFocus: false,
    enabled: !!(client && type),
  })
  return { data }
}

export default useRules
