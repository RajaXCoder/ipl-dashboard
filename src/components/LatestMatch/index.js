import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competing_team: competingTeam,
    competing_team_logo: competingTeamLogo,
    date,
    first_innings: firstInnings,
    man_of_the_match: manOfTheMatch,
    result,
    second_innings: secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <ul className="latest-match-container">
      <li className="result-container">
        <div className="innings-result-container">
          <p>{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          className="opponent-team-image"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />{' '}
      </li>
      <li className="innings-container">
        <h4>First Innings</h4>
        <p>{firstInnings}</p>
        <h4>Second Innings</h4>
        <p>{secondInnings}</p>
        <h4>Man Of The Match</h4>
        <p>{manOfTheMatch}</p>
        <h4>Umpires</h4>
        <p>{umpires}</p>
      </li>
    </ul>
  )
}
export default LatestMatch
