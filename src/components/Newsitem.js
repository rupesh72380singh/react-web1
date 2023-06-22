import React, { Component } from 'react'

// 
const Newsitem= (props)=>{
  // render() {
    // let {title, description ,imageurl, newsurl,author, date, source} = this.props;
    let {title, description ,imageurl, newsurl,author, date, source} = props;
    return (
      
      <div>
        <div className="card" >
          <img src={!imageurl?"https://s1.eestatic.com/2023/04/18/elandroidelibre/757184289_233955681_1200x630.jpg":imageurl} className="card-img-top" alt="..."/>
            <div className="card-body my-1">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p class="card-text"><small class="text-muted">By {(!author)?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
</div>
        
      </div>
    )
  }
// }

export default Newsitem
