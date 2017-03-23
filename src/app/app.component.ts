import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './hero.component'

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