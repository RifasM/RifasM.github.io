import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  constructor(private hiddenInterestRef: ElementRef) { }

  ngOnInit(): void {
  }

  showHiddenInterests() {
    const ulElement = this.hiddenInterestRef.nativeElement.querySelector('ul').classList;
    if(ulElement.contains('visually-hidden')) {
      ulElement.remove('visually-hidden');
    }
    else {
      ulElement.add('visually-hidden');
    }
  }
}
