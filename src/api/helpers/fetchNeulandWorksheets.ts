import { DOMAIN } from '../../shared/constants/constants'

const fetchNeulandWorksheets = async (endpoint, file) => {
  const res = await fetch(`${DOMAIN}/${endpoint}?Product=${file}`, {
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
    }),
  });
  let data = await res.clone().json();
  return mapResponse(data, file);
};

const mapResponse = (data, file) => {
  return {
    taskData: {
      company: "",
      facility: "",
      grade: "",
      samplingPoint: "",
      product: data["ProductName"] || data["Title"],
      specId: data["SPEC_ID"] || "NA",
      methodId: data["STP_NO"] || "NA",
      market: data["MARKET"],
      code: data["ProductName"],
      testPlanCode: data["Test_Plan_Code"],
      revNo: data["Rev_No"],
      ccNo: data["CC_No"],
      specFile: file,
      methodFile: file,
    },
    worksheetData: mapSections(data["Tables"]),
  };
};

const mapSections = (data) => {
  const sections = Object.values(data);
  const dict = {};
  sections.forEach((item) => {
    dict[item.TestName] = [
      { "Worksheet Content": { value: item.WorkSheetContent } },
    ];
  });
  return dict;
};

export default fetchNeulandWorksheets;
