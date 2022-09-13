import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
	return (
		<>
			<Header />
			<div className="container">
				<Content />
			</div>
			<Footer />
		</>
	);
};

export default App;
