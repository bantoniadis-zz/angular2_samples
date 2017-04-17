/**
 * Created by bill.antoniadis on 4/17/17.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'app-banner',
    template: '<h1>{{title}}</h1>'
})
export class BannerComponent {
    title = 'Test Tour of Heroes';
}