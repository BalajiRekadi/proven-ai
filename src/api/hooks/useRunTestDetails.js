import { useMutation } from "@tanstack/react-query"
import { runTestDetail } from "../helpers"
import { useToast } from "../../shared/components/toast/useToast"

const useRunTestDetails = () => {
  const toast = useToast()
  const endpoint = "calc"
  const { mutateAsync: runTestDetails } = useMutation({
    mutationFn: (payload) => runTestDetail(payload, endpoint),
    onMutate: () => {
      toast.load("Test details are loading..")
    },
    onSuccess: () => {
      toast.success("Test details loaded successfully.")
    },
    onError: (e) => {
      toast.error("Failed to load Test details!")
    },
  })

  return { runTestDetails }
}

export default useRunTestDetails
