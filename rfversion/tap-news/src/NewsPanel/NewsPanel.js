import './NewsPanel.css';
import _ from 'lodash';

import React from 'react';

import NewsCard from '../NewsCard/NewsCard'

class NewsPanel extends React.Component{
  constructor() {// no props from outside
    super();
    this.state = {news:null};
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.loadMoreNews();
    this.loadMoreNews = _.debounce(this.loadMoreNews, 1000);
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    if ((window.innerHeight + scrollY) >= (document.body.offsetHeight - 50)) {
      console.log('Loading more news');
      this.loadMoreNews();
    }
  }

  loadMoreNews() {
    this.setState({
      news: [
        {
          'url': 'https://www.nytimes.com/interactive/2017/08/22/world/asia/north-korea-nuclear-weapons.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=photo-spot-region&region=top-news&WT.nav=top-news',
          'title': 'Can North Korea Hit the United States With a Nuclear Weapon?',
          'description': 'North Korea is speeding toward a goal it has sought for decades: the ability to hit a major American city with a nuclear weapon.',
          'digest': '1',
          'reason': 'recommanded'
        },
        {
          'url': 'https://www.nytimes.com/2017/08/21/world/asia/afghanistan-troops-trump.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=first-column-region&region=top-news&WT.nav=top-news',
          'title': 'Trump Sets U.S. Strategy but No ‘Blank Check’ for Afghan War',
          'description': 'WASHINGTON — President Trump put forward on Monday a long-awaited strategy for resolving the nearly 16-year-old conflict in Afghanistan, but he declined to specify either the number of troops that would be committed, or the conditions by which he would judge the success of their mission there.',
          'digest':'2',
          'reason': 'Hot'
        }
      ]
    });
    /*
    let request = new Request('http://localhost:3000/news', {
      method: 'GET',
      cache: false});

    fetch(request)
      .then((res) => res.json())
      .then((news) => {
        this.setState({
          news: this.state.news? this.state.news.concat(news) : news,
        });
      });
    */
  }

  renderNews() {
    let news_list = this.state.news.map(function(news) {
      return(
        <a className='list-group-item' href="#">
          <NewsCard news={news} />
        </a>
      );
    });

    return(
      <div className="container-fluid">
        <div className='list-group'>
          {news_list}
        </div>
      </div>
    );
  }

  render() {
    if (this.state.news) {
        return(
          <div>
            {this.renderNews()}
          </div>
        );
    } else {
      return(
        <div>
          <div id='msg-app-loading'>
            Loading
          </div>
        </div>
      );
    }
  }
}

export default NewsPanel;