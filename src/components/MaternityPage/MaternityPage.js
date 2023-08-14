import "./style.css";
import NavBar from "../Navbar/NavBar.js";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import * as contentful from "contentful";


export default function MaternityPage() {
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
				content_type: "maternityFolder",
				select: "fields",
			});

			let assetData = entries.includes.Asset;

	
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
			<div className="page-title">
			<h2>Maternity</h2>
			</div>
			<div className='maternity-container'>
			{images && images.map((item) => {
			const url = "http:" + item.fields.file.url;
			return(<img className="maternity-images" src={url} alt="dw"></img>)
				
			})}
			</div>
			<Footer />
		</>
	);
}
