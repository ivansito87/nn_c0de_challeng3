const Twitter = require('twitter');

module.exports = (app, io) => {
    let twitter = new Twitter({
        consumer_key: "kc9wgTvvui0e4cnEBxe3azDyG",
        consumer_secret: "xoBa9wPyDNUaNvdpHQXoLFaKo9aOiSHjqDjPwXKeWILMmTao2W",
        access_token_key: "1287233428165926915-piILst5qYDcIxjYsUFAeuN97nieTzw",
        access_token_secret: "Z1sTNEKtM91MJtHn2lAIY9whUZIDiEcDf6QpCfhfn8h3a",
    });

    let socketConnection;
    let twitterStream;

    app.locals.searchTerm = 'CNN'; //Default search term for twitter stream.
    app.locals.showRetweets = false; //Default


    app.get("/chickens", function (req, res) {
        console.log('Chickens route');
        res.json({ chickens: 'some stuff' });
        // res.json(tableData);
    });

    /**
     * Resumes twitter stream.
     */
    const stream = () => {
        console.log('Resuming for ' + app.locals.searchTerm);
        twitter.stream('statuses/filter', { track: app.locals.searchTerm }, (stream) => {
            stream.on('data', (tweet) => {
                sendMessage(tweet);
            });

            stream.on('error', (error) => {
                console.log(error);
            });

            twitterStream = stream;
        });
    }

    /**
     * Sets search term for twitter stream.
     */
    app.post('/setSearchTerm', (req, res) => {
        let term = req.body.term;
        app.locals.searchTerm = term;
        twitterStream.destroy();
        stream();
    });

    /**
     * Pauses the twitter stream.
     */
    app.post('/pause', (req, res) => {
        console.log('Pause');
        twitterStream.destroy();
    });

    /**
     * Resumes the twitter stream.
     */
    app.post('/resume', (req, res) => {
        console.log('Resume');
        stream();
    });

    //Establishes socket connection.
    io.on("connection", socket => {
        socketConnection = socket;
        stream();
        socket.on("connection", () => console.log("Client connected"));
        socket.on("disconnect", () => console.log("Client disconnected"));
    });

    /**
     * Emits data from stream.
     * @param {String} msg 
     */
    const sendMessage = (msg) => {
        if (msg.text.includes('RT')) {
            return;
        }
        socketConnection.emit("tweets", msg);
    }
};