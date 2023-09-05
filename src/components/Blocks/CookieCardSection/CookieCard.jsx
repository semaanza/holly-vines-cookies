import {
	Card,
	CardActionArea,
	CardMedia,
	Box,
	Typography,
} from "@mui/material";
import { useState } from "react";
import CookieModal from "./CookieModal";

export default function CookieCard({ cardTitle, cookieImage, description }) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Card
			sx={{
				height: "80vh",
				width: "300px",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-evenly",
			}}
		>
			<CardActionArea onClick={handleOpen}>
				<CookieModal
					title={cardTitle}
					description={description}
					open={open}
					img={cookieImage}
					close={handleClose}
				/>
				<Box>
					<Typography variant='h4' sx={{ height: "10vh" }}>
						{cardTitle}
					</Typography>
					<CardMedia
						image={cookieImage}
						title={cardTitle}
						sx={{ height: "40vh" }}
					/>
					{/* <Typography variant="body1" sx={{ height: "30vh" }}>
            {description}
          </Typography> */}
				</Box>
			</CardActionArea>
		</Card>
	);
}
