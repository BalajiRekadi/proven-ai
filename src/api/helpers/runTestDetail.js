import axios from "axios";
import { DOMAIN } from "../../shared/constants";

const runTestDetail = async (payload, endpoint) => {
  const res = await axios({
    url: `${DOMAIN}/${endpoint}/`,
    method: "POST",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
      content: "application/json",
    }),

    data: payload,
  });

  return mapResponse(res.data);
};

const mapResponse = (data) => {
  return data;
  // return [
  //   {
  //     SNo: "1",
  //     "Product/Material(Code)": "20023456",
  //     "Specification ID": "SPEC-001234",
  //     "Test Name": "TestName",
  //     "Test Code": "TestCode",
  //     "Method No.": "MET-001234",
  //     "Test Category": "Category",
  //     "Test Techniques": "Techniques",
  //     "Test Type": "Type",
  //     "Number of Variables": "3",
  //     "S.No. of Variable": "1",
  //     Variable: "Burette Reading of Sample (ml)",
  //     Symbol: "V1",
  //     UOM: "ml",
  //     "Number of special variables": "0",
  //     "Number of Sub Tests": "1",
  //     Formula: "(V1*V2*100)/V3",
  //     NLT: "nan",
  //     NMT: "0.5",
  //     Units: "['ml', 'mg/ml', 'mg', [...]]",
  //     "Pass limit Description": "nan",
  //   },
  //   {
  //     SNo: 2,
  //     "Product/Material(Code)": null,
  //     "Specification ID": null,
  //     "Test Name": null,
  //     "Test Code": null,
  //     "Method No.": null,
  //     "Test Category": null,
  //     "Test Techniques": null,
  //     "Test Type": null,
  //     "Number of Variables": null,
  //     "S.No. of Variable": "2",
  //     Variable: "K F Factor (mg/ml)",
  //     Symbol: "V2",
  //     UOM: "mg/ml",
  //     "Number of special variables": null,
  //     "Number of Sub Tests": null,
  //     Formula: null,
  //     NLT: null,
  //     NMT: null,
  //     Units: null,
  //     "Pass limit Description": null,
  //   },
  //   {
  //     SNo: "3",
  //     "Product/Material(Code)": null,
  //     "Specification ID": null,
  //     "Test Name": null,
  //     "Test Code": null,
  //     "Method No.": null,
  //     "Test Category": null,
  //     "Test Techniques": null,
  //     "Test Type": null,
  //     "Number of Variables": null,
  //     "S.No. of Variable": "3",
  //     Variable: "Weight of sample(mg)",
  //     Symbol: "V3",
  //     UOM: "mg",
  //     "Number of special variables": null,
  //     "Number of Sub Tests": null,
  //     Formula: null,
  //     NLT: null,
  //     NMT: null,
  //     Units: null,
  //     "Pass limit Description": null,
  //   },
  // ];
};

export default runTestDetail;
