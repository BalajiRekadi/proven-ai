import { DOMAIN } from "../../shared/constants";

const uploadFiles = async (files, client) => {
  const form = new FormData();
  let res;
  if (client === "neuland") {
    form.append("file1", files[1]);
    res = await fetch(`${DOMAIN}/upload_files_neuland/`, {
      method: "post",
      body: form,
    });
  } else {
    form.append("file1", files[0]);
    form.append("file2", files[1]);
    res = await fetch(`${DOMAIN}/upload_files/`, {
      method: "post",
      body: form,
    });
  }

  return res.clone().json();
};

export default uploadFiles;
