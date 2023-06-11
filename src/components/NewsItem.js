import React, {  } from 'react'

const NewsItem = (props)=> {
  
    let {title, description,imgurl,newurl,author,date,source} = props;
    return (
      <div className='my-3'>
        <div className="card">
            <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:0}} >
              <span className=" badge rounded-pill bg-danger" >
                    {source}
              </span>
            </div>
            <img src={!imgurl?"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/E4A6AYSA3UI63DDOSODL27GYEY.jpg&w=1440" : imgurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a href={newurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }

export default NewsItem