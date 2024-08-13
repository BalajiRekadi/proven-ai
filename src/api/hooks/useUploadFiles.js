import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "../helpers";
import { useStore } from "../../store/useStore";
import { useToast } from "../../shared/components/toast/useToast";

const useUploadFiles = () => {
  const { client } = useStore();
  const toast = useToast();
  const endpoint =
    client === "neuland" ? "upload_files_neuland" : "upload_files";
  const {
    mutateAsync: uploadFiles,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: (files) => uploadFile(endpoint, files),
    onMutate: () => {
      toast.load("Files upload is in progress..");
    },
    onSuccess: () => {
      toast.success("Files uploaded successfully");
    },
    onError: (e) => {
      toast.error("Failed to upload files");
    },
  });

  return { uploadFiles, isPending, isError, isSuccess };
};

export default useUploadFiles;
