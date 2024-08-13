import { useMutation } from "@tanstack/react-query";
import { fetchNeulandWorksheets, fetchWorksheets } from "../helpers";
import { useStore } from "../../store/useStore";
import { useToast } from "../../shared/components/toast/useToast";

const useGenerateWorksheets = (action = "") => {
  const { client } = useStore();
  const toast = useToast();
  const endpoint =
    client === "neuland" ? "generate_worksheet_neuland" : "generate_worksheet";
  const helper =
    client === "neuland" ? fetchNeulandWorksheets : fetchWorksheets;

  const {
    mutateAsync: generateWorksheets,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: (payload) => helper(endpoint, payload),
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
      toast.load("Files processed successfully");
    } else if (action === "analysis") {
      toast.load("Analysis generated successfully");
    } else {
      toast.load("Worksheet details loaded successfully");
    }
  }
  if (event === "error") {
    if (action === "process") {
      toast.load("Failed to process files");
    } else if (action === "analysis") {
      toast.load("Failed to generate analysis");
    } else {
      toast.load("Failed to load Worksheet details");
    }
  }
};

export default useGenerateWorksheets;
