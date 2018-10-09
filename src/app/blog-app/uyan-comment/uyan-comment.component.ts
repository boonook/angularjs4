import { Component, ChangeDetectionStrategy, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { RebirthWindow } from '../../core';

@Component({
  selector: 'uyan-comment',
  templateUrl: './uyan-comment.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UyanCommentComponent implements OnInit {
  private static UYAN_URL = 'http://v2.uyan.cc/code/uyan.js?uid=1893648';

  constructor(private elmRef: ElementRef, private renderer: Renderer2, private rebirthWindow: RebirthWindow) {

  }

  ngOnInit() {
    this.rebirthWindow.createScript(UyanCommentComponent.UYAN_URL, this.renderer, this.elmRef);
  }
}
