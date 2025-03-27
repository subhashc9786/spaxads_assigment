import { Typography, Box } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ textAlign: "center", py: 2, bgcolor: "#f5f5f5" }}>
            <Typography variant="body2">© {new Date().getFullYear()} Blog App</Typography>
        </Box>
    );
};

export default Footer;
