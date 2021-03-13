import { useState, useEffect } from 'react'
import axios from 'axios';
import './league.css'
import SingleLeague from './singleLeague'

function League() {

  const [leagues, setLeagues] = useState([])

  useEffect(() => {
    fetchLeagues()
  }, [])

  const fetchLeagues = async () => {
    let result = await axios.get('https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England&s=Soccer')
    setLeagues(result.data.countrys)
  }


  return (
    <div className="container-fluid">
      <div className="jumbotron mt-2 bgCover" style={{ height: "450px", marginBottom: "5px" }}>
        <h1 className="display-4 text-center text-light font-weight-bold" style={{ padding: "100px" }}>England Leagues</h1>
      </div>
      <div className="container rounded ">
        <div className=" row d-flex align-items">
          {leagues.map(league => (
            <div className="col-md-4 mb-2">
              <SingleLeague league={league} />
            </div>
          ))
          }
        </div>
      </div>

    </div>
  )
}

export default League;