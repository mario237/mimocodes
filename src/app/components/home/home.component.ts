import { Component, OnInit } from '@angular/core';
declare let $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.changeHeaderBackground()
  }

  changeHeaderBackground() {

    $(window).on('scroll', () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('.header').css('background', '#1B334B')
      } else {
        $('.header').css('background', '#021327')
      }
    })
  }

}
