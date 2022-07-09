import React from 'react'
import PropTypes from 'prop-types'


Main.propTypes={
  owner:PropTypes.string.isRequired,
}
Main.defaultProps={
  owner:'Deepak',
}

export default function Main(props) {
  return (
    <main>

        <h1>{props.owner} Website</h1>
        <p>This is a beginner website .I am learning React which is very cool </p>
    </main>
    
    
  )
}

