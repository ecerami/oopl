import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Headline } from './headline';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  source = 'New York Times';
  breakingNews = Array<Headline>();
  showFooter = true;

  constructor() {
    let headline0: Headline = {
      timestamp: new Date(),
      title:
        'Manchin Says He Will Not Seek Re-election, Dealing Blow to Democrats',
      blurb:
        'The decision by Senator Joe Manchin will leave open a seat in a deeply ' +
        'red state, threatening Democrats’ hold on the Senate.',
    };
    let headline1: Headline = {
      timestamp: new Date(),
      title:
        'House Republicans Clash Over Spending Days Ahead of Shutdown Deadline',
      blurb:
        'Republicans abandoned two of their own spending measures this week as they toiled to ' +
        'agree on a stopgap spending bill to avert a government shutdown.'
    };
    this.breakingNews.push(headline0);
    this.breakingNews.push(headline1);
  }
}
