import { useEffect, useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import "./App.css";
import HomePage from "../HomePage/HomePage";
import AboutPage from "../AboutPage/AboutPage";
import MaternityPage from "../MaternityPage/MaternityPage";
import FamilyPage from "../FamilyPage/FamilyPage";
import WeddingPage from "../WeddingPage/WeddingPage";
import HomePageTwo from "../HomePageTwo/HomePageTwo.js"

import {
	ContentfulClient,
	ContentfulProvider,
} from "react-contentful";

const contentfulClient = new ContentfulClient({
	accessToken: "d7lRCfp0zDlmeAiUsFO94ZxylnEzeVke0dASWFNMWHQ",
	space: "zn0gciemmdui",
});

function App() {

let [myData, setMyData] = useState([]);

async function getMyEntries() {
	const res = await contentfulClient.getMyEntries({
		content_type: "forteImages",
	});
	setMyData(res.items.map((array) => array.fields));
}

useEffect(() => {
	getMyEntries();
}, []);

console.log(myData)

	return (
		<ContentfulProvider client={contentfulClient}>
			<Router className='App'>
				<Routes>
					<Route path='/' element={<HomePage />}></Route>
					<Route path='/about' element={<AboutPage />}></Route>

					<Route path='/homepagetwo' element={<HomePageTwo />}></Route>
					<Route
						path='/maternity'
						element={<MaternityPage />}
					></Route>
					<Route
						path='/wedding'
						element={<WeddingPage />}
					></Route>
					<Route
						path='/family'
						element={<FamilyPage />}
					></Route>
				</Routes>
			</Router>
		</ContentfulProvider>
	);
}

export default App;
