import axios from "axios";

axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;
axios.defaults.responseType = "json";
axios.defaults.withCredentials = true;
axios.defaults.transformResponse = [
  (data) => {
    if (!data) return null;
		if (data.status < 200 && data.status >= 300) return JSON.parse(data);
		const parsedData = JSON.parse(data).data;
		if (!parsedData) return JSON.parse(data);
    return parsedData;
  },
];

export default axios;
