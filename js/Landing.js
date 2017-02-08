import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { setSearchTerm } from './actionCreators'
const { string, func } = React.PropTypes

const Landing = React.createClass({
	propTypes: {
		searchTerm: string,
		dispatch: func
	},
	handleSearchTermChange (event) {
  	this.props.dispatch(setSearchTerm(event.target.value))
	},
	render () {
		return (
			<div className='landing'>
				<h1>cool video </h1>
				<input value={this.props.searchTerm} type='text' placeholder='search' />
				<Link to='/search'>or Browse All</Link>
			</div>
		)
	}
})

const mapStateToProps = (state) => {
	return {
		searchTerm: state.searchTerm
	}
}

export default connect(mapStateToProps)(Landing)
