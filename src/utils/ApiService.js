import axios from "axios";

export class ApiService {
	BASE_URL = process.env.REACT_APP_BASE_URL;

	getLatestItem() {
		return axios({
			method: "get",
			url: this.BASE_URL + "/items/latest",
		});
	}

	createOrder(dto) {
		return axios({
			method: "post",
			url: this.BASE_URL + "/order/new",
			data: dto,
		});
	}
}
