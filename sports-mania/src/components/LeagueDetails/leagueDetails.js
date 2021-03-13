import { useState, useEffect } from 'react'
import axios from 'axios';

function LeagueDetails({ match }) {

  const [leagueDetails, setLeagueDetails] = useState({})
  useEffect(() => {
    fetch()
  },[])
  var fetch = async () => {
    const result = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${match.params.id}`)
    setLeagueDetails(result.data.leagues[0])
  }

  return (
    <div className="container-fluid">
      <div className="jumbotron-fluid d-flex justify-content-center align-items-center bgCover" style={{ height: "450px", marginBottom: "10px" }}>
        <img className="card-img-top" style={{ width: "30%" }} src={leagueDetails.strLogo} alt="Card img cap" />
      </div>


      <div className="container">
        <div className="row mt-4 mb-4 rounded bg-success d-flex justify-content-between">
          <div className="col-6 px-5 py-2 mt-5 text-white">
            <h5 className="font-weight-bold">{leagueDetails.strLeagueAlternate}</h5>
            <p>Founded: {leagueDetails.intFormedYear}</p>
            <p>Country: {leagueDetails.strCountry}</p>
            <p>Sport Type: {leagueDetails.strSport}</p>
            <p>Gender: {leagueDetails.strGender}</p>
          </div>
          <div className="col-6 px-6 py-2">
            {leagueDetails.strGender === "Male" ? (
              <img className="img-thumbnail rounded" style={{ width: "100%", height: "100%" }} src="/img/male.png" alt="Card img cap" />
            ) : (
              <img className="img-thumbnail rounded" style={{ width: "100%" }} src="/img/female.png" alt="Card img cap" />
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-12 px-5 py-2">
            <p className="text-justify">
              {leagueDetails.strDescriptionEN}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-8 py-2 offset-4">
            <a href={leagueDetails.strFacebook} target='_blank' rel='nooperer noreferrer'>
              <img className="rounded" style={{ width: "10%" }} src="/logo/Facebook.png" alt="Facebook img" />
            </a>
            <a href={leagueDetails.strTwitter}>
              <img className="rounded" style={{ width: "10%" }} src="/logo/Twitter.png" alt="Twitter img" />
            </a>
            <a href={leagueDetails.strYoutube}>
              <img className="rounded" style={{ width: "10%" }} src="/logo/YouTube.png" alt="Youtube img" />
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LeagueDetails;