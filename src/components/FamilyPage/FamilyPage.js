
import "./style.css";
import NavBar from "../Navbar/NavBar.js";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import * as contentful from "contentful";


export default function FamilyPage() {
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
			{/* <div className='wedding-container'>
			{images && images.map((item) => {
			const url = "http:" + item.fields.file.url;
			return(<img className="wedding-images" src={url} alt="dw"></img>)
				
			})}
			</div> */}
			<h2>add family images here...</h2>
			<Footer />
		</>
	);
}
