const convertObjDataToArray = (data) => {
  const keys = Object.keys(data);
  const length = data[keys[0]]?.length;
  const result = [];

  if (keys?.length) {
    for (let i = 0; i < length; i++) {
      const item = {};
      keys.forEach((key) => {
        item[key] = data[key][i];
      });
      result.push(item);
    }
  }

  return result;
};

export default convertObjDataToArray;
