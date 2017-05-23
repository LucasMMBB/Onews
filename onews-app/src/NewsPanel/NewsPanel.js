import './NewsPanel.css';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

class NewsPanel extends React.Component{
	constructor(){
		super();
		this.state = {news:null};
	}

	componentDidMount(){
		this.loadMoreNews();
	}

	loadMoreNews(e){
		this.setState({
			news:[
				{
					'url':'https://www.nytimes.com/2017/05/23/world/europe/manchester-arena-attack-ariana-grande.html?hp&action=click&pgtype=Homepage&clickSource=nytmm_FadingSlideShow_item&module=b-lede-package-region&region=top-news&WT.nav=top-news&_r=0',
					'title':'Salman Abedi, 22, Is Identified as Manchester Arena Bomber',
					'description': 'Salman Abedi, 22, Is Identified as Manchester Arena Bomber--fuck you',
					'source': 'nytimes',
					'urlToImage':'https://static01.nyt.com/images/2017/05/24/world/24Manchester1/24Manchester1-superJumbo.jpg',
					'digest':'',
					'reason': 'recommended'				
				},
				{
					'url':'https://www.nytimes.com/2017/05/23/world/europe/manchester-arena-attack-ariana-grande.html?hp&action=click&pgtype=Homepage&clickSource=nytmm_FadingSlideShow_item&module=b-lede-package-region&region=top-news&WT.nav=top-news&_r=0',
					'title':'Salman Abedi, 22, Is Identified as Manchester Arena Bomber',
					'description': 'Salman Abedi, 22, Is Identified as Manchester Arena Bomber--fuck you',
					'source': 'nytimes',
					'urlToImage':'https://static01.nyt.com/images/2017/05/24/world/24Manchester1/24Manchester1-superJumbo.jpg',
					'digest':'',
					'reason': 'recommended'				
				},
				{
					'url':'https://www.nytimes.com/2017/05/23/world/europe/manchester-arena-attack-ariana-grande.html?hp&action=click&pgtype=Homepage&clickSource=nytmm_FadingSlideShow_item&module=b-lede-package-region&region=top-news&WT.nav=top-news&_r=0',
					'title':'Salman Abedi, 22, Is Identified as Manchester Arena Bomber',
					'description': 'Salman Abedi, 22, Is Identified as Manchester Arena Bomber--fuck you',
					'source': 'nytimes',
					'urlToImage':'https://static01.nyt.com/images/2017/05/24/world/24Manchester1/24Manchester1-superJumbo.jpg',
					'digest':'',
					'reason': 'recommended'				
				}
			]
		});
	}

	renderNews(){
		var news_list = this.state.news.map(function(news){
			return(
				<a className="list-group-item" key={news.digest} href="#">
					<NewsCard news={news} />
				</a>
			);
		});
		
		return(
			<div className = "container-fluid">
				<div className="list-group">
					{news_list}
				</div>
			</div>
		);
	}

	render(){
		if(this.state.news){
			return(
				<div>
					{this.renderNews()}
				</div>
			);
		}else{
			return(
				<div id="msg-app-loading">
					Loading
				</div>
			);
		}
	}
}

export default NewsPanel;