import { FONT_SIZES } from '../../constants/Fonts';
import {
	StyledBoxPlanet,
	StyledChevron,
	StyledPlanetName
} from './buttonsNav.styles';

const ButtonsNav = ({
	name,
	$color,
	$transparentWhite,
	setMenu,
	toggleMenu
}) => {
	return (
		<StyledBoxPlanet $transparentWhite={$transparentWhite}>
			<StyledPlanetName
				to={`/${name}`}
				$color={$color}
				$fontWeight={FONT_SIZES.bold}
				onClick={() => toggleMenu(setMenu)}
			>
				{name.toUpperCase()}
			</StyledPlanetName>
			<StyledChevron src='assets/images/icon-chevron.svg'></StyledChevron>
		</StyledBoxPlanet>
	);
};

export default ButtonsNav;
