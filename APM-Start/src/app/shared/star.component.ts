import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    color = 'primary';
    mode = 'determinate';
    bufferValue = 75;
    // // Setter way
    // _starWidth: number;
    
    // public get starWidth() : number {
    //   return this._starWidth;
    // }
    
    // public set starWidth(value : number) {
    //     this._starWidth = this.rating * 75 / 5;
    // }

    // ngOnChanges way
    starWidth: number;
    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
        this.rating = this.rating*20;
    }
    onClick() : void{
        console.log(`The rating ${this.rating} was clicked!`);
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}