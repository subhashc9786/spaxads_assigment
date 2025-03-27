// import { useQuery } from "react-query";
// import { fetchBlogs } from "../api/blogService";

// import { Container, Typography, Grid2 } from "@mui/material";
// import BlogCard from "../Components/BlogCard";

// const Home = () => {
//     const { data: blogs, isLoading, error } = useQuery("blogs", fetchBlogs);

//     if (isLoading) return <Typography>Loading...</Typography>;
//     if (error) return <Typography>Error fetching blogs</Typography>;

//     return (
//         <Container>
//             <Typography variant="h4" sx={{ my: 3 }}>
//                 Latest Blogs
//             </Typography>
//             <Grid2 container spacing={3}>
//                 {blogs.map((blog) => (
//                     <Grid2 item xs={12} sm={6} md={4} key={blog.id}>
//                         <BlogCard blog={blog} />
//                     </Grid2>
//                 ))}
//             </Grid2>
//         </Container>
//     );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import { TextField, Grid2, Card, CardContent, CardMedia, Typography, Box, Chip, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { fetchBlogs } from "../api/blogService";

const categories = ["All", "Technology", "Health", "Food"];

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const navigate = useNavigate();



    useEffect(() => {
        const getBlogs = async () => {
            const data = await fetchBlogs();
            setBlogs(data);
            setFilteredBlogs(data);
        };
        getBlogs();
    }, []);

    useEffect(() => {
        let filtered = blogs;

        if (selectedCategory !== "All") {
            filtered = filtered.filter((blog) => blog.category === selectedCategory);
        }

        if (search.trim()) {
            filtered = filtered.filter((blog) =>
                blog.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        setFilteredBlogs(filtered);
    }, [search, selectedCategory, blogs]);



    return (
        <div className="p-6 max-w-6xl mx-auto">
            <TextField
                fullWidth
                variant="outlined"
                placeholder="Search blogs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-4"
                sx={{ mb: 3 }}
            />

            {/* Category Filters */}
            <div className="flex gap-2 mb-4" style={{ marginBottom: "20px" }}>
                {categories.map((cat) => (
                    <Chip
                        key={cat}
                        label={cat}
                        clickable
                        color={selectedCategory === cat ? "primary" : "default"}
                        onClick={() => setSelectedCategory(cat)}
                    />
                ))}
            </div>

            {/* Blog Grid2 */}
            <Grid2 container spacing={3} justifyContent="center" >
                {filteredBlogs.map((blog) => (
                    <Grid2 key={blog.id} display="flex">
                        <Card className="cursor-pointer" onClick={() => navigate(`/blog/${blog.id}`)} sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }} >
                            <CardMedia component="img" width="300" height="200" image={blog.image} alt={blog.title} />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" fontWeight="bold">{blog.title}</Typography>
                                <Typography variant="body2" color="textSecondary">{blog.author} • {blog.date}</Typography>
                                <Typography variant="body2">{blog.content.slice(0, 80)}...</Typography>
                            </CardContent>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>

            {filteredBlogs.length === 0 && (
                <Typography variant="h6" className="text-center mt-4">No blogs found.</Typography>
            )}
        </div>
    );
};

export default Home;
