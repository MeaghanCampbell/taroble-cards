import Login from "../Login";
import SignUp from "../SignUP";
import Home from "../Home";
import CardDetail from "../CardDetail";
import Loading from '../LoadingScreen';
import ReadingMessages from '../ReadingMessages';

import { useStoreContext } from "../../utils/GlobalState"


const Main= () => {
	// import the global state and dispatch
	const [state] = useStoreContext();
	// extract currentReading from the state object
	const { currentPage } = state;

	return (
		<div>
		{ currentPage === 'home' &&  <Home/> }
		{ currentPage === 'loading' &&  <Loading/> }
		{ currentPage === 'messages' &&  <ReadingMessages/> }
		{ currentPage === 'detail' &&  <CardDetail/> }
		{ currentPage === 'login' &&  <Login/> }
		{ currentPage === 'signUp' &&  <SignUp/> }
		</div>
	)
}

export default Main;