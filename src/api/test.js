
import Client from "./Client.js"

const client = new Client({ leagueId: 1319421077 })
client.getCurrentStandings({ seasonId: 2023, scoringPeriodId: 2 })