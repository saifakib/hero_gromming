import { Switch, Route} from 'react-router-dom'
import League  from './components/League/league'
import  LeagueDetails  from './components/LeagueDetails/leagueDetails'
import './App.css'


function App() {

  return (
    <div className="container-fluid">
      <Switch>
        <Route path='/' exact component={League}></Route>
        <Route path='/league/:id' component={LeagueDetails}></Route>
      </Switch>
    </div>
  )
}





export default App;