import React from 'react'
import PropTypes from 'prop-types'

Profile.propTypes = {
    userId: PropTypes.string.isRequired,
    userName: PropTypes.string
}

export default function Profile({ userId, userName }) {
    return (
        <div>
            <p>{userId}</p>
            <p>{userName}</p>
        </div>
    )
}