import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const title = document.querySelector('.toolbarmenutitle');
    if(!title){
      return;
    }
    const strTitle = title.textContent;
    if(!strTitle){
      return;
    }
    const splitTitle = strTitle.split('');
    if(!splitTitle){
      return;
    }
    title.textContent = '';

    for (let i = 0; i < splitTitle.length; i++) {
      title.innerHTML += '<span>' + splitTitle[i] + '</span>';
    }

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick() {
      const span = title?.querySelectorAll('span')[char];
        span?.classList.add('fade');
        char++;
        if (char === splitTitle?.length) {
          complete();
          return;
        }
      
    }

    function complete() {
      clearInterval(timer);
      timer = 0;
    }
  }

}