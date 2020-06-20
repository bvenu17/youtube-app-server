const axios = require("axios");

// let API_KEY = process.env.API_KEY;
const getChannelUploads = async () => {
  let channelData;

  channelData = await axios.get(
    "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=12&playlistId=UUzb8YnyvIzyRLGXARpUAZlg&key=" +
      process.env.API_KEY
  );

  //  channelData = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&pageToken='+page+'&maxResults=5&playlistId=UUzb8YnyvIzyRLGXARpUAZlg&key=AIzaSyBKzTK79JJ_2CWcaiD-hFHXVNLSLUhpNq0')

  return channelData;
};

const getChannelUploadsPage = async (token) => {
  let channelData;

  channelData = await axios.get(
    "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=12&pageToken=" +
      token +
      "&playlistId=UUzb8YnyvIzyRLGXARpUAZlg&key="+ process.env.API_KEY
  );
  return channelData;
};

const getVideosByKeyword = async (searchValue, token) => {
  let searchedVideos;
  let str = searchValue.replace(" ", "+");
  let keyword = "%22" + str + "%22";
  console.log("Searching videos for " + keyword);
  if (!token) {
    searchedVideos = await axios.get(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCzb8YnyvIzyRLGXARpUAZlg&maxResults=12&q=" +
        searchValue +
        "&type=video&key="+ process.env.API_KEY
    );
  } else {
    searchedVideos = await axios.get(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCzb8YnyvIzyRLGXARpUAZlg&maxResults=12&q=" +
        searchValue +
        "&pageToken=" +
        token +
        "&type=video&key=" +process.env.API_KEY
    );
  }

  return searchedVideos;
};

module.exports = {
  getChannelUploads,
  getChannelUploadsPage,
  getVideosByKeyword,
};
