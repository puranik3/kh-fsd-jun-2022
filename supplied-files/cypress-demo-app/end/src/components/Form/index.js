import React, { useState } from 'react'
import './index.css'
import { COUNTRIES } from '../../constants'
import getHeadlines from '../../utils'

function Form(props) {
  const { selectedCountry, setSelectedCountry } = props

  const [searchText, setSearchText] = useState('')
  const [buttonText, setButtonText] = useState('SEARCH')
  const [
    showTimeTakenToFetchSearchResults,
    setShowTimeTakenToFetchSearchResults,
  ] = useState(false)

  // update country on user selection
  const updateCountrySelection = (e) => {
    setSelectedCountry(e.target.value)
  }

  // update search text on user input
  const updateSearchText = (e) => {
    if (e.target.value.length > 15) {
      var trimmedString = e.target.value.substring(0, 15)
      setSearchText(trimmedString)
      return
    }
    setSearchText(e.target.value)
  }

  // server call to get the headlines
  const search = (e) => {
    e.preventDefault()
    setShowTimeTakenToFetchSearchResults(false)
    getHeadlines(selectedCountry, searchText, (data) => {
      props.updateHeadlines(data)
      setShowTimeTakenToFetchSearchResults(true)
    })
  }

  return (
    <form className="form">
      <div className="form-group">
        <select
          className="form-control"
          value={selectedCountry}
          onChange={(e) => {
            updateCountrySelection(e)
          }}
        >
          {COUNTRIES.map((country) => (
            <option key={country.id} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <input
          type="type"
          className="form-control"
          placeholder="Search here"
          value={searchText}
          onChange={(e) => {
            updateSearchText(e)
          }}
        />
        <div className="info">
          Only 15 characters are allowed and you have{' '}
          <b className="remainingCharacters">{15 - searchText.length}</b> left.
        </div>
      </div>
      <button
        className="btn btn-primary button"
        onClick={(e) => {
          search(e)
        }}
        onMouseOver={() => {
          setButtonText('You are hovering me...')
        }}
        onMouseOut={() => {
          setButtonText('SEARCH')
        }}
      >
        {buttonText}
      </button>
      {showTimeTakenToFetchSearchResults && (
        <div class="timeTakenToFetchResults">
          Results found in {Math.random()} seconds
        </div>
      )}
    </form>
  )
}

export default Form
