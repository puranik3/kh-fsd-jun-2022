import React from 'react'
import NewsCard from '../NewsCard'
import './index.css'

const NewsContainer = (props) => {
  const { headlines } = props
  return (
    <>
      <div>
        <div className="news">
          {headlines.map((headline, index) => (
            <NewsCard key={index} headline={headline} />
          ))}
        </div>
        {!headlines.length && <div>No headlines found</div>}
      </div>
    </>
  )
}

export default NewsContainer
