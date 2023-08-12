import React from "react";
import "./style.css";
import NavBar from "../Navbar/NavBar.js";
import Footer from "../Footer/Footer";


export default function AboutPage() {
	return (
		<>
			<NavBar />
			<div className='about-container'>
				<h2>This would be an image of Vivienne</h2>
				<h2>About Title</h2>
				<p>Info about Viv goes here blah blah</p>
			</div>
			<Footer />
		</>
	);
}
