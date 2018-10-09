import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Article } from '../../core';

@Component({
  selector: 'article-item',
  styleUrls: ['./article-item.scss'],
  templateUrl: './article-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleItemComponent {
  private static TAG_CLOUD_STYLE: string[] = ['primary', 'success', 'info', 'warning', 'danger'];
  @Input() articleItem: Article;

  getTagStyle(tagIndex) {
    const index = Math.floor(((tagIndex + 1) * Math.random() * 100)) % ArticleItemComponent.TAG_CLOUD_STYLE.length;
    return ArticleItemComponent.TAG_CLOUD_STYLE[index];
  }
}
