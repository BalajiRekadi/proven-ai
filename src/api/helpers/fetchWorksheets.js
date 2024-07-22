//TODO: replace with product param
const fetchWorksheets = async (product) => {
  const res = await fetch(
    `https://8df4-2405-201-c03a-a1f1-8493-81f2-6680-8b27.ngrok-free.app/generate_worksheet/?Product=${"3000714"}`,
    {
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    }
  );
  const data = await res.clone().json();
  return data;
};

export default fetchWorksheets;
