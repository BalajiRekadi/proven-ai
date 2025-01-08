import { useMutation } from "@tanstack/react-query"
import { fetchProductXMLData } from "../helpers"
import { useToast } from "../../shared/components/toast/useToast"
import { useStore } from "../../store/useStore"

const useProductXMLData = () => {
  const toast = useToast()
  const { client, module } = useStore()

  const {
    mutateAsync: getProductXMLData,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: ({ taskId, names }) =>
      fetchProductXMLData(taskId, names, client, module),
    onError: (e) => {
      toast.error("Failed to download product XML.")
    },
  })

  return { getProductXMLData, isPending, isError, isSuccess }
}

export default useProductXMLData
