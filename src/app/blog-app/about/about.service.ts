import { Injectable } from '@angular/core';
import { Article } from '../../core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AboutService {

  getArticle(): Observable<Article> {
    const article = new Article();
    article.title = '破狼简介';
    article.categories = ['破狼', '简介'];
    article.layout = 'post';
    article.html = require('./polang.html');
    return Observable.of(article);
  }
}
