import React from "react";
// import { NavLink } from "react-router-dom";
import "./style.css";
import NavBar from "../Navbar/NavBar.js";
import Footer from "../Footer/Footer";


import maternity from "../../images/maternity.jpg";
import wedding from "../../images/wedding.jpg";
import family from "../../images/family.jpg";
import man from "../../images/man.jpg";

export default function HomePageTwo() {
	return (
		<>
				<NavBar />
				<div className="mainTwoPage"></div>
			<div className='main-container'>
				<div className='main-col1'>
					<figure className='snip0016'>
						<img src={maternity} alt='maternity' />
						<figcaption>
							<h2>Maternity</h2>
							<a
								href='/maternity'
								className='read-more'
							>Maternity</a>
						</figcaption>
					</figure>
					<figure className='snip0016'>
						<img src={wedding} alt='wedding' />
						<figcaption>
							<h2>Wedding</h2>
							<a href='/wedding' className='read-more'>wedding</a>
						</figcaption>
					</figure>
				</div>
				<div className='main-col2'>
					<figure className='snip0016'>
						<div className='man'>
							<img src={man} alt='person' />
						</div>
						<figcaption>
							<h2>Portrait</h2>
							<a href='/portrait' className='read-more'>portrait</a>
						</figcaption>
					</figure>
					<figure className='snip0016'>
						<img src={family} alt='family' />
						<figcaption>
							<h2>Family</h2>
							<a href='/family' className='read-more'>family</a>
						</figcaption>
					</figure>
				</div>
			</div>
			<Footer />
		</>
	);
}
