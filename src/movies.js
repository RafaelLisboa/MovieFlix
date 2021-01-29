require('dotenv').config();

const api_key = process.env.REACT_APP_API_KEY
console.log(api_key);
const urlBase = "https://api.themoviedb.org/3/discover/";
// https://api.themoviedb.org/3/?api_key=e29e9dbf058dc6c797f9538fa41e8844

const getContentData = async (genrerID, isMovie = true) => {
  const category = isMovie ? "movie" : "tv";
  const url = `${urlBase}${category}/?api_key=${api_key}&with_genres=${genrerID}`;
  let fecthData = await fetch(url);
  const json = await fecthData.json();
  return json;
};

const getMainContent = async () => {
  const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}`;
  const data = await fetch(url);
  const json = await data.json();
  const list = json.results;
  const randomIndex = Math.floor(Math.random() * list.length);
  const randomItem = list[randomIndex];
  list.splice(randomIndex, 1);
  console.log(randomItem);
  console.log(list);
  return {
    main: randomItem,
    list: list,
  };
};

const mainContent = {
  getContent: async (genrerID) => getContentData(genrerID),
  getMainContent: async () => getMainContent(),
};
export default mainContent;
