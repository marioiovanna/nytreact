
var React = require('react');

var Results = React.createClass({

    render: function () {

        return (

            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2 className="panel-title">RESULTS</h2>
                    </div>
                    <div className="panel-body">
                            <ul id="names-list">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>

                    </div>
        )
    }
});

module.exports = Results;