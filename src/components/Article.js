

import React from 'react'

const Article = ({article, width}) => {
  console.log('Article.jsx', article, article.listingImage, article.listingImage.url)
  return (
    <div className={`col s${width}`}>
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light article-img">
          <img className="activator" src={article.listingImage.url} alt={article.listingImage.altText}/>
        </div>
        <div className="card-content">
          <span className="card-title spanFix">{article.title}</span>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{article.title}<i className="material-icons right">close</i></span>
          <p>{article.listingDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default Article
