import axios from 'redaxios'
import _ from 'lodash'

class Client
{
    constructor(options = {})
    {
        this.leagueId = options.leagueId
    }

    setOptions({ leagueId, espnS2, SWID })
    {
        this.leagueId = leagueId
        this.espnS2 = espnS2
        this.SWID = SWID
    }

    getCurrentStandings({ seasonId, scoringPeriodId })
    {
        const route = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/${seasonId}/segments/0/leagues/${this.leagueId}?scoringPeriodId=${scoringPeriodId}&view=mRoster&view=mTeam`
        const headers = { Cookie: `espn_s2=${this.espnS2}; SWID=${this.SWID};`, }
        const standings = axios.get(route,{headers: headers, withCredentials: true } ).then((response) => 
        {
            const data = _.get(response.data, 'teams')
            return data
        })
        return standings
    }
}



export default Client