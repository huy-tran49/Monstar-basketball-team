import PlayersIndex from "./players/PlayerIndex"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h2>Home Page</h2>
			<PlayersIndex msgAlert={props.msgAlert} />
		</>
	)
}

export default Home
