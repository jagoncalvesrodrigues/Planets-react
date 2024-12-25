import { useState } from 'react';
import ButtonsInfo from '../../components/ButtonsInfo/ButtonsInfo';
import ButtonsMobile from '../../components/ButtonsMobile/ButtonsMobile';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import WikiInfo from '../../components/WikiInfo/WikiInfo';
import {
	StyedImgPlanet,
	StyledBoxButtons,
	StyledBoxPlanet,
	StyledBoxPlanetImage,
	StyledFlexDesktop,
	StyledImgGeology
} from './planet.styles';

const Planet = ({ planet }) => {
	const [buttonSelected, setButtonSelected] = useState('overview');
	const [display, setDisplay] = useState('none');
	const [activeButton, setActiveButton] = useState('');

	return (
		<>
			<ButtonsMobile setButtonSelected={setButtonSelected} />
			<StyledBoxPlanet>
				<StyledFlexDesktop>
					<StyledBoxPlanetImage>
						<StyedImgPlanet
							src={planet[buttonSelected].img}
							alt={planet.name}
							$size={planet.widthImg.mobile}
							$tabletSize={planet.widthImg.tablet}
							$desktopSize={planet.widthImg.desktop}
						/>
						<StyledImgGeology
							$display={display}
							src={planet[buttonSelected].geology}
						/>
					</StyledBoxPlanetImage>
					<StyledBoxButtons>
						<WikiInfo
							name={planet.name}
							paragraph={planet[buttonSelected].content}
						/>
						<ButtonsInfo
							setButtonSelected={setButtonSelected}
							setDisplay={setDisplay}
							activeButton={activeButton}
							color={planet.color}
						/>
					</StyledBoxButtons>
				</StyledFlexDesktop>
				<PlanetInfo
					rotation={planet.rotation}
					revolution={planet.revolution}
					radius={planet.radius}
					temperature={planet.temperature}
				/>
			</StyledBoxPlanet>
		</>
	);
};

export default Planet;
