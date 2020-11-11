import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {
  isLoading: boolean = true;
  message: any ;

  constructor(private http: HttpClient,
    private fetchService: CommonService) { }

  ngOnInit(): void {
    this.fetchComics(578, 6);
  }

  fetchComics(offset: number, limit: number): void{
    this.fetchService.getComics(offset, limit).subscribe((res) => {
      this.message = res.data.results;
      this.isLoading = false;
    })
  }
}
