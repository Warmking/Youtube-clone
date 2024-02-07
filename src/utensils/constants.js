const API_KEY = "AIzaSyBovN8HESviCoFiLm5VORtzRtRfCDbKv18";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

// export const SuggetionVideoList_API =
//   "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
//   API_KEY +
//   "&q=";

export const SEARCH_SUGGESION_API = "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q="