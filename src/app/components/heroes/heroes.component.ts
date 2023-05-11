import { Component, OnInit } from '@angular/core';

import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/services/hero/hero.service';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // hero : Hero = {
  //   id: 1,
  //   name: 'Mocha',
  //};


    // selectedHero?: Hero;

    heroes: Hero[] = [];

    constructor(private heroService: HeroService, private messageService: MessageService) { }

    ngOnInit(): void {
      this.getHeroes();
    }


    // onSelect(hero: Hero): void {
    //   this.selectedHero = hero;
    //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    // }

    getHeroes(): void {
      this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
    }
    
}
