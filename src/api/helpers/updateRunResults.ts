import axios from 'axios'

import { getDomain } from '../../shared/utilities'

const updateRunResults = async (payload, taskId, client, module) => {
  const body = {
    tests: payload.map((item) => {
      return {
        ANALYSIS_NAME: item.analysisNames,
        BATCH_LINK: item.batchLinks,
        C_BATCH_TEMP: item.batchTypes,
        Calculation: [item.calculations],
        Calculation_result: [item.calculationResults],
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
    )}/run_update?TaskId=${taskId}&Module=${module}&Client=${client}`,
    method: "POST",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
    }),
    data: body,
  });

  return res.data;
};

export default updateRunResults;
