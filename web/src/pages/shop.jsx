import { useState } from 'react';
import '../App.css';
import StripeContainer from '../components/StripeContainer';
import mass1 from '../assets/mass1.jpg'

function Shop() {
	const [showItem, setShowItem] = useState(false);
	return (
		<div className='App'>
			<h1>Xen Wellness - Deep Tissue</h1>
			{showItem ? (
				<StripeContainer />
			) : (
				<>
					<h3>$10.00</h3>
					<img src={mass1} alt='Spatula' style={{width: "100%"}}/>
					<button onClick={() => setShowItem(true)}>Purchase 60 minutes</button>
				</>
			)}
		</div>
	);
}

export default Shop;

