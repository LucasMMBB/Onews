import './NewsPanel.css';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import _ from 'lodash';

class NewsPanel extends React.Component{
	constructor() {
	    super();
	    this.state = {news:null};
	    this.handleScroll = this.handleScroll.bind(this);
	}
	  
	componentDidMount() {
	    this.loadMoreNews();
	    this.loadMoreNews = _.debounce(this.loadMoreNews, 1000);
	    window.addEventListener('scroll', this.handleScroll);
	}

	loadMoreNews(){
		let request = new Request('http://localhost:3000/news',{
			method: 'GET',
			cache: false
		});

		fetch(request)
			.then((res)=>res.json())
			.then((news)=>{
				this.setState({
					news: this.state.news?this.state.news.concat(news):news
				});
			});
	}

	 handleScroll() {
    	let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    	if ((window.innerHeight + scrollY) >= (document.body.offsetHeight - 50)) {
      		console.log('Loading more news');
      		this.loadMoreNews();
    	}
  	}

	renderNews(){
		var news_list = this.state.news.map(function(news){
			return(
				// eslint-disable-next-line
				<a className="list-group-item" href="#">
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