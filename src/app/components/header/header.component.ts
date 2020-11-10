import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {

   }

  ngOnInit(): void {
  }

  mousenter(event: any){
    console.log(event.target.dataset.visible)
    console.log(event)
  }

  mouseleave(event){
    console.log('bye')
  }

}


