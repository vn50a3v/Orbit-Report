import { Component, Input, OnInit } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  Elts: string[] = ['Total', 'Space Debris', 'Communication', 'Probe', 'Positioning', 'Space Station', 'Telescope'];
  constructor() { }

  ngOnInit() {
  }
  displayList: Satellite[];


  typeCount(elts: string): number {
    if (elts === 'Total') {
      return this.satellites.length;
    } else {
      let count: number = 0;
      for (let i in this.satellites) {
        if (this.satellites[i].type === elts) {
          count++;
        }
      }
      return count;
    }
  }
}
