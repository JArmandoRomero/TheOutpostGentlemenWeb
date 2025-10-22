import React from 'react';
import CircleButton from '../../components/CircleButton/CircleButton';
import './TopSection.scss';

import { CommonConfig, Icons } from '../../config';
import zIndex from '@material-ui/core/styles/zIndex';

class TopSection extends React.Component {
	componentDidMount() {
		if (this.pathElement) {
			const signatureLength = this.pathElement.getTotalLength();
			this.pathElement.setAttribute('stroke-dasharray', signatureLength);
			this.pathElement.setAttribute('stroke-dashoffset', signatureLength);

			const viewBoxCoords = CommonConfig.signature?.viewBox
				.split(' ')
				.map((val) => parseInt(val));
			this.pathElement.setAttribute(
				'stroke-width',
				Math.max(...viewBoxCoords) / 100
			);
		}
	}

	render() {
		return (
			<div className='top-section'>
				<div className='intro'>
					<h1>{CommonConfig.name}</h1>
					<p>{CommonConfig.tagline}</p>
				</div>
				<div className='signature' style={{ position: 'relative', display: 'inline-block' }}>
					<img
						src='https://lh3.googleusercontent.com/pw/AP1GczNYjeGtzjpzBG3PD34-dSE_-STyXmV2xsvXHPyydoHE-iyad9QTakQeNQNenW6YB2j_Sme48wBeK-CW2_FfzjxpEge2UZmcR5zJDJp2OVHh-MBpvB1aN_718_A7GJAT_zBm-k9x9O9jmOJDCB0gTzM=w948-h903-s-no-gm?authuser=0'
						alt='signed'
						style={{ display: 'block', width: '100%', height: 'auto' }}
					/>
					<svg
						style={{
							position: 'absolute',
							bottom: '10px',
							right: '10px',
							width: '80px', // make smaller or larger here
							height: 'auto',
							zIndex: 2,
						}}
						viewBox={CommonConfig.signature?.viewBox}
					>
						<path
							ref={(pathElement) => {
								this.pathElement = pathElement;
							}}
							id='signature-path'
							stroke='var(--text-primary)'
							fill='none'
							d={CommonConfig.signature?.signaturePathD}
						/>
					</svg>
				</div>

				<div className='social'>
					{CommonConfig.social.map((socialDetails, index) => {
						return (
							<CircleButton
								key={'top-section-social-' + index}
								tooltip={socialDetails.name}
								tooltipPlacement='top'
								link={socialDetails.link}
								target='_blank'
							>
								{/* If the social platform icon is given then use that else pick from default icons */}
								{socialDetails.icon
									? socialDetails.icon
									: Icons[socialDetails.name.toLowerCase()]}
							</CircleButton>
						);
					})}
				</div>
			</div>
		);
	}
}

export default TopSection;
