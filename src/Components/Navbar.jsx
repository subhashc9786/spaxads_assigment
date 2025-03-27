import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import CreateBlog from "../Pages/CreateBlog";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (<>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                        Blog App
                    </Link>
                </Typography>
                <Button color="inherit" onClick={() => setOpen(true)}>
                    Create Blog
                </Button>
            </Toolbar>
        </AppBar>
        <CreateBlog open={open} setOpen={setOpen} />
    </>

    );
};

export default Navbar;
