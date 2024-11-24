import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <li className="team-card-item">
      <Link to={`/team-matches/${id}`} className="link-container">
        <button type="button">
          <img src={teamImageUrl} alt={name} className="team-logo" />
          <p className="team-name">{name}</p>
        </button>
      </Link>
    </li>
  )
}

export default TeamCard
