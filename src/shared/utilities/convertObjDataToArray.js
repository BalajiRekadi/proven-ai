const convertObjDataToArray = (data) => {
  const keys = Object.keys(data);
  const length = data[keys[0]]?.length;
  const result = Array(length).fill({});

  if (keys?.length) {
    result.forEach((obj, index) => {
      keys.forEach((key) => {
        obj[key] = data[key][index];
      });
    });
  }

  return result;
};

export default convertObjDataToArray;
