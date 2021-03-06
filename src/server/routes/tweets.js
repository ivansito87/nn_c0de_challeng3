const Twitter = require("twitter");

module.exports = (app, io) => {
	let twitter = new Twitter({
		consumer_key: process.env.TWITTER_CONSUMER_KEY,
		consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
		access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
		access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
	});

	let socketConnection;
	let twitterStream;
	const params = { user_id: "759251", count: "10" }; //CNN user
	const parambreakingnews = { user_id: "428333", count: "1" };

	app.locals.searchTerm = "CNN"; //Default search term for twitter stream.
	app.locals.showRetweets = false; //Default

	app.get("/api/cnn-tweets", function (req, res) {
		twitter.get("statuses/user_timeline", params, function (error, tweets, response) {
			if (!error) {
				console.log(tweets);
				res.json(tweets);
			}
		});
	});

	app.get("/api/cnn-breakingnews", function (req, res) {
		twitter.get("statuses/user_timeline", parambreakingnews, function (error, tweets, response) {
			if (!error) {
				console.log(tweets);
				res.json(tweets);
			}
		});
	});

  /**
   * Resumes twitter stream.
   */
	const stream = () => {
		console.log("Resuming for " + app.locals.searchTerm);
		twitter.stream("statuses/filter", { follow: "759251" }, (stream) => {
			stream.on("data", (tweet) => {
				sendMessage(tweet);
			});

			stream.on("error", (error) => {
				console.log(error);
			});
			twitterStream = stream;
		});
	};

  /**
   * Sets search term for twitter stream.
   */
	app.post("/setSearchTerm", (req, res) => {
		let term = req.body.term;
		app.locals.searchTerm = term;
		stream();
	});

  /**
   * Pauses the twitter stream.
   */
	app.post("/pause", (req, res) => {
		console.log("Pause SERVER");
		twitterStream.destroy();
	});

  /**
   * Resumes the twitter stream.
   */
	app.post("/resume", (req, res) => {
		console.log("Resume");
		stream();
	});

	//Establishes socket connection.
	io.on("connection", (socket) => {
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
		if (msg.text.includes("RT")) {
			return;
		}
		socketConnection.emit("tweets", msg);
	};
};
