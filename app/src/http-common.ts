import axios from "axios";

export default axios.create({
	baseURL: 'http://api.blex.today',
	headers: {
		"Content-type": "application/json",
	},
});
