import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inbox from './Inbox/Inbox';
import Flagged from './Flagged/Flagged';

function App() {
  return (
    <div className="App">
      <Router>
    <main>
      
    <Switch>
      <Route path="/" exact component={Inbox} />
      {/* <Route path="/about/:name"  component={About} /> */}
      <Route path="/flagged"  component={Flagged} />
      {/* <Route render={() => <h1>404: page not found</h1>} /> */}
      
    </Switch>
    </main>
</Router>
    </div>
  );
}

export default App;
