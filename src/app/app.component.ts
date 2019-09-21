import { Component, OnInit } from '@angular/core';


declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'perfect-digital';

  ngOnInit(){
    
    $(document).ready(function () {

      $( "#toggle" ).click(function() {

        $( ".header__nav" ).toggle( "fast", function() {
          });
      });

    });
  
  }
  
}
