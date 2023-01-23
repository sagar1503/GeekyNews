import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {imgUrl, title, description, url} = this.props
    return (
      <div>
        <div className="card" >
          <img src={imgUrl?imgUrl:"https://fdn.gsmarena.com/imgroot/news/22/10/iqoo-neo7-ofic/-952x498w6/gsmarena_000.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a  rel="noreferrer" href={url} target = '_blank' className="btn btn-dark" style={{fontSize: "12px"}}>Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem