import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';
import { ArticleService } from '../article.service';
import { Article } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  articles: Article[] = [];
  showSearchBar: boolean = false;
  searchTerm: string = '';


  constructor(private articleService: ArticleService, private modalService: NgbModal, private router: Router){}

  ngOnInit(): void {
    this.loadArticles();
  }

    open(content : any) {
      this.modalService.open(content, { centered: true  }).dismissed.subscribe(reason => {
      })
    }

    loadArticles(): void {
      this.articleService.getArticles().subscribe((data) => {
        this.articles = data;
        console.log(this.articles);
        this.articles.slice(1);
      });
    }

    search() {
      this.articleService.searchByTopic(this.searchTerm).subscribe((data) => {
        this.articles = data;
        this.articles.slice(1);
      })
     }

     goBack() {
       this.showSearchBar = false;
       this.loadArticles();
     }

     goToArticle(id : number) {
       console.log(id);
       this.router.navigate(['/detail-page', id]);
     }

    ngOnDestroy(): void {
      this.modalService.dismissAll();
    }

  }
