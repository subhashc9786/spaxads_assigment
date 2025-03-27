import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { deleteBlog, fetchBlogById } from "../api/blogService";
import { Container, Typography, IconButton, Box } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateBlog from "./CreateBlog";
import ConfirmDelete from "../Components/ConfirmDelete";
import toast from "react-hot-toast";
const BlogDetails = () => {
    const { id } = useParams();
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const { data: blog, isLoading, error } = useQuery(["blog", id], () => fetchBlogById(id));
    const navigate = useNavigate();
    if (isLoading) return <Typography>Loading...</Typography>;
    if (error) return <Typography>Error loading blog</Typography>;

    const shareUrl = window.location.href;


    console.log("compnents details relote", blog);
    const handleDelete = async () => {
        await deleteBlog(selectedBlog.id);
        // setBlogs(blogs.filter((b) => b.id !== selectedBlog.id));
        setDeleteOpen(false);
        navigate('/')
        toast.success('Blog Successfully Deleted')
    };

    return (
        <Container>
            <Box sx={{ position: "absolute", top: 70, right: 15, display: "flex", gap: 1 }}>
                <IconButton size="small" color="primary" onClick={() => setOpen(true)}>
                    <EditIcon />
                </IconButton>
                <IconButton size="small" color="error" onClick={() => { setSelectedBlog(blog); setDeleteOpen(true); }}>
                    <DeleteIcon />
                </IconButton>
            </Box>
            <Typography variant="h4">{blog.title}</Typography>
            <Typography variant="subtitle1">By {blog.author}</Typography>
            <img src={blog.image} alt={blog.title} width="100%" />
            <Typography variant="body1">{blog.content}</Typography>
            {/* Social Media Share Buttons */}
            <div className="flex gap-3 mt-4">
                <IconButton color="primary" component="a" href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank">
                    <FacebookIcon />
                </IconButton>
                <IconButton color="primary" component="a" href={`https://twitter.com/intent/tweet?url=${shareUrl}`} target="_blank">
                    <XIcon />
                </IconButton>
                <IconButton color="primary" component="a" href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank">
                    <LinkedInIcon />
                </IconButton>
            </div>
            <CreateBlog open={open} setOpen={setOpen} blogDetails={blog} />
            <ConfirmDelete open={deleteOpen} onClose={() => setDeleteOpen(false)} onConfirm={handleDelete} />
        </Container>
    );
};

export default BlogDetails;
