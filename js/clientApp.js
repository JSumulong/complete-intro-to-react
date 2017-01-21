import React from 'react'
import ReactDOM from 'react-dom'
import myTitle from './myTitle'

var div = React.DOM.div

var myTitleFactory = React.createFactory(myTitle)

var myFirstComponent = React.createClass({
  render: function () {
    return (
					div(null,
						myTitleFactory({title: "It\'s the first line", color: 'peru'}),
						myTitleFactory({title: 'This is a title prop', color: 'orange'}),
						myTitleFactory({title: 'Oh, ok', color: 'papayawhip'}),
						myTitleFactory({title: 'Here is another one', color: 'rebeccapurple'}),
						myTitleFactory({title: 'and last, but not least', color: 'pink'})
					)
    )
  }
})

ReactDOM.render(React.createElement(myFirstComponent), document.getElementById('app'))
