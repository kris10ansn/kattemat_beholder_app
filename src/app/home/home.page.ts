import { Component } from '@angular/core';
import { DistanceService } from '../services/distance.service';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss']
})
export class HomePage {
	public percent: number = null;
	public dist: number = null;

	constructor(private distance: DistanceService) {
		this.distance.get().then(dist => this.set(dist));
	}

	public refresh(event) {
		this.distance.get().then(dist => {
			this.set(dist);
			event.target.complete();
		});
	}

	public set(cm) {
		const { min, round } = Math;
		const dec = n => round(n * 100) / 100;

		const MAX_FOOD = 30;
		const DIST = min(cm, MAX_FOOD);
		const PERCENT_EATEN = round((DIST / MAX_FOOD) * 100);

		this.percent = 100 - PERCENT_EATEN;
		this.dist = dec(cm);
	}
}
