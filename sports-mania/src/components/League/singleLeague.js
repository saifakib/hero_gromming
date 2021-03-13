import { Link } from 'react-router-dom'
import './league.css'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
//<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>

const SingleLeage = (props) => {
    
    const { strBadge, strLeagueAlternate, strSport, idLeague } = props.league;

    return (
        <div className="card shadow p-3 mb-5 bg-light rounded lg">
            <img className="card-img-top p-5" src={strBadge} alt="img cap" />
            <div className="card-body text-center">
                <div className="card-title font-weight-bold">{strLeagueAlternate}</div>
                <p>Sports Type: {strSport}</p>

                <Link to={`/league/${idLeague}`}>
                    <p className="btn btn-success">Explore</p>

                </Link>
            </div>
        </div>
    )
}

export default SingleLeage;