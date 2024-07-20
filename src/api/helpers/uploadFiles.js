// TODO: API is giving error
const uploadFiles = async (files) => {
  const file1 = await files[0].text();
  const file2 = await files[1].text();
  return fetch("https://5b20-49-205-251-99.ngrok-free.app/upload/", {
    method: "post",
    mode: "no-cors",
    body: {
      file1,
      file2,
    },
  });
  // const reader1 = new FileReader();
  // const reader2 = new FileReader();
  // let file1;
  // let file2;
  // reader1.onload = () => {
  //   var data = reader1.result;
  //   // var array = new Int8Array(data);
  //   const decoder = new TextDecoder();
  //   file1 = decoder.decode(data);
  //   if (file1 && file2) {
  //     fetchFiles(file1, file2);
  //   }
  // };
  // reader2.onload = () => {
  //   var data = reader2.result;
  //   // var array = new Int8Array(data);
  //   const decoder = new TextDecoder();
  //   file2 = decoder.decode(data);
  //   if (file1 && file2) {
  //     fetchFiles(file1, file2);
  //   }
  // };
  // reader1.readAsArrayBuffer(files[0]);
  // reader2.readAsArrayBuffer(files[1]);
};

// const fetchFiles = (file1, file2) => {
//   // return fetch("https://5b20-49-205-251-99.ngrok-free.app/upload/", {
//   //   method: "post",
//   //   body: {
//   //     file1,
//   //     file2,
//   //   },
//   // });
//   const p = new Promise((resolve) => {
//     resolve("Files uploaded successfully");
//   });
//   return p;
// };

export default uploadFiles;
