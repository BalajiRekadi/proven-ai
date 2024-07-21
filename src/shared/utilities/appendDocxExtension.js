const appendDocxExtension = (name) => {
  if (!name) return "";
  const index = name.lastIndexOf(".");
  return name.slice(0, index) + ".docx";
};

export default appendDocxExtension;
