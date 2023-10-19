import { Box, Modal, Typography } from "@mui/material";

export default function CookieModal({ description, title, img, open, close }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", sm: "800px" },
    height: { xs: "90%", md: "75%" },
    bgcolor: "#F5F5DC",
    border: "2px solid #B2AC88",
    borderRadius: "50px",
    boxShadow: 24,
    p: 4,
    alignItems: "center",
    display: "flex",
  };
  return (
    <Modal open={open} onClose={close}>
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box sx={{ height: "10%" }}>
            <Typography variant="h4" pb="20px">
              {title}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: { xs: "space-evenly", md: "space-between" },
              height: "90%",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                height: { xs: "50%", md: "80%" },
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center" },
              }}
            >
              <Box
                component="img"
                src={img}
                //landscape photos would be good for modal
                sx={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                  marginBottom: "20px",
                }}
              />
            </Box>
            <Box
              sx={{
                width: { xs: "90%", md: "45%" },
                height: { xs: "50%", md: "80%" },
                display: "flex",
                flexDirection: { xs: "column" },
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Typography varaint="body1">{description}</Typography>
              <Box>
                <Typography variant="h6">Ingrediants</Typography>
                <Typography varaint="body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus totam reiciendis cum ad accusantium commodi sed.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
