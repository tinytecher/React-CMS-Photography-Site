import React from "react";
import "./style.css";
import { CiInstagram, CiFacebook } from "react-icons/ci";

export default function Footer() {
	const style = { fontSize: "2.5em", color: "#3a3a3a" };

	return (
		<>
			<div className='footer-container'>
				<div className='insta'>
					<CiInstagram style={style} />
				</div>
				<div className='facebook'>
					<CiFacebook style={style} />
				</div>
			</div>
		</>
	);
}
