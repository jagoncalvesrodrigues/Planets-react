import { StyledBoxButtonsMobile, StyledButton } from './buttonsMobile.styles';

const ButtonsMobile = ({ setButtonSelected, setDisplay }) => {
	return (
		<StyledBoxButtonsMobile>
			<StyledButton
				onClick={() => {
					setButtonSelected('overview');
					setDisplay('none');
				}}
			>
				<p>OVERVIEW</p>
			</StyledButton>
			<StyledButton
				onClick={() => {
					setButtonSelected('structure');
					setDisplay('none');
				}}
			>
				<p>STRUCTURE</p>
			</StyledButton>
			<StyledButton
				onClick={() => {
					setButtonSelected('geology');
					setDisplay('block');
				}}
			>
				<p>SURFACE</p>
			</StyledButton>
		</StyledBoxButtonsMobile>
	);
};

export default ButtonsMobile;
