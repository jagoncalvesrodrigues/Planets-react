import { useParams } from 'react-router-dom';

const user = () => {
	const location = useParams();
	return (
		<>
			<h1>{user}</h1>
		</>
	);
};

export default Home;
