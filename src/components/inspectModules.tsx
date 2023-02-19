import {
	faAws, faBootstrap, faCloudflare, faDiscourse, faDrupal, faGoogle, faJoomla, faMagento, faPhp,
	faReact, faShopify, faSquarespace, faVimeo, faVuejs, faWikipediaW, faWordpress
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { IInspectionDetails } from "../interfaces";

interface Props {
	details?: IInspectionDetails;
}

export function DisplayCMS({ details }: Props) {
	if (details === undefined || details === null) {
		return (
			<Card>
				<CardContent>
					<Typography variant="h2" component="div" sx={{ mb: 1.5, fontWeight: 'bold' }}>
						No CMS Detected :(
					</Typography>
					<Typography variant="body2">
						The specified website did not match any of our criteria. In most cases, this is because it has
						no identifable contents on the page.
					</Typography>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					based on {details.match_on.length} of {details.match_available} matches...
				</Typography>
				<Typography variant="h2" component="div" sx={{ mb: 1.5, fontWeight: 'bold' }}>
					<ServiceIcon name={details.name} /> {details.name}
				</Typography>
				<Typography variant="body2">
					{details.description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button href={details.url} target="_blank" rel="noopener">
					Learn about {details.name}
				</Button>
			</CardActions>
		</Card>
	);
}

export function DisplaySecondary({ details }: Props) {
	if (details === undefined || details === null) {
		return (<></>);
	}

	return (
		<Card>
			<CardContent>
				<Typography variant="h3" component="div" sx={{ mb: 1.5 }}>
					<ServiceIcon name={details.name} /> {details.name}
				</Typography>
				<Typography sx={{ fontSize: 14, mb: 1.5 }} color="text.secondary">
					{details.match_on.length} out of {details.match_available} matches
				</Typography>
				<Typography variant="body2">
					{details.description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button href={details.url} target="_blank" rel="noopener">
					Learn more
				</Button>
			</CardActions>
		</Card>
	);
}

interface ServiceProps {
	name: string;
}

export function ServiceIcon({ name }: ServiceProps) {
	switch (name.toLowerCase()) {
		case 'wordpress':
			return (<FontAwesomeIcon icon={faWordpress} />);
		case 'drupal':
			return (<FontAwesomeIcon icon={faDrupal} />);
		case 'joomla':
			return (<FontAwesomeIcon icon={faJoomla} />);
		case 'phpbb':
			return (<FontAwesomeIcon icon={faPhp} />);
		case 'discourse':
			return (<FontAwesomeIcon icon={faDiscourse} />);
		case 'magento':
			return (<FontAwesomeIcon icon={faMagento} />);
		case 'shopify':
			return (<FontAwesomeIcon icon={faShopify} />);
		case 'mediawiki':
			return (<FontAwesomeIcon icon={faWikipediaW} />);
		case 'squarespace':
			return (<FontAwesomeIcon icon={faSquarespace} />);
		case 'google tag manager':
		case 'google analytics':
			return (<FontAwesomeIcon icon={faGoogle} />);
		case 'react':
			return (<FontAwesomeIcon icon={faReact} />);
		case 'vue.js':
			return (<FontAwesomeIcon icon={faVuejs} />);
		case 'bootstrap':
			return (<FontAwesomeIcon icon={faBootstrap} />);
		case 'vimeo':
			return (<FontAwesomeIcon icon={faVimeo} />);
		case 'cloudflare':
			return (<FontAwesomeIcon icon={faCloudflare} />);
		case 'aws-cloudfront':
			return (<FontAwesomeIcon icon={faAws} />);
		default:
			return (<></>);
	}
}
