import { Typography, Box, Link, Alert, AlertTitle } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Filesharing = () => {
	const navigate = useNavigate();
	const siteTitle = "File Sharing";

	useEffect(() => { document.title = `${siteTitle} - What's This?` });

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Typography variant="h1" my={2}>{siteTitle}</Typography>
			<Typography my={2}>
				Filesharing from peer-to-peer, without uploading to a server.
			</Typography>
			<Box my={2}>
				<Alert severity="info">
					<AlertTitle>Beta</AlertTitle>
					This is a <strong>beta</strong> service. Please use the feedback forms to let us know what is missing!
				</Alert>
			</Box>
		</Box>
	)
}

export default Filesharing;
