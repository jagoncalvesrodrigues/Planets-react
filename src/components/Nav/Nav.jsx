import { useState } from 'react';
import { COLORS } from '../../constants/colors';
import { PLANETS_INFO } from '../../constants/planets';
import ButtonsNav from '../ButtonsNav/ButtonsNav';
import { StyledBoxNav, StyledButtonsNav, StyledHamburguer } from './nav.styles';

const Nav = () => {
	const [menu, setMenu] = useState(false);
	console.log(menu);
	return (
		<StyledBoxNav>
			<StyledHamburguer
				onClick={() => toggleMenu(setMenu)}
				src='assets/images/icon-hamburger.svg'
			></StyledHamburguer>
			<StyledButtonsNav $isVisible={menu} $bgcolor={COLORS.dark}>
				{PLANETS_INFO.map(planet => (
					<ButtonsNav
						key={planet.id}
						{...planet}
						$color={planet.ciclecolor}
						name={planet.name}
						$transparentWhite={COLORS.transparentWhite}
					/>
				))}
			</StyledButtonsNav>
		</StyledBoxNav>
	);
};

const toggleMenu = setMenu => {
	setMenu(estado => !estado);
};

export default Nav;
