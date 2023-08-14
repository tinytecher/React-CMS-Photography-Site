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
						I'm Vivienne, your friendly and affordable
						photographer. From businesses to professional
						headshots, families to couples cherishing
						precious moments, I'm here to capture it all.
						Whether it's in a cozy studio or the perfect
						outdoor spot, I specialize in bringing out the
						emotion in every shot. Photography is an art
						that thrives on capturing real feelings. My
						passion lies in turning those emotions into
						captivating images that truly resonate. Let's
						make your photography experience enjoyable and
						memorable – portraiture is where I truly shine.
						With a background in commercial photography from
						Dublin and years of experience in London, I've
						honed my skills to perfection. I've mastered
						post-production techniques through courses in
						Photoshop and Lightroom, ensuring your photos
						are picture-perfect. Feel free to reach out and
						let's create something incredible together.
						Vivienne Forte Photographer 📸
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
}
