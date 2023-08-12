import React from "react";
import "./style.css";
import NavBar from "../Navbar/NavBar.js";
import Footer from "../Footer/Footer";
import portrait1 from "../../images/portrait.jpg";

export default function PortraitPage() {
	return (
		<>
			<NavBar />
			<div className='portrait-container'>
				<div className='portrait-col1'>
					<img
						src={portrait1}
						className='portrait1'
						alt='portrait'
						style={{ flex: 1 }}
					></img>
					<div style={{ flex: 1 }}></div>
					<div style={{ flex: 1 }}></div>
				</div>
				<div className='portrait-col2'>
					<img
						src={portrait1}
						className='wed1'
						alt='wed'
						style={{ flex: 1 }}
					></img>
					<div style={{ flex: 1 }}></div>
					<div style={{ flex: 1 }}></div>
				</div>
				<div className='portrait-col3'>
					<div style={{ flex: 1 }}></div>
					<div style={{ flex: 1 }}></div>
					<div style={{ flex: 1 }}></div>
				</div>
			</div>
			<Footer />
		</>
	);
}
