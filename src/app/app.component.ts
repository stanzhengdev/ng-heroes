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
            <my-heroes></my-heroes>
        </div>
    `,
})


export class AppComponent {
    title = "Marvel World"
}