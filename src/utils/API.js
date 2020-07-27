import axios from "axios";

export default {
    // Gets Tweets from the Twitter API
    // Cutom util for adding routes to application, 
    getTweets: function () {
        return axios.get("/api/cnn-tweets");
    },

    // Handles the post to search term
    setSearchTerm: function (term) {
        return axios.post('/setSearchTerm', { term });
    },

    pauseStream: function () {
        return axios.post("/pause", {})
    }

}
