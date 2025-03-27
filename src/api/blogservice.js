import axios from "axios";

const API_URL = "https://your-api-url.com/api/blogs"; // Replace with actual backend URL

export const blogs = [
    {
        id: 1,
        title: "The Future of AI in Everyday Life",
        content: "Artificial intelligence is transforming how we interact with technology, from smart assistants to self-driving cars...",
        author: "John Doe",
        category: "Technology",
        image: "https://picsum.photos/800/450?random=1",
        date: "2025-02-18"
    },
    {
        id: 2,
        title: "10 Best Foods for a Healthy Lifestyle",
        content: "A balanced diet is essential for maintaining good health. Here are the top 10 superfoods to include in your meals...",
        author: "Jane Smith",
        category: "Health",
        image: "https://picsum.photos/800/450?random=2",
        date: "2025-02-15"
    },
    {
        id: 3,
        title: "Exploring the Wonders of Space",
        content: "The universe is vast and full of mysteries. Scientists are constantly discovering new planets and galaxies...",
        author: "Alice Johnson",
        category: "Food",
        image: "https://picsum.photos/800/450?random=3",
        date: "2025-01-30"
    },
    {
        id: 4,
        title: "How to Stay Productive While Working from Home",
        content: "Remote work has become the new norm. Here are some tips to boost your productivity and maintain a work-life balance...",
        author: "Robert Brown",
        category: "Technology",
        image: "https://picsum.photos/800/450?random=5",
        date: "2025-02-05"
    },
    {
        id: 5,
        title: "The Rise of Electric Vehicles",
        content: "Electric cars are taking over the automobile industry, with companies investing in sustainable and efficient transportation...",
        author: "Emily White",
        category: "Technology",
        image: "https://picsum.photos/800/450?random=12",
        date: "2025-01-28"
    },
    {
        id: 6,
        title: "5 Easy Home Workouts to Stay Fit",
        content: "Not everyone has time for the gym. Here are five easy workouts you can do at home to stay fit and healthy...",
        author: "Michael Green",
        category: "Health",
        image: "https://picsum.photos/800/450?random=14",
        date: "2025-02-10"
    },
    {
        id: 7,
        title: "Top Travel Destinations for 2025",
        content: "If you love traveling, check out these must-visit destinations for 2025, from tropical beaches to bustling cities...",
        author: "Sophia Davis",
        category: "Health",
        image: "https://picsum.photos/800/450?random=14",
        date: "2025-02-12"
    },
    {
        id: 8,
        title: "Mastering Time Management",
        content: "Time is your most valuable resource. Learn how to manage it effectively to improve your personal and professional life...",
        author: "David Wilson",
        category: "Food",
        image: "https://picsum.photos/800/450?random=17",
        date: "2025-02-08"
    }
];


// export const fetchBlogs = async () => {
//     const response = await axios.get(blogs);
//     return response.data;
// };

// export const fetchBlogById = async (id) => {
//     const response = await axios.get(`${API_URL}/${id}`);
//     return response.data;
// };

// export const createBlog = async (blogData) => {
//     const response = await axios.post(API_URL, blogData);
//     return response.data;
// };

// export const updateBlog = async (id, blogData) => {
//     const response = await axios.put(`${API_URL}/${id}`, blogData);
//     return response.data;
// };

// export const deleteBlog = async (id) => {
//     await axios.delete(`${API_URL}/${id}`);
// };

// Simulating API calls
export const fetchBlogs = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(blogs), 500); // Simulating network delay
    });
};

export const fetchBlogById = async (id) => {
    return new Promise((resolve) => {
        const blog = blogs.find((b) => b.id === Number(id));
        setTimeout(() => resolve(blog), 500);
    });
};

export const createBlog = async (blogData) => {
    return new Promise((resolve) => {
        const newBlog = { id: blogs.length + 1, ...blogData };
        blogs.push(newBlog);
        setTimeout(() => resolve(newBlog), 500);
    });
};

export const updateBlog = async (updatedData) => {

    return new Promise((resolve) => {
        const index = blogs.findIndex((b) => b.id === Number(updatedData.id));
        if (index !== -1) {
            blogs[index] = { ...blogs[index], ...updatedData };
            setTimeout(() => resolve(blogs[index]), 500);
        } else {
            setTimeout(() => resolve(null), 500);
        }
    });
};

export const deleteBlog = async (id) => {
    return new Promise((resolve) => {
        const index = blogs.findIndex((b) => b.id === Number(id));
        if (index !== -1) {
            blogs.splice(index, 1);
        }
        setTimeout(() => resolve(true), 500);
    });
};