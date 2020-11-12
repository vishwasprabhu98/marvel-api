import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/interfaces/details.interface';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {
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
    this.fetchComics(578, 6);
  }

  fetchComics(offset: number, limit: number): void {
    this.fetchService.getComics(offset, limit).subscribe((res) => {
      this.results = res.data.results;
      this.isLoading = false;
    })
  }

  getDetails(url: string):void {
    this.fetchService.getDetails(url).subscribe((response) => {
      let res = response.data.results[0];
      this.details.title = res.title;
      this.details.image = res.thumbnail.path + '.' + res.thumbnail.extension;
      this.details.desc = `Issue: ${res.issueNumber}  Price $ ${res.prices[0].price}`;
      this.details.show = true
    })
  }
}
