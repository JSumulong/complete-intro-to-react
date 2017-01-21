		var div = React.DOM.div
		var h1 = React.DOM.h1

		var myTitle = React.createClass({
			render: function() {
				return (
					div(null, 
						h1({style: {color: this.props.color}}, this.props.title)
					)
				) 
			}
		})

		var myTitleFactory = React.createFactory(myTitle)

		var myFirstComponent = React.createClass({
			render: function() {
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
