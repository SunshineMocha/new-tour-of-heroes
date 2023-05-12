import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Hero } from 'src/app/model/hero';
import { HEROES } from 'src/app/model/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  baseURL = 'https://643694108205915d34f74640.mockapi.io/Heroes';

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    // const heroes = of(HEROES);
    // this.messageService.add('HeroService: fetched heroes');
    // return heroes;

    return this.http.get<Hero[]>(this.baseURL).pipe(
      tap(_ => this.messageService.add('fetched heroes')),
      catchError((error)=> of([]))
      )

  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.

    // const hero = HEROES.find(h => h.id === id)!;
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    // return of(hero);

    const heroURL = this.baseURL + "/" + id;
    return this.http.get<Hero>(heroURL);

  }

  updateHero(hero: Hero, id: number): Observable<any> {
    const putURL = this.baseURL + "/" + id;
    return this.http.put(putURL, hero, this.httpOptions);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

}
