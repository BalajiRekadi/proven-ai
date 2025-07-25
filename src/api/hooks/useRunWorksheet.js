import { useMutation } from "@tanstack/react-query"
import { runWorksheet } from "../helpers"
import { useToast } from "../../shared/components/toast/useToast"
import { useStore } from "../../store/useStore"

const useRunWorksheet = () => {
  const toast = useToast()
  const { client } = useStore()
  const endpoint = "run"
  const {
    mutateAsync: runWorksheets,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: (payload) => runWorksheet(payload, endpoint, client),
    onMutate: () => {
      toast.load("Worksheet content is loading..")
    },
    onSuccess: () => {
      toast.success("Worksheet content loaded successfully")
    },
    onError: (e) => {
      toast.error("Failed to load Worksheet content")
    },
  })

  return { runWorksheets, isPending, isError, isSuccess }
}

export default useRunWorksheet
