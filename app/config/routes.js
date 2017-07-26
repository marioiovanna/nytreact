var React = require("react");
var router = require("react-router");

var Route = router.Route;
var Router = router.Router;

var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

var Main = require("../components/Main");
var Results = require("../components/children/grandchildren/Results");
var Saved = require("../components/children/grandchildren/Saved");
var Search = require("../components/children/Search");

module.exports = (

    <Router history={hashHistory}>

        <Route path="/" component={Main}>

            <Route path="Search" component={Search}>

                <Route path="Results" component={Results}/>
                <Route path="Saved" component={Saved}/>

            </Route>

            <IndexRoute component={Search}/>

        </Route>
    </Router>
);
