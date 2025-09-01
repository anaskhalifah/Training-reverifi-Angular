import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IMAGES } from '../../../public/index';
@Component({
    selector: 'app-achievment',
    imports: [CommonModule],
    templateUrl: './achievment.html',
    styleUrl: './achievment.css'
})
export class Achievment {
    IMAGES = IMAGES;
    cards: { id: number, image: string, title: string, date: string }[] = [
        {
            id: 1,
            image: IMAGES['img1'],
            title: "Card Title 1",
            date: "Jan 12, 2025",
        },
        {
            id: 2,
            image: IMAGES['img2'],
            title: "Card Title 2",
            date: "Feb 3, 2025",
        },
        {
            id: 3,
            image: IMAGES['img3'],
            title: "Card Title 3",
            date: "Mar 8, 2025",
        },
        {
            id: 4,
            image: IMAGES['img1'],
            title: "Card Title 4",
            date: "Apr 21, 2025",
        },
    ];
}
