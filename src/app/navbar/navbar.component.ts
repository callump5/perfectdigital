import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function () {

      var nav = false;

       function openNav() {
          $('.header__nav').css('display', 'block');
          nav = true;
       }

      function closeNav() {
         $('.header__nav').css('display', 'none');

         nav = false;
      }

      function toggleNav() {
          nav ? closeNav() : openNav();
      }

      $( "#toggle" ).click(function() {

           toggleNav()
      });

    });

  }

}
