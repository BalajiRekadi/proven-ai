import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useStore } from "../../store/useStore"

import axios from "axios"

import { getDomain } from "../../shared/utilities"
import { useToast } from "../../shared/components/toast/useToast"

const postRules = async (client, type, rules) => {
  const res = await axios({
    url: `${getDomain(client)}/post_rules?rules=${type}`,
    method: "POST",
    data: { Push: rules },
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
      content: "application/json",
    }),
  })

  return res.data
}

const useSaveRules = () => {
  const toast = useToast()
  const { client } = useStore()
  const queryClient = useQueryClient()

  const {
    mutateAsync: saveRules,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: ({ type, rules }) => postRules(client, type, rules),
    onSuccess: (e, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["rules", client, variables.type],
      })
      toast.success("Rules updated successfully.")
    },
    onError: (e) => {
      toast.error("Failed to update Rules. Please contact admin.")
    },
  })

  return { saveRules, isPending, isError, isSuccess }
}

export default useSaveRules
