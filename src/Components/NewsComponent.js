import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import propTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



export class NewsComponent extends Component {

  static propTypes = {
    pageSize : propTypes.number,
    country : propTypes.string,
    category : propTypes.string

  }
  static defaultProps = {
    pageSize : 9,
    country : "in",
    category : "general"
  }

  constructor(){
    super();
    this.state = {
      articles : [],
      page : 1,
      isLoading : true,
      totalResults : 0
    }
  }
  fetchData = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2f04093b1da84014bb5117b610dc0ca5&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let Parseddata = await data.json();
    this.setState({articles : Parseddata.articles ,totalResults : Parseddata.totalResults, isLoading: false})
  }
  componentDidMount(){
    this.fetchData()

  }
  // componentDidUpdate(){
  //   console.log(this.state.articles.length, this.state.totalResults)
  //   }

  // }

  // handleNextClick= ()=>{
  //   this.setState({
  //     page: this.state.page + 1,
  //     isLoading: true
  //   })
  // }
  // handlePrevClick= () =>{
  //   this.setState({
  //     page: this.state.page - 1,
  //     isLoading: true

  //   })
  // }
  fetchMoreData= ()=>{
    this.setState({
      page: this.state.page + 1
    },async()=>{
    
    console.log(this.state.page)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2f04093b1da84014bb5117b610dc0ca5&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let Parseddata = await data.json();
    this.setState({
      articles: this.state.articles.concat(Parseddata.articles),
      isLoading: false,
      totalResults: Parseddata.totalResults
    });
  })

  }


  render() {
    return (
      <div >
        <h1 className='news-heading'>News App - Top Headlines</h1>
        {/* {this.state.isLoading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >

        <div className='newsitem-container container-margin'>
        {this.state.articles.map((element)=>{
          return <div key={element.id}>
            <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} url={element.url}/>
          </div>
        })}
        </div>
        </InfiniteScroll>

        {/* <div className='btn-containers container-margin'>
          <button disabled={this.state.page<=1} className='page-buttons' onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page>=Math.ceil(this.state.totalResults/this.props.pageSize)}className='page-buttons' onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}

      </div>
    )
  }
}

export default NewsComponent