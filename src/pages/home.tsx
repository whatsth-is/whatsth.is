import { Typography, Box, Link } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { HomeMenu } from "./segments/menu";

export default function Home() {
	const navigate = useNavigate();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Typography variant="h3" component="h1" my={2}>What's This? Toolbox</Typography>
			<Typography my={2}>
				Simple technology toolbox. For more information,&nbsp;
				<Link sx={{ cursor: 'pointer', textDecoration: 'none' }} onClick={() => navigate('/help')}>see the help page</Link>.
			</Typography>

			<HomeMenu />
		</Box>
	)
}
