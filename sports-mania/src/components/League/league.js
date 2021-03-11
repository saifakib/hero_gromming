import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import './league.css'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
//<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>

function League() {

  const [leagues, setLeagues] = useState([])

  useEffect(() => {
    fetchLeagues()
  },[])

  const fetchLeagues = async () => {
    let result = await axios.get('https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England&s=Soccer')
    setLeagues(result.data.countrys)
  }


  return (
    <div className="container-fluid">
      <div className="jumbotron mt-2 bgCover" style={{ height: "450px", marginBottom: "5px" }}>
        <h1 className="display-4 text-center text-light font-weight-bold" style={{padding: "100px" }}>England Leagues</h1>
      </div>
      <div className="container rounded ">
      <div className=" row d-flex align-items ">
          {leagues.map(league => (
              <div className="col-md-4 mb-2">
                <div className="card shadow p-3 mb-5 bg-light rounded lg" style={{}}>
                  <img className="card-img-top p-5" src={league.strBadge} alt="img cap"/>
                  <div className="card-body text-center">
                    <div className="card-title font-weight-bold">{league.strLeagueAlternate}</div>
                    <p>Sports Type: {league.strSport}</p>

                    <Link to={`/league/${league.idLeague}`}>
                      <p className="btn btn-success">Explore</p>
                      
                    </Link>
                  </div>
                </div>
              </div>
          ))
          }
      </div>
      </div>
      
    </div>
  )
}

export default League;