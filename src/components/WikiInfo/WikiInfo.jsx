import {
	StyledBoxWiki,
	StyledLink,
	StyledParagraph,
	StyledTitle
} from './wikiInfo.styles';

const WikiInfo = ({ name, paragraph }) => {
	return (
		<StyledBoxWiki>
			<StyledTitle>{name.toUpperCase()}</StyledTitle>
			<StyledParagraph>{paragraph}</StyledParagraph>
			<StyledLink>WIKIPEDIA</StyledLink>
		</StyledBoxWiki>
	);
};

export default WikiInfo;
