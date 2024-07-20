// TODO: api is giving file not found
const processFiles = () => {
  //   return fetch(
  //     "https://5b20-49-205-251-99.ngrok-free.app/upload/?file1_name=1_atp.pdf",
  //     {
  //       method: "post",
  //       mode: "no-cors",
  //     }
  //   );
  return new Promise((resolve) => {
    resolve({
      Product: "3004403",
      Test_Plan_Code: null,
      MARKET: null,
      Rev_No: "3.0",
      CC_No: "1655369, 1619922",
    });
  });
};

export default processFiles;
