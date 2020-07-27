import axios from "axios";

export default {
    // Gets Tweets from the Twitter API
    // Cutom util for adding routes to application, 
    getTweets: function () {
        return axios.get("/api/cnn-tweets");
    },
}
