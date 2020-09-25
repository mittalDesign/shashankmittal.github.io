import {Component, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '*',
        opacity: 0.6,
      })),
      state('closed', style({
        height: '0',
        opacity: 0
      })),
      transition('open => closed', [
        animate('0.35s')
      ]),
      transition('closed => open', [
        animate('0.35s')
      ]),
    ]),
    trigger('openClose_1', [
      state('open', style({
        height: '*',
        opacity: 0.6,
      })),
      state('closed', style({
        height: '0',
        opacity: 0
      })),
      transition('open => closed', [
        animate('0.35s')
      ]),
      transition('closed => open', [
        animate('0.35s')
      ]),
    ]),
   trigger('openClose_2', [
      state('open', style({
        height: '*',
        opacity: 0.6,
      })),
      state('closed', style({
        height: '0',
        opacity: 0
      })),
      transition('open => closed', [
        animate('0.35s')
      ]),
      transition('closed => open', [
        animate('0.35s')
      ]),
    ]),
   trigger('openClose_3', [
      state('open', style({
        height: '*',
        opacity: 0.6,
      })),
      state('closed', style({
        height: '0',
        opacity: 0
      })),
      transition('open => closed', [
        animate('0.35s')
      ]),
      transition('closed => open', [
        animate('0.35s')
      ]),
    ]),
   trigger('openClose_4', [
      state('open', style({
        height: '*',
        opacity: 0.6,
      })),
      state('closed', style({
        height: '0',
        opacity: 0
      })),
      transition('open => closed', [
        animate('0.35s')
      ]),
      transition('closed => open', [
        animate('0.35s')
      ]),
    ]),
  ]
})
export class TimelineComponent implements OnInit {
  isShowDetail = false;
  isShowDetailJob1 = false;
  isShowDetailJob2 = false;
  isShowDetailJob3 = false;
  isShowDetailJob4 = false;

  constructor() {
  }

  ngOnInit() {
  }

  showDetail() {
    this.isShowDetail = !this.isShowDetail;
  }

  showDetailJob1() {
    this.isShowDetailJob1 = !this.isShowDetailJob1;
  }

  showDetailJob2() {
    this.isShowDetailJob2 = !this.isShowDetailJob2;
  }

  showDetailJob3() {
    this.isShowDetailJob3 = !this.isShowDetailJob3;
  }

  showDetailJob4() {
    this.isShowDetailJob4 = !this.isShowDetailJob4;
  }


}
