import { useMutation } from "@tanstack/react-query"
import { processFiles } from "../helpers"
import { useToast } from "../../shared/components/toast/useToast"
import { useStore } from "../../store/useStore"

const useProcessFiles = () => {
  const toast = useToast()
  const { module, client, user } = useStore()
  const {
    mutateAsync: processFile,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: ({ files, taskId }) =>
      processFiles(taskId, files, module, client, user),
    onMutate: () => {
      toast.load("Files processing is in progress..")
    },
    onSuccess: () => {
      toast.success("Files processed successfully")
    },
    onError: (e) => {
      toast.error("Failed to process files")
    },
  })

  return { processFile, isPending, isError, isSuccess }
}

export default useProcessFiles
