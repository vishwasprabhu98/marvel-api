import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/interfaces/details.interface';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  isLoading: boolean = true;
  results: any;
  details: Details = {
    title: '',
    image: '',
    desc: '',
    show: false
  };

  constructor(private http: HttpClient,
    private fetchService: CommonService) { }

  ngOnInit(): void {
    this.fetchCharacters(554, 6);
  }

  fetchCharacters(offset: number, limit: number): void {
    this.fetchService.getCharacters(offset, limit).subscribe((res) => {
      this.results = res.data.results;
      this.isLoading = false;
    })
  }

  getDetails(url: string): void {
    this.fetchService.getDetails(url).subscribe((res) => {
      this.details.title = res.data.results[0].name;
      this.details.image = res.data.results[0].thumbnail.path + '.' + res.data.results[0].thumbnail.extension;
      this.details.desc = res.data.results[0].description;
      this.details.show = true
    })
  }

}
