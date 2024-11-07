import { useMutation } from "@tanstack/react-query";
import { mergeAllAnalysis } from "../helpers";
import { useToast } from "../../shared/components/toast/useToast";
import { useStore } from "../../store/useStore";

const useMergeAll = () => {
  const toast = useToast();
  const { module, client } = useStore();

  const {
    mutateAsync: mergeAll,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: (taskId) => mergeAllAnalysis(taskId, module, client),
    onSuccess: () => {
      toast.success("Successfully merged all solutions.");
    },
    onError: (e) => {
      toast.error("Failed to merge all analysis.");
    },
  });

  return { mergeAll, isPending, isError, isSuccess };
};

export default useMergeAll;
