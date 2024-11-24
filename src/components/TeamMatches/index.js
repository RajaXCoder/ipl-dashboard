import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import Rechart from '../Rechart'
import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {
    teamMatches: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {id} = match.params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const matchData = await response.json()
    const formattedData = {
      teamBannerUrl: matchData.team_banner_url,
      latestMatchDetails: matchData.latest_match_details,
      recentMatches: matchData.recent_matches,
    }
    console.log(matchData)

    this.setState({teamMatches: formattedData, isLoading: false})
  }

  clickBack = () => {
    const {history} = this.props
    history.replace('/')
  }

  bgColor = () => {
    const {match} = this.props
    const {id} = match.params

    let teamBgColor

    switch (id) {
      case 'RCB':
        teamBgColor = 'rcb-bg'
        break
      case 'KKR':
        teamBgColor = 'kkr-bg'
        break
      case 'KXP':
        teamBgColor = 'kxp-bg'
        break
      case 'CSK':
        teamBgColor = 'csk-bg'
        break
      case 'RR':
        teamBgColor = 'rr-bg'
        break
      case 'MI':
        teamBgColor = 'mi-bg'
        break
      case 'SH':
        teamBgColor = 'srh-bg'
        break
      default:
        teamBgColor = 'dc-bg'
    }
    return teamBgColor
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" width={50} height={50} />
    </div>
  )

  render() {
    const bgColor = this.bgColor()
    const {teamMatches, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatches
    return isLoading ? (
      this.renderLoader()
    ) : (
      <div className={`teamMatches-container ${bgColor}`}>
        <button type="button" className="back-btn" onClick={this.clickBack}>
          Back
        </button>
        <img src={teamBannerUrl} alt="team banner" className="team-url" />
        <p className="latest-text">Latest Matches</p>
        <LatestMatch
          latestMatchDetails={latestMatchDetails}
          key={latestMatchDetails.id}
        />
        <h3>Winning Teams Pie Chart</h3>
        <Rechart recentMatches={recentMatches} />
        <ul className="matchCard-container">
          {recentMatches.map(each => (
            <MatchCard matchCardDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
