import {
	StyledBox,
	StyledBoxesBox,
	StyledNumbers,
	StyledText
} from './PlanetInfo.styles';

const PlanetInfo = ({ rotation, revolution, temperature, radius }) => {
	return (
		<StyledBoxesBox>
			<StyledBox>
				<StyledText>ROTACION TIME</StyledText>
				<StyledNumbers>{rotation}</StyledNumbers>
			</StyledBox>
			<StyledBox>
				<StyledText>REVOLUTION TIME</StyledText>
				<StyledNumbers>{revolution}</StyledNumbers>
			</StyledBox>
			<StyledBox>
				<StyledText>RADIUS</StyledText>
				<StyledNumbers>{radius}</StyledNumbers>
			</StyledBox>
			<StyledBox>
				<StyledText>AVERAGE TEMP.</StyledText>
				<StyledNumbers>{temperature}</StyledNumbers>
			</StyledBox>
		</StyledBoxesBox>
	);
};

export default PlanetInfo;
