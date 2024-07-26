import { DOMAIN } from "../../shared/constants";

const uploadFiles = async (files) => {
  const form = new FormData();
  form.append("file1", files[0]);
  form.append("file2", files[1]);

  const res = await fetch(`${DOMAIN}/upload_files/`, {
    method: "post",
    body: form,
  });

  return res.clone().json();
};

export default uploadFiles;
