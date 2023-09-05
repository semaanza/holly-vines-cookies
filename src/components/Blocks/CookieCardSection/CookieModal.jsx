import { Box, Modal, Typography } from "@mui/material";

export default function CookieModal({ description, title, img, open, close }) {
	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "400px",
		height: "auto",
		bgcolor: "#F5F5DC",
		border: "2px solid #B2AC88",
		borderRadius: "50px",
		boxShadow: 24,
		p: 4,
	};
	return (
		<Modal open={open} onClose={close}>
			<Box sx={style}>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
					}}
				>
					<Box>
						<Typography variant='h4'>{title}</Typography>
					</Box>
					<Box
						component='img'
						src={img}
						//landscape photos would be good for modal
						sx={{ height: "auto", width: "200px", objectFit: "cover" }}
					/>
					<Box>
						<Typography>{description}</Typography>
					</Box>
				</Box>
				<Box>
					<Typography>Side info, Possibly share link ETC</Typography>
				</Box>
			</Box>
		</Modal>
	);
}
