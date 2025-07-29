import { convertObjDataToArray, getDomain } from "../../shared/utilities"
import axios from "axios"

const processFiles = async (taskId, files, module, client, user) => {
  const spec = files[0]
  const stp = files[1]

  const payload = {
    filenames: { spec, stp },
    details: {
      module,
      client,
      userId: user.userId,
      password: user.password,
      taskid: taskId,
    },
  }

  const res = await axios({
    url: `${getDomain(client)}/process`,
    method: "POST",
    data: payload,
    headers: new Headers({
      "ngrok-skip-browser-warning": "69420",
      content: "application/json",
    }),
  })

  return mapResponse(res.data)
}

const mapResponse = (data, file1, file2) => {
  return {
    taskData: {
      id: data._id,
      company: data.COMPANY,
      facility: data.FACILITY,
      grade: "",
      samplingPoint: "",
      product: data.PRODUCT_NAME,
      specId: data.SPEC_ID,
      methodId: data.STP_No,
      market: data.MARKET,
      code: data.ITEM_CODE,
      labelClaim: data.LABEL_CLAIM,
      testPlanCode: data["Test_Plan_Code"],
      revNo: data["Rev_No"],
      ccNo: data["CC_No"],
      taskId: data.taskid,
      specFileName: file1,
      methodFileName: file2,
      createdBy: data.createdBy,
      createdOn: data.createdOn,
      status: data.status,
    },
    limits: convertObjDataToArray(data.limits),
    annotationValidation: data.AnnotationValidation,
  }
}

export default processFiles
