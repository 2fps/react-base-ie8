import React from "react";
import InputBar from "./InputBar";
import Test from "./Test";

import {
  Router,
  Route,
  IndexRoute,
  IndexRedirect,
  browserHistory,
  hashHistory,
  useRouterHistory
} from "react-router";

import { createHashHistory } from "history";

// const history = useRouterHistory(createHashHistory)({ queryKey: false });
const history = useRouterHistory(createHashHistory)({ queryKey: false });

import About from "./About";
import Inbox from "./Inbox";

let msg = `Fetching data.json`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "message"
    };
  }

  render() {
    console.log("App render", this.state);
    return (
      <div>
        <h1>{msg}</h1>
        <pre>
          <code>{JSON.stringify(this.state, null, 2)}</code>
        </pre>
        <InputBar />
        <Router history={history}>
          <Route path="/" component={Test}>
            <Route path="about" component={About} />
            <Route path="inbox" component={Inbox} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
