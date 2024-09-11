import { useMutation } from "@tanstack/react-query";
import { login } from "../helpers";
import { useToast } from "../../shared/components/toast/useToast";

const useLogin = () => {
  const toast = useToast();
  const {
    mutateAsync: userLogin,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: (values) => login(values),
    onError: (e) => {
      toast.error("Failed to login, please check your details.");
    },
  });

  return { userLogin, isPending, isError, isSuccess };
};

export default useLogin;
