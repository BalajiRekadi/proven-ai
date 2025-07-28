import { useMutation } from "@tanstack/react-query"
import { useStore } from "../../store/useStore"

import axios from "axios"

import { getDomain } from "../../shared/utilities"
import { useToast } from "../../shared/components/toast/useToast"

const postFileContent = async (taskId, module, client, content) => {
  const res = await axios({
    url: `${getDomain(
      client
    )}/stp_content?TaskId=${taskId}&module=${module}&Client=${client}&content=${content}`,
    method: "POST",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
      content: "application/json",
    }),
  })

  return res.data
}

const usePostFileContent = () => {
  const toast = useToast()
  const { module, client } = useStore()
  const {
    mutateAsync: saveFileContent,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: ({ taskId, content }) =>
      postFileContent(taskId, module, client, content),
    onSuccess: (e) => {
      toast.success("Annotations updated successfully.")
    },
    onError: (e) => {
      toast.error("Failed to update Annotations. Please contact admin.")
    },
  })

  return { saveFileContent, isPending, isError, isSuccess }
}

export default usePostFileContent
