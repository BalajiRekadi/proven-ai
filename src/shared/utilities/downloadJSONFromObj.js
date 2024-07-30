import downloadFile from "./downloadFile";

const downloadJSONFromObj = (data) => {
  downloadFile({
    data: JSON.stringify(data),
    fileName: "users.json",
    fileType: "text/json",
  });
};

export default downloadJSONFromObj;
