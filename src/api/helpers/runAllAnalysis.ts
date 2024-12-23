import axios from "axios";

import { getDomain } from "../../shared/utilities";

const runAllAnalysis = async (taskId, module, client, data) => {
  // TODO: map calculations for caliber flow
  const payload = {
    tests: data.map((item) => {
      return {
        ANALYSIS_NAME: item.analysisNames,
        BATCH_LINK: item.batchLinks,
        C_BATCH_TEMP: item.batchTypes,
        Calculation: item.calculations,
        Calculation_result: item.calculationResults,
        Heading: item.heading,
        Paragraph: item.paragraphs,
        Result: item.runResults,
        SPEC_TYPE: item.specTypes,
        STAGE: item.stages,
        Subheading: item.subHeadings,
      };
    }),
  };
  const res = await axios({
    url: `${getDomain(
      client
    )}/Run?TaskId=${taskId}&module=${module}&Client=${client}`,
    method: "POST",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
    }),
    data: payload,
  });

  return res.data;
};

export default runAllAnalysis;
