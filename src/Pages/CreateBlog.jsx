// import { useState } from "react";
// import { TextField, Button, Container, Typography } from "@mui/material";
// import { createBlog } from "../api/blogService";
// import { useNavigate } from "react-router-dom";

// const CreateBlog = () => {
//     const [blog, setBlog] = useState({ title: "", content: "", author: "", image: "" });
//     const navigate = useNavigate();

//     const handleChange = (e) => setBlog({ ...blog, [e.target.name]: e.target.value });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await createBlog(blog);
//         navigate("/");
//     };

//     return (
//         <Container>
//             <Typography variant="h4" sx={{ my: 3 }}>
//                 Create Blog Post
//             </Typography>
//             <form onSubmit={handleSubmit}>
//                 <TextField label="Title" name="title" fullWidth margin="normal" onChange={handleChange} />
//                 <TextField label="Content" name="content" fullWidth multiline rows={4} margin="normal" onChange={handleChange} />
//                 <TextField label="Author" name="author" fullWidth margin="normal" onChange={handleChange} />
//                 <TextField label="Image URL" name="image" fullWidth margin="normal" onChange={handleChange} />
//                 <Button type="submit" variant="contained" sx={{ mt: 2 }}>
//                     Submit
//                 </Button>
//             </form>
//         </Container>
//     );
// };

// export default CreateBlog;


import { useEffect, useState } from "react";
import { TextField, Button, Container, Typography, Stack, Modal, Box, MenuItem } from "@mui/material";
import { createBlog, fetchBlogById, updateBlog } from "../api/blogService";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import toast from "react-hot-toast";

const categories = ["Technology", "Health", "Food", "Science"];

const CreateBlog = ({ open, setOpen, blogDetails }) => {
    const navigate = useNavigate();

    const [blog, setBlog] = useState({
        title: "",
        content: "",
        author: "",
        category: "",
        image: "",
    });
    // console.log("blogDetails", blog);


    useEffect(() => {
        if (blogDetails) {

            setBlog(blogDetails);
        }
    }, [blogDetails])

    const handleChange = (e) => {
        setBlog({ ...blog, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!blogDetails) {
            await createBlog({ ...blog, date: new Date().toISOString().split("T")[0] });
            setOpen(false);
            navigate("/");
            toast.success('Blog  Successfully Added')
        }
        else {
            await updateBlog({ ...blog, date: new Date().toISOString().split("T")[0] });
            setOpen(false);
            navigate(`/`)
            toast.success('Blog  Successfully Updated')
        }
    };

    return (

        <Modal open={open} onClose={() => setOpen(false)}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: "90%", sm: "80%", md: "60%", lg: "40%" }, // Responsive width
                    maxWidth: "500px", // Prevents modal from getting too wide
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 3,
                    borderRadius: 2,
                }}
            >
                <Typography variant="h5" mb={2} textAlign="center">
                    Create Blog Post
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField label="Title" value={blog.title} name="title" fullWidth margin="normal" required onChange={handleChange} />
                    <TextField label="Content" value={blog.content} name="content" fullWidth multiline rows={4} margin="normal" required onChange={handleChange} />
                    <TextField label="Author" name="author" value={blog.author} fullWidth margin="normal" required onChange={handleChange} />
                    <TextField select label="Category" name="category" value={blog.category} fullWidth margin="normal" required onChange={handleChange}>
                        {categories.map((cat) => (
                            <MenuItem key={cat} value={cat}>
                                {cat}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField label="Image URL" name="image" value={blog.image} fullWidth margin="normal" required onChange={handleChange} />

                    {/* Button Layout with Spacing */}
                    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                        <Button type="submit" variant="contained">
                            Submit
                        </Button>
                        <Button variant="outlined" color="error" onClick={() => setOpen(false)}>
                            Cancel
                        </Button>
                    </Stack>
                </form>
            </Box>
        </Modal>

    );
};

export default CreateBlog;
