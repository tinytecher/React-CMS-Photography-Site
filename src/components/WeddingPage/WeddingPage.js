// import React from "react";
// import "./style.css";
// import NavBar from "../Navbar/NavBar.js";
// import Footer from "../Footer/Footer";
// import wedding1 from "../../images/wedding.jpg";

// export default function WeddingPage() {
	
	
	
// 	return (
// 		<>
// 			<NavBar />
// 			<div className='wed-container'>
// 				<div className='wed-col1'>
// 					<img
// 						src={wedding1}
// 						className='wed1'
// 						alt='wed'
// 						style={{ flex: 1 }}
// 					></img>
// 					<div style={{ flex: 1 }}></div>
// 					<div style={{ flex: 1 }}></div>
// 				</div>
// 				<div className='wed-col2'>
// 					<img
// 						src={wedding1}
// 						className='wed1'
// 						alt='wed'
// 						style={{ flex: 1 }}
// 					></img>
// 					<div style={{ flex: 1 }}></div>
// 					<div style={{ flex: 1 }}></div>
// 				</div>
// 				<div className='wed-col3'>
// 					<div style={{ flex: 1 }}></div>
// 					<div style={{ flex: 1 }}></div>
// 					<div style={{ flex: 1 }}></div>
// 				</div>
// 			</div>
// 			<Footer />
// 		</>
// 	);
// }


import "./style.css";
import NavBar from "../Navbar/NavBar.js";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import * as contentful from "contentful";


export default function WeddingPage() {
	const [images, setImages] = useState();


	const client = contentful.createClient({
		space: "zn0gciemmdui",
		accessToken:
			"d7lRCfp0zDlmeAiUsFO94ZxylnEzeVke0dASWFNMWHQ",
	});

	useEffect(()=>{
	async function getImages() {
		try {
			const entries = await client.getEntries({
				content_type: "weddings",
				select: "fields",
			});

			let assetData = entries.includes.Asset;
			// const url = "http:" + assetData[0].fields.file.url;
			// console.log("AssetData", assetData[0].fields.file.url);
	
			setImages(assetData);
		} catch (error) {
			console.log(`Error fetching authors ${error}`);
		}
	}
		
getImages()
	},[client])

	return (
		<>
			<NavBar />
			<div className='wedding-container'>
			{images && images.map((item) => {
			const url = "http:" + item.fields.file.url;
			return(<img className="wedding-images" src={url} alt="dw"></img>)
				
			})}
			</div>
			<Footer />
		</>
	);
}
