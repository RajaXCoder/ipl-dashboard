import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    competing_team: competingTeam,
    competing_team_logo: competingTeamLogo,
    match_status: matchStatus,
    result,
  } = matchCardDetails

  const statusColor = matchStatus === 'Won' ? 'win-status' : 'lost-status'

  return (
    <li className="match-card-item">
      <img
        className="team-logo-image "
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={`${statusColor}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
