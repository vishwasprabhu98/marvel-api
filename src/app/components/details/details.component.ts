import { Component, Input, OnInit } from '@angular/core';
import { Details } from 'src/app/interfaces/details.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() obj: Details;
  constructor() { }

  ngOnInit(): void {
  }

}
