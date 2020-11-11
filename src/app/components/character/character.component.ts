import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  isLoading: boolean = true;
  message: any ;

  constructor(private http: HttpClient,
    private fetchService: CommonService) { }

  ngOnInit(): void {
    this.fetchCharacters(554, 6);
  }

  fetchCharacters(offset: number, limit: number): void{
    this.fetchService.getCharacters(offset, limit).subscribe((res) => {
      this.message = res.data.results;
      this.isLoading = false;
    })
  }
  
}
