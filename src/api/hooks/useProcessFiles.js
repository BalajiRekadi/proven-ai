import { useMutation } from "@tanstack/react-query";
import { processFiles } from "../helpers";
import { useToast } from "../../shared/components/toast/useToast";

const useProcessFiles = () => {
  const toast = useToast();
  const {
    mutateAsync: processFile,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: (files) => processFiles(files),
    onMutate: () => {
      toast.load("Files processing is in progress..");
    },
    onSuccess: () => {
      toast.success("Files processed successfully");
    },
    onError: (e) => {
      toast.error("Failed to process files");
    },
  });

  return { processFile, isPending, isError, isSuccess };
};

export default useProcessFiles;
