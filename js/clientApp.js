		var div = React.DOM.div
		var h1 = React.DOM.h1

		var myTitle = React.createClass({
			render: function() {
				return (
					div(null, 
						h1(null, 'check out this component')
					)
				) 
			}
		})

		var myFirstComponent = React.createClass({
			render: function() {
				return (
					div(null, 
						React.createElement(myTitle)
					)
				)
			}
		})

		ReactDOM.render(React.createElement(myFirstComponent), document.getElementById('app'))
