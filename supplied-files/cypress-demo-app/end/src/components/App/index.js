import React, { useState } from 'react'
import Heading from '../Heading'
import Form from '../Form'
import NewsContainer from '../NewsContainer'
import { MAX_COUNT } from '../../constants'
import { COUNTRIES } from '../../constants'

function App() {
  const defaultSelectedCountry = COUNTRIES[0] && COUNTRIES[0].code
  const [selectedCountry, setSelectedCountry] = useState(defaultSelectedCountry)
  const [headlines, setHeadlines] = useState([])

  const updateHeadlines = (data) => {
    const headlines = data.articles
    // getting only the first 10 articles from the array
    const topTenHeadlines = headlines.slice(0, MAX_COUNT)
    setHeadlines(topTenHeadlines)
  }

  return (
    <div className="app">
      <Heading />
      <Form
        updateHeadlines={updateHeadlines}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <NewsContainer headlines={headlines} />
    </div>
  )
}

export default App
