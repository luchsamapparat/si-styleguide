import { Component } from '@angular/core';
// @ts-ignore
import * as foundationButtonMd from 'raw-loader!../../../../libs/foundation/src/lib/button/button.notes.md';
// @ts-ignore
import * as webButtonMd from 'raw-loader!../../../../libs/web-components/src/lib/button/button.component.notes.md';
// @ts-ignore
import * as ngButtonMd from 'raw-loader!../../../../libs/angular-components/src/lib/button/button.component.notes.md';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'si-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  foundationButtonMd = foundationButtonMd;
  webButtonMd = webButtonMd;
  ngButtonMd = ngButtonMd;

  constructor(
    private markdownService: MarkdownService
  ) {
    this.markdownService.renderer.heading = (text: string, level: number) => `<h${level +1}>${text}</h${level +1}>`;
  }
}
