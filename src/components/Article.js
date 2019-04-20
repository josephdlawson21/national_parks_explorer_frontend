

import React from 'react'

const Article = ({article, width}) => {
  return (
    <div className={`col s${width}`}>
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light article-img">
          <img className="activator" src={article.listingimage.url} alt={article.listingimage.altText}/>
        </div>
        <div className="card-content">
          <span className="card-title spanFix">{article.title}</span>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{article.title}<i className="material-icons right">close</i></span>
          <p>{article.listingdescription}</p>
        </div>
      </div>
    </div>
  )
}

export default Article
