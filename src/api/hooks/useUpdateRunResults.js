import { useMutation } from "@tanstack/react-query";
import { useToast } from "../../shared/components/toast/useToast";
import { useStore } from "../../store/useStore";
import { updateRunResults } from "../helpers";

const useUpdateRunResults = (taskId) => {
  const toast = useToast();
  const { client, module } = useStore();
  const {
    mutateAsync: saveRunResults,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: (payload) => updateRunResults(payload, taskId, client, module),
    onMutate: () => {
      toast.load("Saving changes..");
    },
    onSuccess: () => {
      toast.success("Changes saved successfully");
    },
    onError: (e) => {
      toast.error("Failed to save changes.");
    },
  });

  return { saveRunResults, isPending, isError, isSuccess };
};

export default useUpdateRunResults;
