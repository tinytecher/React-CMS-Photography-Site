import React from "react";
import "./style.css";
// import hero_wedding from "../../images/hero_wedding.png"
// import logo from "../../images/logo.png"
import { NavLink } from "react-router-dom";

export default function NavBar() {
	return (
		<>
			<header className='header'>
				<h1 className='home-title'>Forte Photography</h1>
			</header>
			<nav className='nav'>
				<ul className='nav-ul'>
					<li className='nav-li'>
						<NavLink
							style={{ textDecoration: "none" }}
							to='/'
						>
							Home
						</NavLink>
					</li>
					<li className='nav-li'>
						<NavLink
							style={{ textDecoration: "none" }}
							to='/about'
						>
							About
						</NavLink>
					</li>
					{/* <li className='nav-li'>
						<NavLink
							style={{ textDecoration: "none" }}
							to='/gallery'
						>
							Gallery
						</NavLink>
					</li> */}
					<li className='nav-li'>
						<NavLink
							style={{ textDecoration: "none" }}
							to='/prices'
						>
							Prices
						</NavLink>
					</li>
					<li className='nav-li'>
						<NavLink
							style={{ textDecoration: "none" }}
							to='/contact'
						>
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
}
