import { Component, OnInit } from '@angular/core';
import { HeroesComponent } from './hero.component'
import { RouterModule } from '@angular/router';

RouterModule.forRoot([
    {
        path: 'heroes',
        component: HeroesComponent
    }
])


@Component({
    selector: 'my-app',
    template: `
        <div>
            <h1>{{title}}</h1>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
            <router-outlet></router-outlet>
        </div>
    `,
})


export class AppComponent {
    title = "Marvel World"
}