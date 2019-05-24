import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnChanges, OnInit {
  @Input() type: string = ''
  @Input() star: number = 0
  @Input() color: string
  weapon:boolean = false
  armor:boolean = false
  s:number = 0;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    if (this.type == 'weapon') {
      this.weapon = true
      this.armor = false
    }
    else if (this.type == 'armor') {
      this.armor = true
      this.weapon = false
    }
    this.s = this.star
  }

}
