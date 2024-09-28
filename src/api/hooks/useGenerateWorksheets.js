import { useMutation } from "@tanstack/react-query";
import { fetchNeulandWorksheets, fetchWorksheets } from "../helpers";
import { useStore } from "../../store/useStore";
import { useToast } from "../../shared/components/toast/useToast";
import { CLIENTS } from "../../shared/constants";

const useGenerateWorksheets = (action = "", taskId) => {
  const { module, client } = useStore();
  const toast = useToast();
  const endpoint =
    client === CLIENTS.NEULAND.value
      ? "generate_worksheet_neuland"
      : "generate_worksheets";
  const helper =
    client === CLIENTS.NEULAND.value
      ? (payload) => fetchNeulandWorksheets(endpoint, payload, client)
      : (taskId) => fetchWorksheets(endpoint, taskId, module, client);

  const {
    mutateAsync: generateWorksheets,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: helper,
    onMutate: () => {
      showToast(toast, action, "load");
    },
    onSuccess: () => {
      showToast(toast, action, "success");
    },
    onError: (e) => {
      showToast(toast, action, "error");
    },
  });

  return { generateWorksheets, isPending, isError, isSuccess };
};

const showToast = (toast, action, event) => {
  if (event === "load") {
    if (action === "process") {
      toast.load("Files processing is in progress..");
    } else if (action === "analysis") {
      toast.load("Analysis generation is in progress..");
    } else {
      toast.load("Worksheet details are loading..");
    }
  }
  if (event === "success") {
    if (action === "process") {
      toast.success("Files processed successfully");
    } else if (action === "analysis") {
      toast.success("Analysis generated successfully");
    } else {
      toast.success("Worksheet details loaded successfully");
    }
  }
  if (event === "error") {
    if (action === "process") {
      toast.error("Failed to process files");
    } else if (action === "analysis") {
      toast.error("Failed to generate analysis");
    } else {
      toast.error("Failed to load Worksheet details");
    }
  }
};

export default useGenerateWorksheets;
