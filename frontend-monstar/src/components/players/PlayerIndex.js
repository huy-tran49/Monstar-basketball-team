import { useState, useEffect } from "react"
import { Card } from "react-bootstrap"
import LoadingScreen from "../shared/LoadingScreen"
import { Link } from "react-router-dom"
import messages from "../shared/AutoDismissAlert/messages"

import { showAllPlayers } from "../../api/players"

const PlayersIndex = (props) => {
    const [players, setPlayers] = useState(null)
    const [error, setError] = useState(false)
    const {msgAlert} = props

    useEffect(()=>{
        showAllPlayers()
            .then(res => setPlayers(res.data.players))
            .catch(err => {
                msgAlert({
                    heading: 'Error getting players',
                    message: 'Unable to get players',
                    variant: 'danger'
                })
                setError(true)
            })
    }, [])
    if(error) {
        return <p>Error!</p>
    }

    if(!players) {
        return <LoadingScreen />
    } else if (players.length === 0) {
        return <p>No players to display.</p>
    }

    const playerCard = players.map(player => (
        <Card key={player.id}>
            <Card.Header>{player.name}</Card.Header>
            <Card.Body>
                <Card.Text>
                <Link to={`/players/${player.id}`} className="btn btn-info"> View { player.name }</Link>
                </Card.Text>
                {player.agent ?
                <Card.Footer>
                     agent: {player.agent.email }
                </Card.Footer>
                : null}
            </Card.Body>
        </Card> 
    ))

    return (
        <div className="container-md">
            {playerCard}
        </div>
    )
}

export default PlayersIndex