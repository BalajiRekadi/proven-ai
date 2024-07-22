const saveWorksheetData = (payload) => {
  return fetch(
    `https://8df4-2405-201-c03a-a1f1-8493-81f2-6680-8b27.ngrok-free.app/save2`,
    {
      method: "post",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
        content: "application/json",
      }),
      body: JSON.parse(JSON.stringify(payload)),
    }
  );
};

export default saveWorksheetData;
