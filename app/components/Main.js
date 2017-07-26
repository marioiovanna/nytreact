
var React = require("react");

var Main = React.createClass({

  render: function() {

    return (

        <div className="container">
            <div className="jumbotron text-center">
                <h1><strong>New York Times Article Scrubber</strong></h1>
                <p><em>Search for and annotate articles of interest!</em></p>
            </div>

            <div className="row">

                {this.props.children}

            </div>

        </div>
    );
  }
});

module.exports = Main;
