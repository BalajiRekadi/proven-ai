import axios from 'axios'

import { DOMAIN } from '../../shared/constants/constants'
import { convertObjDataToArray } from '../../shared/utilities'

const fetchTaskDetails = async (id, module, client) => {
  const res = await axios({
    url: `${DOMAIN}/TaskID_search?TaskId=${id}&module=${module}&Client=${client}`,
    method: "POST",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
      content: "application/json",
    }),
  });

  return mapResponse(res.data);
};

const mapResponse = (data) => {
  return {
    taskData: {
      id: data._id,
      company: data.COMPANY,
      facility: data.FACILITY,
      grade: data.GRADE,
      samplingPoint: data.SAMPLING_POINT,
      product: data.PRODUCT_NAME,
      specId: data.SPEC_ID,
      methodId: data.STP_No,
      market: data.MARKET,
      code: data.ITEM_CODE,
      testPlanCode: data["Test_Plan_Code"],
      revNo: data["Rev_No"],
      ccNo: data["CC_No"],
      taskId: data.taskid,
      specFileName: data.filename1,
      methodFileName: data.filename2,
      createdBy: data.createdBy,
      createdOn: data.createdOn,
      status: data.status,
    },
    productData: {
      product: data.product,
      product_grade: data.product_grade,
    },
    analysisData: mapAnalysisData(data.tests),
    limitsData: convertObjDataToArray(data.limits),
    annotationValidation: data.AnnotationValidation
  };
};

const mapAnalysisData = (tests=[]) => {
  const data = [];
  tests.forEach((item) => {
    data.push({
      analysisNames: item.ANALYSIS_NAME,
      batchLinks: item.BATCH_LINK,
      batchTypes: item.C_BATCH_TEMP,
      calculations: item.Calculation,
      calculationResults: item.Calculation_result,
      heading: item.Heading,
      paragraphs: item.Paragraph,
      runResults: item.Result,
      specTypes: item.SPEC_TYPE,
      stages: item.STAGE,
      subHeadings: item.Subheading,
    });
  });
  return data;
};

export default fetchTaskDetails;
