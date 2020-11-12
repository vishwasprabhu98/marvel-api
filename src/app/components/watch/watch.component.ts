import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Video } from 'src/app/interfaces/video.interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {
  @Input() obj: Video;
  @Input() url: SafeResourceUrl;
  @Output() visiblityEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {

  }

  close() {
    this.visiblityEvent.emit(false);
  }

}
