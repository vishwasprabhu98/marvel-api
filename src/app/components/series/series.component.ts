import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/interfaces/details.interface';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

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
    this.fetchSeries(11048, 6);
  }

  fetchSeries(offset: number, limit: number): void {
    this.fetchService.getSeries(offset, limit).subscribe((res) => {
      this.results = res.data.results;
      this.isLoading = false;
    })
  }

  getDetails(url: string): void {
    this.fetchService.getDetails(url).subscribe((response) => {
      let res = response.data.results[0];
      this.details.title = res.title;
      this.details.image = res.thumbnail.path + '.' + res.thumbnail.extension;
      this.details.desc = res.description;
      this.details.show = true
    })
  }
}
