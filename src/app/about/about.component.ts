import {Component, OnInit} from '@angular/core';
import {Globals} from "../globals";
import {MatDialog} from "@angular/material/dialog";
import {SimpleDialogComponent} from "../simple-dialog/simple-dialog.component";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutText: string[] = ["I always thought my dream was to be an artist, sipping coffee, walking around, "+
     "but turns out it was just a hobby.", "I love connecting with new folks. I never get tired of doing"+
     "something that I love, be it coding or fixing up my bike."+
     "I do face setbacks, but, what comes later, pure bliss. ",
     "Innovation and research intrigue me, I would dive right in to understand it better, and if possible "+
     "provide my contribution. Machine Learning is something that interests me but not as much as Development. "+
     "I love web development using Django, Spring Boot and have built various apps for the clubs I've been part of, "+
     "to the startups that have contacted me to get their presence known online.",
     "Outside work, I love spending time working on my bike (loads to fix and taking it slow), "+
     "I love watching movies, a big-time star wars, and a marvel fan, and, I can always be found playing a few games "+
     "- one of them being Forza Horizon."];

  randomFunnyTextArray: string[] = [
    "I'm not a morning person, but I'm a programmer, so I stay up all night.",
    "I haven't touched that code in weeks",
    "Its compiling, I swear",
    "missing a semicolon;",
    "I don't know where you are at, but I will find and fix you",
    "I have no idea what I am doing",
    "It works. Why? It doesn't work. Why?",
    "If it works, don't touch it again",
    "I did a quick fix last night, but it broke when I rebooted",
    "I am working on it, in my head",
    "My family keeps asking what I always do, typing all day and night long on my laptop,staring at it" +
    " all the time, and then suddenly shout 'yes' or say, 'aha!'.",
    "Yup, I am a software developer."
    ];

  username: string = "rifasm";
  randomText: string = "hmm";

  constructor(public globals: Globals,
              public dialog: MatDialog) {}

  ngOnInit(): void {
    this.randomText = this.getRandomText();
  }

  getRandomText():string {
    const random:number = Math.floor(Math.random() * (this.randomFunnyTextArray.length));
    return this.randomFunnyTextArray[random];
  }

  openDialog(title: string, body: string[]): void {
    this.dialog.open(SimpleDialogComponent, {
      width: '250px',
      enterAnimationDuration: "3ms",
      exitAnimationDuration: "2ms",
      data: {
        title: title,
        bodyText: body,
        isActionDialog: false
      }
    });
  }

}
