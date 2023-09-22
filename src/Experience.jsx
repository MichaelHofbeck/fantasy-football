import { Html } from "@react-three/drei"
import Client from "./api/Client"
import { useEffect, useState } from "react"
import { OrbitControls } from "@react-three/drei"
import { MeshNormalMaterial } from "three"


export default function Experience()
{

    const [espnS2, setEspnS2] = useState('')
    const [SWID, setSWID] = useState('')
    const client = new Client()
    // const client = new Client({ leagueId: 1319421077 })
    // console.log(client.getCurrentStandings({ seasonId: 2023, scoringPeriodId: 2 }))
    const setCookies = () =>
    {
        localStorage.setItem('espnS2', espnS2)
        localStorage.setItem('SWID', SWID)
        
    }

    const getCurrentStandings = async () =>
    {
        client.setOptions({ leagueId: 1319421077, espnS2: localStorage.getItem('espnS2'), SWID: localStorage.getItem('SWID') })
        console.log(client)
        const standings = await client.getCurrentStandings({ seasonId: 2023, scoringPeriodId: 2 })
        console.log(standings)
    }

    // useEffect(() =>
    // {
    //     if (localStorage.getItem('espnS2') !== '' && localStorage.getItem('SWID') !== '')
    //     {
    //         client.setOptions({ leagueId: 1319421077, espnS2: localStorage.getItem('espnS2'), SWID: localStorage.getItem('SWID') })
    //     }
    // }, [espnS2, SWID])

    return <>
    <OrbitControls />

    <mesh>
        <boxGeometry args={ [ 1, 1, 1 ] }/>
        <meshNormalMaterial />
    </mesh>

    <Html position={[ 1, 1, 1]} occlude="blending">
        <form>
            <label>
                espnS2
                <input type="text" value={espnS2} onChange={(event) => 
                {
                    
                    setEspnS2(event.target.value)
                }} />
            </label>
            <label>
                SWID
                <input type="text" value={SWID} onChange={(event) => setSWID(event.target.value)} />
            </label>
            <input type="submit" value="Submit" onClick={(e) => {e.preventDefault(); setCookies();}} />
            <input type="submit" value="Submit" onClick={(e) => {e.preventDefault(); getCurrentStandings();}} />
        </form>
    </Html>
    </>
}