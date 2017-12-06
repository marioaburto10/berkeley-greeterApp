module.exports = {
	// used to connect to the ethereum main network or test network
	networks: {
		development: {
			host: "localhost",
			port: 8545,
			network_id: "*" // match any network id
		}
	}
};
