/**
 * Config file for The Outpost Gentlemen website
 */

import React from 'react';
import { Icons } from './icons';

// MATERIAL ICONS
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import WbIridescentIcon from '@material-ui/icons/WbIridescent';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ComputerIcon from '@material-ui/icons/Computer';
import InfoIcon from '@material-ui/icons/Info';
import RateReviewIcon from '@material-ui/icons/RateReview';
import Description from '@material-ui/icons/Description';
import Books from '@material-ui/icons/Book';
import { Book, MenuBookSharp } from '@material-ui/icons';
import beachImg from '../assets/images/beach.png';
import guide from '../assets/images/2025Guide.png';
import logo from '../assets/images/logo.png';
// CUSTOM COMPONENTS
import CircleButton from '../components/CircleButton/CircleButton';

/** Common config for top section and footer */
const CommonConfig = {
	addFreePalestine: false,
	name: 'The Outpost Gentlemen',
	tagline: '   ',
	signature: {
		viewBox: '0 0 100 100',
		signaturePathD: '',
	},
	email: 'djworldtravels@gmail.com',
	social: [
		{
			name: 'Instagram',
			link: 'https://www.instagram.com/theoutpostgentlemen/',
			icon: Icons['instagram'],
		},
		{
			name: 'Facebook',
			link: 'https://www.facebook.com/share/1AVapSGZCq/?mibextid=wwXIfr',
		},
		{ name: 'Email', link: 'mailto:djworldtravels@gmail.com' },
		{
			name: 'Free 2025 Guide',
			link: 'https://drive.google.com/file/d/1ZPcy2XVi1H__IC1tkI0NBqlUjbCzbmtY/view?usp=drive_link',
			icon: Icons['file'],
		},
	],
};

/** Config for the projects section */
const ProjectsConfig = {
	name: 'blog',
	headerIcon: <Books />,
	extraClass: '',
	projects: [
		{
			name: '2025 Move to Mexico Miniguide',
			date: '10/24/2025',
			icon: Icons['file'],
			description:
				'We’re launching our 2025 Move to Mexico Miniguide  a simple, honest resource answering the most common questions we get about life abroad. It’s not a legal or official guide, just a starting point based on our own experience. We always encourage readers to do their own research and seek professional advice before making any big move.',
			img: guide,
			links: [],
		},

		{
			name: 'The Outpost Gentlemen',
			date: '08/02/2025',
			icon: Icons['instagram'],
			description:
				'The Outpost Gentlemen began as a space to share our story as a gay couple building a life abroad. The name blends adventure with identity  an outpost for connection and creativity, and gentlemen as a nod to living with respect, humor, and authenticity. It’s about carving out a place where love, travel, and everyday life meet with a little style and a lot of heart.',
			img: logo,
			links: [],
		},
		{
			name: 'Life in Mexico: Our Journey',
			date: '01/02/2023',
			icon: Icons['map'],
			description:
				'It all began one evening as we sat watching the sun melt into the horizon in Playa del Carmen. In that quiet, golden moment, we realized we wanted a different pace of life something slower, warmer, and more intentional. Within a few months, we sold everything we owned in Denver and took a leap of faith, moving to Mexico to embrace a new rhythm, new culture, and a fresh start together.',
			img: beachImg,
			links: [],
		},
	],
};

/** Config for sections */
const CustomSectionsConfig = [
	// BLOG / PROJECTS SECTION
	{
		name: 'Blogs',
		headerIcon: <MenuBookSharp />,
		extraClass: '',
		notInMenu: false,
		content: (
			<div>
				{ProjectsConfig.projects.map((project, index) => (
					<div key={index} style={{ marginBottom: '2rem' }}>
						<h3 style={{ fontSize: '1.4rem' }}>
							{project.icon} {project.name}
						</h3>
						<h4 style={{ fontSize: '1rem' }}>{project.date} </h4>
						<img
							src={project.img}
							alt={project.name}
							style={{
								maxWidth: '100%',
								borderRadius: '8px',
								marginBottom: '1rem',
							}}
						/>
						<p>{project.description}</p>
						<div style={{ textAlign: 'right' }}>
							{project.links.map((link, li) => (
								<a
									key={li}
									href={link.link}
									title={link.tooltip}
									style={{ marginLeft: '0.5rem' }}
								>
									{link.icon}
								</a>
							))}
						</div>
					</div>
				))}
			</div>
		),
	},
	// ABOUT SECTION
	{
		name: 'About',
		headerIcon: <InfoIcon />,
		extraClass: 'about-section section-reverse',
		content: (
			<>
				<h2>About Us</h2>
				<p>
					Welcome to The Outpost Gentlemen! We’re Jarrod and David, a gay couple
					building our life between the US and Mexico, along with our four
					adventurous dogs. We document our journey, share our experiences, and
					provide insights for expats, travelers, and anyone curious about
					living abroad.
				</p>

				<h3>Who We Are</h3>
				<p>
					David is an American citizen and Psychology Professor, and Jarrod is a
					dual citizen and Software Engineer. Together, we combine curiosity,
					creativity, and a love for exploration whether it’s understanding new
					cultures, building digital experiences, or discovering hidden gems in
					new cities.
				</p>

				<h3>Our Move</h3>
				<p>
					Our journey began in Denver, but a desire for a different pace of life
					led us to Mexico. Jarrod’s dual citizenship made the move smoother,
					while David navigated the temporary residency process. Along the way,
					we learned the challenges, joys, and practicalities of starting over
					in a new country and we’re here to share those lessons with you.
				</p>

				<h3>Our Mission</h3>
				<p>
					At The Outpost Gentlemen, we aim to inspire curiosity and adventure.
					Through our stories, adventures, and lessons from moving abroad, we
					hope others can learn from our experiences, enjoy life abroad
					vicariously, and find ideas for their own journeys. This is meant for
					inspiration and entertainment.
				</p>

				<h3>Life With Our Pack</h3>
				<p>
					Our four dogs are more than pets they’re our companions, motivators,
					and adventure buddies. They bring joy, laughter, and plenty of chaos
					to our journey, often starring in our stories.
				</p>

				<h3>Join Our Journey</h3>
				<p>
					Whether you’re an expat, a traveler, or simply curious about life in
					Mexico, The Outpost Gentlemen is your space for inspiration, tips, and
					stories from the road less traveled. Come along we promise it’ll be an
					adventure.
				</p>
			</>
		),
	},
	// REVIEWS SECTION
	// {
	//     name: 'Reviews',
	//     headerIcon: <RateReviewIcon />,
	//     content: (
	//         <>
	//             <h4 style={{ fontSize: '2em' }}>{Icons['helpoutline']} What do others say?</h4>
	//             <p>
	//                 <span style={{ fontSize: '5rem', display: 'block' }}>“</span>
	//                 Fawad did an excellent job for us on Phoenix. He worked hard, writing very good and legible code and made an invaluable contribution to the project.
	//             </p>
	//             <p>We like that he is very motivated, self-driven and is already an experienced and knowledgeable coder.</p>
	//             <p style={{ textAlign: 'right', fontSize: 'small' }}>
	//                 <i><b>Edward Moyse</b><br />Software Coordinator<br />CERN</i>
	//             </p>

	//             <p>
	//                 <span style={{ fontSize: '5rem', display: 'block' }}>“</span>
	//                 The mentors have noticed that Fawad has strong technical skills, an ability to learn quickly new technologies...
	//             </p>
	//             <p style={{ textAlign: 'right', fontSize: 'small' }}>
	//                 <i><b>Stéphane Lauriere & Ecaterina Moraru</b><br />XWiki SAS</i>
	//             </p>

	//             <p>
	//                 <span style={{ fontSize: '5rem', display: 'block' }}>“</span>
	//                 I have really appreciated your confidence to solve problems yourself and follow your own intuition even when it goes against what I was suggesting.
	//             </p>
	//             <p style={{ textAlign: 'right', fontSize: 'small' }}>
	//                 <i><b>James Knight</b><br />GeNN Team<br />Research Fellow<br />The University of Sussex</i>
	//             </p>
	//         </>
	//     )
	// }
];

export { CommonConfig, ProjectsConfig, CustomSectionsConfig, Icons };
