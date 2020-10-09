import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit(): void {
    $(document).ready(function(){
      $('.middle').hide();
      $('nav').hide();
      $('.nav1').hide();
      $('.nav2').hide();
      $('.nav3').hide();
      $('.nav4').hide();
      $('#all').hide().delay(500).fadeIn(2000, function(){
        $('.middle').fadeIn(1000).delay(500, function(){
          $('nav').fadeIn(1000, function(){
            $('.nav4').fadeIn(700, function(){
              $('.nav3').fadeIn(700, function(){
                $('.nav2').fadeIn(700, function(){
                  $('.nav1').fadeIn(700);
                });
              });
            });
          });
        });
      });
    });
  }
}
