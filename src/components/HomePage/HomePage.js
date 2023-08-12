import React from "react";
// import { NavLink } from "react-router-dom";
import "./style.css";
import NavBar from "../Navbar/NavBar.js";
import Footer from "../Footer/Footer";

import maternity from "../../images/maternity.jpg";
import wedding from "../../images/wedding.jpg";
import family from "../../images/family.jpg";
import man from "../../images/man.jpg";

export default function HomePage() {
	return (
		<>
			<NavBar />
			{/* <div className='home-container'>
				<div className='home-col1'>
				<NavLink to="/maternity"><a href="/maternity"><img className="maternityHome" src={maternity} style={{ flex: 1 }} alt="maternity"/></a></NavLink>
				<NavLink to="/wedding"><a href="/wedding"><img className="weddingHome" src={wedding} style={{ flex: 1 }} alt="wedding"/></a></NavLink>
				</div>
				<div className='home-col2'>
				<NavLink to="/portrait"><a href="/portrait"><img className="portraitHome" src={portrait1} style={{ flex: 1 }} alt="portrait"/></a></NavLink>
				<NavLink to="/maternity"><a href="/maternity"><img className="maternityHome" src={maternity} style={{ flex: 1 }} alt="maternity"/></a></NavLink>
				</div>
			</div> */}
			<div className='main-container'>
				<div className='main-col1'>
					<figure className='flip'>
						<img src={maternity} alt='maternity' />
						<figcaption>
							<h3>Maternity</h3>
							<p>
								The strength to change what I can, the
								inability to accept what I can't and the
								incapacity to tell the difference.
							</p>
							<a href='/maternity' className='read-more'>
								Read More
							</a>
						</figcaption>
					</figure>
					<figure className='flip'>
						<img src={wedding} alt='wedding' />
						<figcaption>
							<h3>Wedding</h3>
							<p>
								The strength to change what I can, the
								inability to accept what I can't and the
								incapacity to tell the difference.
							</p>
							<a href='/wedding' className='read-more'>
								Read More
							</a>
						</figcaption>
					</figure>
				</div>
				<div className='main-col2'>
					<figure className='flip'>
						<div className='man'>
							<img src={man} alt='person' />
						</div>
						<figcaption>
							<h3>Portrait</h3>
							<p>
								The strength to change what I can, the
								inability to accept what I can't and the
								incapacity to tell the difference.
							</p>
							<a href='/portrait' className='read-more'>
								Read More
							</a>
						</figcaption>
					</figure>
					<figure className='flip'>
						<img src={family} alt='family' />
						<figcaption>
							<h3>Family</h3>
							<p>
								The strength to change what I can, the
								inability to accept what I can't and the
								incapacity to tell the difference.
							</p>
							<a href='/family' className='read-more'>
								Read More
							</a>
						</figcaption>
					</figure>
				</div>
			</div>

			<Footer />
		</>
	);
}
