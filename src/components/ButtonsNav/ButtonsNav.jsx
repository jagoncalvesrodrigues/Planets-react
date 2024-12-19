import { FONT_SIZES } from '../../constants/Fonts';
import {
	StyledBoxPlanet,
	StyledChevron,
	StyledPlanetName
} from './buttonsNav.styles';

const ButtonsNav = ({ name, $color, $transparentWhite }) => {
	return (
		<StyledBoxPlanet $transparentWhite={$transparentWhite}>
			<StyledPlanetName $color={$color} $fontWeight={FONT_SIZES.bold}>
				{name.toUpperCase()}
			</StyledPlanetName>
			<StyledChevron src='assets/images/icon-chevron.svg'></StyledChevron>
		</StyledBoxPlanet>
	);
};

export default ButtonsNav;
