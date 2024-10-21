import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import AuctionList from './components/Auction/AuctionList';
import AuctionItem from './components/Auction/AuctionItem';
import CreateAuction from './components/Auction/CreateAuction';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/auctions" component={AuctionList} />
        <Route path="/auctions/:id" component={AuctionItem} />
        <Route path="/create" component={CreateAuction} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
