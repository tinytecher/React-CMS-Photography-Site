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

	useEffect(() => {
		async function getImages() {
			try {
				const entries = await client.getEntries({
					content_type: "aboutPage",
					select: "fields",
				});

				let assetData = entries.includes.Asset;

				setImages(assetData);
			} catch (error) {
				console.log(`Error fetching authors ${error}`);
			}
		}

		getImages();
	}, [client]);

	return (
		<>
			<NavBar />
			<div className='about-container'>
				{images &&
					images.map((item) => {
						const url = "http:" + item.fields.file.url;
						return (
							<img
								className='about-images'
								src={url}
								alt='dw'
							></img>
						);
					})}
				<div className='about-text'>
					<h3 className="about-title">Hey There!</h3>
					<p>
					I'm Vivienne. From businesses to cherished moments, I capture it all. Whether indoors or outdoors, I specialize in evoking emotions through my lens. Photography is my art, portraying genuine feelings in captivating images. Let's create an enjoyable and memorable photography experience together. With a background in commercial photography and honed skills, I ensure your photos are perfect. Reach out and let's make something incredible! Vivienne Forte, Photographer 📸






					</p>
				</div>
			</div>
			<Footer />
		</>
	);
}
