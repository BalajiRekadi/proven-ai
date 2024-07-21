const saveImportDocsData = (payload) => {
  return fetch(
    `https://8df4-2405-201-c03a-a1f1-8493-81f2-6680-8b27.ngrok-free.app/save/?obj=${JSON.stringify(
      payload
    )}`,
    {
      method: "post",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    }
  );
};

export default saveImportDocsData;
