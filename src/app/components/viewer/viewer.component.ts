import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var CI360: any;

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const windowHeight = window.outerHeight;
    const container = document.getElementById('container-360');
    if (container) {
      container.style.height = `${windowHeight}px`;
      container.style.width = `${windowHeight}px`;

      const res = (<any>window).CI360.init('.cloudimage-360');
      console.log(res);
    }
  }

}
