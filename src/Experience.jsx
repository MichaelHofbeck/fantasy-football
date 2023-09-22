import { Html } from "@react-three/drei"
import Client from "./api/Client"
import { useState } from "react"
import { OrbitControls } from "@react-three/drei"


export default function Experience()
{

    const [espnS2, setEspnS2] = useState('')
    const [SWID, setSWID] = useState('')
    // const client = new Client({ leagueId: 1319421077 })
    // console.log(client.getCurrentStandings({ seasonId: 2023, scoringPeriodId: 2 }))
    const setCookies = () =>
    {
        localStorage.setItem('espnS2', espnS2)
        localStorage.setItem('SWID', SWID)
    }

    return <>
    <OrbitControls />

    <mesh>
        <boxGeometry />
        <meshBasicMaterial />
    </mesh>

    <Html position={[ 1, 0, 0]}>
        <form>
            <label>
                espnS2
                <input type="text" value={espnS2} onChange={(event) => setEspnS2(event.target.value)} />
            </label>
            <label>
                SWID
                <input type="text" value={SWID} onChange={(event) => setSWID(event.target.value)} />
            </label>
            <input type="submit" value="Submit" onClick={setCookies} />
        </form>
    </Html>
    </>
}