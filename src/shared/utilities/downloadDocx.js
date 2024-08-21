import { Document, Packer, Paragraph, TextRun } from "docx";
import downloadFile from "./downloadFile";

const downloadDocx = async (content, name) => {
  // Create a new Document
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [new TextRun(content)],
          }),
          // new Paragraph({
          //   children: [
          //     new TextRun({
          //       text: "Dynamic content here: ",
          //     }),
          //     new TextRun({
          //       text: "John Doe", // Replace with your dynamic content
          //       bold: true,
          //     }),
          //   ],
          // }),
        ],
      },
    ],
  });

  // Convert the document to a Blob
  const blob = await Packer.toBlob(doc);
  const url = URL.createObjectURL(blob);

  // Create an anchor element and trigger the download
  const a = document.createElement("a");
  a.href = url;
  a.download = `${name}.docx`;
  a.click();
  URL.revokeObjectURL(url);
};

export default downloadDocx;
