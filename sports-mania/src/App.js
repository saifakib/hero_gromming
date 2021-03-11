import { useState, useEffect } from 'react'
import { Switch, Route, Link, useParams, useHistory } from 'react-router-dom'
import axios from 'axios';
//import { League } from './components/leagues'

//import './App.css'

// const bg_cover = {
//   backgroundImage: `url('../public/cover-photo/studiam-cover.webp')`
// }

function App() {

  return (
    <div className="container">
      <Switch>
        <Route path='/' exact component={League}></Route>
        <Route path='/league/:id' component={LeagueDetails}></Route>
      </Switch>
    </div>
  )
}


function League() {

  const [leagues, setLeagues] = useState([])

  const history = 
  useEffect(() => {
    fetchLeagues()
  }, [])

  const fetchLeagues = async () => {
    let result = await axios.get('https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England&s=Soccer')
    console.log(result.data.countrys)
    setLeagues(result.data.countrys)
  }


  return (
    <div className="container">
      <div className="jumbotrom mt-4">
        <h1 className="display-4"></h1>
      </div>
      <div className="row">
        {leagues.map(league => (
          <h1 key={league.idLeague}>
            <Link to={`/league/${league.idLeague}`}>
              {league.strLeagueAlternate}</Link>
          </h1>
        ))}
        <div className="col-4">
          <div className="card">
          </div>
        </div>
      </div>
    </div>
  )
}

function LeagueDetails({ match }) {
  
  const [leagueDetails, setLeagueDetails] = useState({})

  //const { id } = useParams()

  useEffect(() => {
    fetch()
    console.log(match)
  }, [])

  const fetch = async () => {
    const data = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4346`)
    console.log(data)
  }

  render(
    <h1>hvdjkfhgjksfdh</h1>
  )
}

export default App;
