import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "http://localhost:8000",
});

function getToken(): string | null {
	return localStorage.getItem("token");
}

axiosInstance.interceptors.request.use(
	(config) => {
		const accessToken = getToken();
		if (accessToken != null) {
			config.headers.Authorization = `Token ${accessToken}`;
		}
		return config;
	},
	async (error) => {
		await Promise.reject(error);
	},
);

export default axiosInstance;
