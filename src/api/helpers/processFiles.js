import { appendDocxExtension } from "../../shared/utilities";

const processFiles = async (fileName) => {
  const name = appendDocxExtension(fileName);
  const res = await fetch(
    `https://8df4-2405-201-c03a-a1f1-8493-81f2-6680-8b27.ngrok-free.app/process/?file_name=${name}`,
    {
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    }
  );
  const data = await res.clone().json();
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
