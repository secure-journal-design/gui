import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl = 'http://localhost:8000/api/v1/articles/';

  constructor(private http: HttpClient) {}

  getArticles(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  searchByTopic(topic: string): Observable<any> {
    const params = { topic: topic };
    return this.http.get<any>(this.apiUrl + 'by-topic/', { params: params });
  }

  getArticle(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + id);
  }

}
