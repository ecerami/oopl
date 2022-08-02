import { Component, OnInit } from '@angular/core';
import { Headline } from './headline';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  source = 'New York Times';
  breakingNews = Array<Headline>();
  showFooter = true;

  constructor() {
    let headline0: Headline = {
      timestamp: new Date(),
      title:
        'July was Wall Street’s best month since 2020, a rally fueled in part by ' +
        'better-than-expected earnings from some of America’s biggest companies.',
      blurb:
        'The S&P 500 rose 1.4 percent Friday, taking its gain for July to 9.1 ' +
        'percent, its best month since the first announcements about an effective ' +
        'Covid-19 vaccine helped send stocks nearly 11 percent higher in ' +
        'November 2020.',
    };
    let headline1: Headline = {
      timestamp: new Date(),
      title:
        'President Gotabaya Rajapaksa of Sri Lanka resigned via email days after ' +
        'fleeing the country amid protests and economic turmoil.',
      blurb:
        'Even as the news filtered out, the protest movement that forced out the ' +
        'island nation’s powerful political dynasty largely continued as it ' +
        'has for months.',
    };
    this.breakingNews.push(headline0);
    this.breakingNews.push(headline1);
  }

  ngOnInit(): void {}
}
