const express = require('express');
const router = express.Router();

const data = require('../data');
const youtubeData = data.youtubeData;

router.get('/api/channel', async (req, res) => {
    try {
    //   let task = await taskData.getTaskById(req.params.id);
    // let token;
    // console.log("Token is: " + req.body.pageToken)
    // if(!req.body.pageToken) {
    //     token ="";
    // } else {
    //     token = req.body.pageToken;
    // }
    let channelDetails = await youtubeData.getChannelUploads();
    console.log(channelDetails.data);
    res.json(channelDetails.data);
    //   res.send("test successful");
    } catch (e) {
      res.status(404).json({error: 'channel data not found'});
    }
  }); 

  router.post('/api/channel/page', async (req, res) => {
    try {
    console.log("Token is :" + req.body.pageToken )
    let channelDetails = await youtubeData.getChannelUploadsPage(req.body.pageToken);
    console.log(channelDetails.data);
    res.json(channelDetails.data);
    //   res.send("test successful");
    } catch (e) {
      res.status(404).json({error: 'task not found'});
    }
  }); 

  router.post('/api/channel/search', async (req, res) => {
    try {
    console.log("Keyword is :" + req.body.keyword )
    let videoList = await youtubeData.getVideosByKeyword(req.body.keyword,req.body.pageToken);
    console.log(videoList.data);
    res.json(videoList.data);
    //   res.send("test successful");
    } catch (e) {
      res.status(404).json({error: 'task not found'});
    }
  }); 
module.exports = router;