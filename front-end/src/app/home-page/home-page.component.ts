import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';
import { ArticleService } from '../article.service';
import { Article } from '../models';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  articles: Article[] = [];


  constructor(private articleService: ArticleService, private modalService: NgbModal ){}

  ngOnInit(): void {

    this.articleService.getArticles().subscribe((data) => {
      console.log(data);
      this.articles = data;
      });
    }

    open(content : any) {
      this.modalService.open(content, { centered: true  }).dismissed.subscribe(reason => {
      })
    }

    ngOnDestroy(): void {
      this.modalService.dismissAll();
    }

  }
