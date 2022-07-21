import { Component, OnInit } from "@angular/core";

import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";
import { MessageService } from "../message.service";

@Component({
	selector: "app-heroes",
	templateUrl: "./heroes.component.html",
	styleUrls: ["./heroes.component.css"],
})
export class HeroesComponent implements OnInit {
	selectedHero?: Hero;

	heroes: Hero[] = HEROES;

	constructor(private messageService: MessageService) {}

	ngOnInit(): void {}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
		this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
	}
}
