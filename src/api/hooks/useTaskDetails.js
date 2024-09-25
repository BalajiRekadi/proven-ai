import { useMutation } from "@tanstack/react-query";
import { useStore } from "../../store/useStore";
import { fetchTaskDetails } from "../helpers";
import { useToast } from "../../shared/components/toast/useToast";

const useTaskDetails = () => {
  const { client, module } = useStore();
  const toast = useToast();

  const { mutateAsync: getTaskDetails } = useMutation({
    mutationFn: (id) => fetchTaskDetails(id, module, client),
    onMutate: () => {
      toast.load("Task details are loading..");
    },
    onSuccess: () => {
      toast.success("Task details loaded successfully");
    },
    onError: (e) => {
      toast.error("Failed to load Task details");
    },
  });

  return { getTaskDetails };
};

export default useTaskDetails;
