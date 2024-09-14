import { useMutation } from "@tanstack/react-query";
import { register } from "../helpers";
import { useToast } from "../../shared/components/toast/useToast";

const useRegister = () => {
  const toast = useToast();
  const {
    mutateAsync: userRegister,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: (values) => register(values),
    onSuccess: (e) => {
      toast.error("User registration is successful.");
    },
    onError: (e) => {
      toast.error("Failed to Register, please check your details.");
    },
  });

  return { userRegister, isPending, isError, isSuccess };
};

export default useRegister;
