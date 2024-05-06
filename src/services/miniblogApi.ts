import axiosInstance from "./axiosInstance";

class MiniBlogService {
	public async Register(data: any) {
		const response = await axiosInstance.post("/cadastrar/", data);
		return response.data;
	}

	public async Login(data: any) {
		const response = await axiosInstance.post("/login/", data);
		return response.data;
	}
}

export default new MiniBlogService();
