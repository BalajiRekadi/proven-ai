import { useQuery } from "@tanstack/react-query";
import { useStore } from "../../store/useStore";
import { fetchTasks } from "../helpers";

const useTasks = () => {
  const { client, module } = useStore();
  const { data = null } = useQuery({
    queryKey: [`${client}${module}`],
    queryFn: () => fetchTasks(module, client),
    retry: 0,
    enabled: !!(client && module),
  });
  return { data };
};

export default useTasks;
