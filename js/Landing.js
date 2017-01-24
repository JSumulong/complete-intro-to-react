import React from 'react'
import { Link } from 'react-router'

const Landing = React.createClass({
	render () {
		return (
			<div className='landing'>
				<h1>cool video </h1>
				<input type='text' placeholder='search' />
				<Link to='/search'>or Browse All</Link>
			</div>
		)
	}
})

export default Landing
