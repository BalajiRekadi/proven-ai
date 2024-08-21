import { useMutation } from "@tanstack/react-query";
import { saveWorksheetData } from "../helpers";
import { useToast } from "../../shared/components/toast/useToast";
import { useStore } from "../../store/useStore";
import { CLIENTS } from "../../shared/constants";

const useSaveWorksheetData = (step = "") => {
  const toast = useToast();
  const { client } = useStore();
  const endpoint = step === "tests" ? "save3" : "save2";
  const {
    mutateAsync: saveWorksheet,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: (payload) => saveWorksheetData(payload, endpoint),
    // mutationKey: [],
    cacheTime: 0,
    onSuccess: () => {
      toast.success("Worksheet data saved successfully");
    },
    onError: (e) => {
      toast.error("Failed to save Worksheet data");
    },
  });

  return { saveWorksheet, isPending, isError, isSuccess };
};

export default useSaveWorksheetData;
