import { useQuery } from "@tanstack/react-query";
import { useStore } from "../../store/useStore";
import { CLIENTS } from "../../shared/constants";
import { fetchTasks } from "../helpers";

const useDashboard = () => {
  const { client, module } = useStore();
  const endpoint =
    client === CLIENTS.SUN_PHARMA.value ? "dashboard_sunpharma" : "dashboard";
  const { data = [] } = useQuery({
    queryKey: [`${client}${module}`],
    queryFn: () => fetchTasks(endpoint),
    retry: 0,
    enabled: !!(client && module),
  });
  return { data };
};

export default useDashboard;
