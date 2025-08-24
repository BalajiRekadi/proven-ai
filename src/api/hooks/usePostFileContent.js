import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useStore } from "../../store/useStore"

import axios from "axios"

import { getDomain } from "../../shared/utilities"
import { useToast } from "../../shared/components/toast/useToast"

const postFileContent = async (module, client, content) => {
  const encoded = encodeURIComponent(content)
  const res = await axios({
    url: `${getDomain(client)}/stp_content?&module=${module}&Client=${client}`,
    method: "POST",
    data: { content: encoded },
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
  const queryClient = useQueryClient()

  const {
    mutateAsync: saveFileContent,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: ({ content }) => postFileContent(module, client, content),
    onSuccess: (e, variables) => {
      // queryClient.invalidateQueries({
      //   queryKey: [client, variables.taskid],
      // })
      toast.success("Annotations updated successfully.")
    },
    onError: (e) => {
      toast.error("Failed to update Annotations. Please contact admin.")
    },
  })

  return { saveFileContent, isPending, isError, isSuccess }
}

export default usePostFileContent
