import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
    const navigate = useNavigate();
    console.log(blog.image);

    const handleClick = (id) => {
        navigate(`/blog/${id}`)
        // console.log(id);



    }
    return (
        <Card sx={{ maxWidth: 345 }} onClick={() => handleClick(blog.id)}>
            <CardMedia component="img" to={`/blog/${blog.id}`} width="100" height="100" image={blog.image} alt={blog.title} />
            <CardContent>

                <Typography variant="h6">{blog.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                    {blog.content.substring(0, 100)}
                </Typography>

            </CardContent>
        </Card>
    );
};

export default BlogCard;
