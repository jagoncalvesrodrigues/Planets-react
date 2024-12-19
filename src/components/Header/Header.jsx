import { COLORS } from '../../constants/colors';
import { FONT_SIZES } from '../../constants/Fonts';
import Nav from '../Nav/Nav';
import { StyledBoxHeader, StyledNavTitle } from './header.styles';

const Header = () => {
	return (
		<StyledBoxHeader $tranparentwhite={COLORS.transparentWhite}>
			<StyledNavTitle $fontw={FONT_SIZES.medium}>THE PLANETS</StyledNavTitle>
			<Nav />
		</StyledBoxHeader>
	);
};

export default Header;
