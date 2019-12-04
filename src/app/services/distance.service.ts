import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
	providedIn: 'root'
})
export class DistanceService {
	private readonly url = 'http://REMOVED_IP_ADRESS:8080/';

	constructor(private http: HTTP) {}

	public async get() {
		const response = await this.http.get(this.url, {}, {});
		return Number(response.data);
	}
}
