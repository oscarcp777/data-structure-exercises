import React from 'react'
import PropTypes from 'prop-types'

import './styles.sass'

const Card = ({ title, children }) => (
  <div className="jampp__Card">
    <div className="jampp__Card__Title">{title}</div>

    {children}
  </div>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default Card
