import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  optionsMenu: any[] = [
    {label: 'TRADE', value: 'home'},
    {label: 'ABOUT', value: 'about'}
  ];

  selectedOption: any = 'home';

  constructor() { }

  ngOnInit(): void {
  }

  selectItem(value) {
    this.selectedOption = value;
  }

}
