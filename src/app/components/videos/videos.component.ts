import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/interfaces/video.interface';
import { CommonService } from 'src/app/services/common.service';
import { VideoList } from '../../interfaces/videos.mocklist';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  isLoading: boolean = true;
  message: Video[] ;
  selected: Video;
  visibility: boolean = false;
  url: SafeResourceUrl;

  constructor(private http: HttpClient,
    private fetchService: CommonService,
    private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos(){
    this.isLoading = false;
    this.message = VideoList;
  }

  select(obj: Video){
    this.selected = obj;
    this.url = this._sanitizer.bypassSecurityTrustResourceUrl(obj.url);
    this.visibility = true;
  }

  watchVisibility(value: boolean){
    this.visibility = value;
  }
}
