import axios from "axios"
import { getDomain } from "../../shared/utilities"

const runAnalysis = async (taskId, item, module, client, fieldIndex) => {
  // TODO: map calculations for caliber flow
  const payload = {
    tests: [
      {
        ANALYSIS_NAME: [item.analysisNames[fieldIndex]],
        BATCH_LINK: [item.batchLinks[fieldIndex]],
        C_BATCH_TEMP: [item.batchTypes[fieldIndex]],
        Calculation: [item.calculations],
        Calculation_result: [item.calculationResults],
        Heading: item.heading,
        ID: [item.ids[fieldIndex]],
        Paragraph: [item.paragraphs[fieldIndex]],
        Result: [item.runResults[fieldIndex]],
        SPEC_TYPE: [item.specTypes[fieldIndex]],
        STAGE: [item.stages[fieldIndex]],
        Subheading: [item.subHeadings[fieldIndex]],
      },
    ],
  }
  const res = await axios({
    url: `${getDomain(
      client
    )}/Run?TaskId=${taskId}&module=${module}&Client=${client}`,
    method: "POST",
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
    }),
    data: payload,
  })

  return res.data
}

export default runAnalysis
