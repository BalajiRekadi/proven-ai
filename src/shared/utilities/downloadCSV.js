import downloadFile from "./downloadFile";
import deepClone from "./deepClone";

const exportToCsv = (data, filename) => {
  let headers = Object.keys(data[0]);
  headers.unshift("Index");
  headers = headers.join(",");
  let csv = data.reduce((acc, item, index) => {
    item.content = item.content.replaceAll("\n", " ");
    item.content = item.content.replaceAll(",", "");
    acc.push([index + 1, Object.values(item)].join(","));
    return acc;
  }, []);
  downloadFile({
    data: [headers, ...csv].join("\n"),
    fileName: `${filename}.csv`,
    fileType: "text/csv",
  });
};

export default exportToCsv;
