import { useQuery } from "@tanstack/react-query"
import { useStore } from "../../store/useStore"
import { fetchAnalysisXMLData } from "../helpers"

const useAnalysisXMLData = (taskId) => {
  const { client, module } = useStore()
  const { data = null } = useQuery({
    queryKey: [client, module, taskId],
    queryFn: () => fetchAnalysisXMLData(taskId, module, client),
  })
  return { data }
}

export default useAnalysisXMLData
