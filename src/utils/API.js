import axios from "axios";

export default {
  // Gets Tweets from the Twitter API
  // Cutom util for adding routes to application,
  getTweets: function () {
    return axios.get("/api/cnn-tweets");
  },

  getBreakingNewsTweet: function () {
    return axios.get("/api/cnn-breakingnews");
  },

  // Handles the post to search term
  setSearchTerm: function (term) {
    return axios.post("/setSearchTerm", { term });
  },

  // Handles the pausing functionality
  pauseStream: function () {
    return axios.post("/pause", {});
  },
};
