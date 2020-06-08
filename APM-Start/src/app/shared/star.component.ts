import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
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
    }
    onClick() : void{
        console.log(`The rating ${this.rating} was clicked!`);
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}