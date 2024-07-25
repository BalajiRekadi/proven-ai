import { DOMAIN } from "../../shared/constants";
import { appendDocxExtension } from "../../shared/utilities";

const processFiles = async (fileName) => {
  // const name = appendDocxExtension(fileName);
  // const res = await fetch(`${DOMAIN}/process/?file_name=${name}`, {
  //   headers: new Headers({
  //     "ngrok-skip-browser-warning": "69420",
  //   }),
  // });
  // const data = await res.clone().json();
  const data = {
    Product: "3000714",
    Test_Plan_Code: "",
    MARKET: "Not applicable",
    Rev_No: "5.0",
    CC_No: "1614274",
  };
  return {
    company: "",
    facility: "",
    product: data["Product"],
    specId: data["Spec_id"] || "NA",
    methodId: data["method_id"] || "NA",
    market: data["MARKET"],
    Test_Plan_Code: data["Test_Plan_Code"],
    Rev_No: data["Rev_No"],
    CC_No: data["CC_No"],
  };
};

export default processFiles;

// {
//   "Product": "3000714",
//   "Test_Plan_Code": "",
//   "MARKET": "Not applicable",
//   "Rev_No": "5.0",
//   "CC_No": "1614274"
// }
