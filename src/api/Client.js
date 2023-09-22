import axios from 'redaxios'
import _ from 'lodash'

class Client
{
    constructor(options = {})
    {
        this.leagueId = options.leagueId
        this.header = { Cookie: `espn_s2=${this.espnS2}; SWID=${this.SWID};` }
    }

    getCurrentStandings({ seasonId, scoringPeriodId })
    {
        const route = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/${seasonId}/segments/0/leagues/${this.leagueId}?scoringPeriodId=${scoringPeriodId}&view=mRoster&view=mTeam`
        const headers = { Cookie: `espn_s2=${this.espnS2}; SWID=${this.SWID};`, }
        axios.get(route, {headers, withCredentials: true } ).then((response) => 
        {
            console.log(response)
            const data = _.get(response.data, 'teams')
            return data
        })
    }
}



export default Client