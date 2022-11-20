import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  providers: [Globals],
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor(public globals: Globals) {}

  ngOnInit(): void {}
}
