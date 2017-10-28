import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'

const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

export class Hero {
    id: number;
    name: string;
}


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string = "Tour of Heroes";
    selectedHero: Hero ;
    heroes = HEROES;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    constructor(private _httpService: Http) { }

    apiValues: string[] = [];

    ngOnInit() {
        this._httpService.get('/api/values').subscribe(values => {
            this.apiValues = values.json() as string[];
        });
    }

}