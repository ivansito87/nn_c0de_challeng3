import axios from "axios";

export default {
    // Gets Tweets from the Twitter API
    getTweets: function () {
        return axios.get("/api/cnn-tweets");
    },
};
