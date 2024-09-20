import { useQuery } from "@tanstack/react-query";
import { useStore } from "../../store/useStore";
import { CLIENTS } from "../../shared/constants";
import { fetchTasks } from "../helpers";

const useTasks = () => {
  const { client, module } = useStore();
  const { data = [] } = useQuery({
    queryKey: [`${client}${module}`],
    queryFn: () => fetchTasks(module, client),
    retry: 0,
    enabled: !!(client && module),
  });
  return { data };
};

export default useTasks;

// {"Code":"20023456",
//   "specid":"SPEC-001234",
//   "testname":"Water content",
//   "TestCode":"t04",
//   "MethodNo":"MET-001234",
//   "TestCategory":"Category",
//   "TestTechniques":"Techniques",
//   "TestType":"Type",
//   "Text":"Calculate the percentage of water using the formula

//   % Water w/w = (V1 × V2 × 100) ÷ (V3)

//   V1 = Burette Reading of Sample (ml)

//   V2 = K F Factor (mg/ml)

//   V3 = Weight of sample(mg)

//   Formula : (V1*V2*100)/V3"}
