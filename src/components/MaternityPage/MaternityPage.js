import "./style.css";
import NavBar from "../Navbar/NavBar.js";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import * as contentful from "contentful";
// import mat1 from "../../images/maternity/mat1.jpg";
// import mat2 from "../../images/maternity/mat2.jpg";
// import mat3 from "../../images/maternity/mat3.jpg";
// import mat4 from "../../images/maternity/mat4.jpg";
// import mat5 from "../../images/maternity/mat5.jpg";
// import mat6 from "../../images/maternity/mat6.jpg";


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
			<div className='maternity-container'>
			{images && images.map((item) => {
			const url = "http:" + item.fields.file.url;
			return(<img className="maternity-images" src={url} alt="dw"></img>)
				
			})}
			</div>
			<Footer />

				{/* <div className='maternity-col1'>
					<img
						src={maternity}
						className='maternity1'
						alt='maternity1'
						style={{ flex: 1 }}
					/>
					<div style={{ flex: 1 }}></div>
					<div style={{ flex: 1 }}></div>
				</div>
				<div className='maternity-col2'>
					<img
						src={maternity}
						className='maternity1'
						alt='maternity1'
						style={{ flex: 1 }}
					></img>
					<div style={{ flex: 1 }}></div>
					<div style={{ flex: 1 }}></div>
				</div>
				<div className='maternity-col3'>
					<div style={{ flex: 1 }}></div>
					<div style={{ flex: 1 }}></div>
					<div style={{ flex: 1 }}></div>
				</div> */}
		</>
	);
}
