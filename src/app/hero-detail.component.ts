import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from './hero'

import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'my-hero-detail',
    template: `
    <div>
        <div *ngIf="hero">
            <button (click)="goBack()">Back</button>
            <h2>{{hero.name}}</h2>
            <div><label>id: </label>{{hero.id}}</div>
            <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name"/>
            </div>
        </div>
    </div>`
})

export class HeroDetailComponent implements OnInit {
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) { }
    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }
    @Input()
    hero: Hero

    goBack(): void {
        this.location.back();
    }
}
