const convertArrayDataToObj = (arr) => {
  const result = {};
  if (arr?.length) {
    const keys = Object.keys(arr[0]);
    keys.forEach((key) => {
      result[key] = arr.map((obj) => {
        return obj[key];
      });
    });
  }
  return result;
};

export default convertArrayDataToObj;
