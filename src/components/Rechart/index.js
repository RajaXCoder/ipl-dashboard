import {PieChart, Pie, Cell, Tooltip, Legend} from 'recharts'

// Group match results by winning teams
const groupByWinningTeam = data => {
  const teamWins = {}
  data.forEach(match => {
    const winningTeam = match.result.split(' Won')[0]
    teamWins[winningTeam] = (teamWins[winningTeam] || 0) + 1
  })

  return Object.keys(teamWins).map(team => ({
    name: team,
    wins: teamWins[team],
  }))
}

const Rechart = ({recentMatches}) => {
  const formalData = groupByWinningTeam(recentMatches)

  const chartData = formalData.map(each => ({
    ...each,
    name: each.name.slice(0, 3), // Slices the first 3 characters of the wins string
  }))

  const COLORS = [
    '#0088FE',
    '#00C49F',
    '#FFBB28',
    '#FF8042',
    '#AF19FF',
    '#FF5733',
    '#33FF57',
  ]

  return (
    <div>
      <PieChart width={400} height={400}>
        <Pie
          data={chartData}
          dataKey="wins"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          label
        >
          {chartData.map((entry, index) => (
            <Cell
              key={`cell-${entry.name}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  )
}

export default Rechart
