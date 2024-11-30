import { DOMAIN } from "../../shared/constants/constants";
import axios from "axios";

const fetchWorksheets = async (endpoint, taskId, module, client) => {
  const res = await axios({
    url: `${DOMAIN}/${endpoint}?TaskId=${taskId}&module=${module}&Client=${client}`,
    method: "POST",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
    }),
  });

  return mapResponse(res.data.tests);
};

// TODO: fetchTaskDetails also uses same mapping, write a shared mapper
const mapResponse = (tests) => {
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

export default fetchWorksheets;
