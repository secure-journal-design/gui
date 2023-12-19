import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article, ArticleDetail } from '../models';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent {

  article?: ArticleDetail;

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.articleService.getArticle(id).subscribe((data: ArticleDetail) => {
        this.article = data;
      })
    });
  }

}
