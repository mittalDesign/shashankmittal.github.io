import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MainPageComponent implements OnInit {
  i = 0;
  displayText = '';
  content = '<h2>Hi! <br> I am Shashank Mittal.<br>Front End Developer who Focuses' +
    '<br>on writing clean, elegant and<br>efficient Code.<h2>';


  constructor() {
  }

  ngOnInit() {
    this.typeWriter();

  }


  typeWriter() {
    let i = 0, intervalId;
    const txt = this.content;
    intervalId = window.setInterval(() => {
      this.displayText += txt.charAt(i++);
      if (i > txt.length) {
        window.clearInterval(intervalId);
      }
    }, 50);
  }


}
