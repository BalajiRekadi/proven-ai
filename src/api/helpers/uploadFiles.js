const uploadFiles = async (files) => {
  const form = new FormData();
  form.append("file1", files[0]);
  form.append("file2", files[1]);

  const res = await fetch(
    "https://8df4-2405-201-c03a-a1f1-8493-81f2-6680-8b27.ngrok-free.app/upload_files/",
    {
      method: "post",
      body: form,
    }
  );

  return res.clone().json();
};

export default uploadFiles;
