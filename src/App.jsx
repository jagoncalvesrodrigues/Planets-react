import { BrowserRouter, Link } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './router/Router';

const App = () => {
	return (
		//browser router conecta la navegacion con la app de react
		<BrowserRouter>
			<GlobalStyles />
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
				</ul>
			</nav>
			<Router />
		</BrowserRouter>
	);
};

export default App;
