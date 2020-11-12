import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Md5} from 'ts-md5/dist/md5';
import { urlAndKey } from './baseUrl';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  ts = Date.now();
  genHash(): any{
    let str = this.ts + urlAndKey.privateKey + urlAndKey.publicKey ;
    const md5 = new Md5();
    return md5.appendStr(str).end();
  }

  getCharacters(offset: number, limit: number): Observable<any> { 
    let url = `${urlAndKey.baseUrl}characters?offset=${offset}&limit=${limit}&ts=${this.ts}&apikey=${urlAndKey.publicKey}&hash=${this.genHash()}`;
    console.log(url);
    return this.http.get(url);
  }

  getComics(offset: number, limit: number): Observable<any> { 
    let url = `${urlAndKey.baseUrl}comics?offset=${offset}&limit=${limit}&ts=${this.ts}&apikey=${urlAndKey.publicKey}&hash=${this.genHash()}`;
    console.log(url);
    return this.http.get(url);
  }

  getSeries(offset: number, limit: number): Observable<any> { 
    let url = `${urlAndKey.baseUrl}series?offset=${offset}&limit=${limit}&ts=${this.ts}&apikey=${urlAndKey.publicKey}&hash=${this.genHash()}`;
    console.log(url);
    return this.http.get(url);
  }
}
