import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  isLoading: boolean = true;
  message: any ;

  constructor(private http: HttpClient,
    private fetchService: CommonService) { }

  ngOnInit(): void {
    this.fetchSeries(11048, 6);
  }

  fetchSeries(offset: number, limit: number): void{
    this.fetchService.getSeries(offset, limit).subscribe((res) => {
      this.message = res.data.results;
      this.isLoading = false;
    })
  }

}
