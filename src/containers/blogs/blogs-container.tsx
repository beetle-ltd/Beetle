import BlogCard from "../../components/blog/blog-card";

export interface BlogContent {
  image: string;
  title: string;
  description: string;
  author: string;
  date: string;
}

// Array of content objects
const blogContent: BlogContent[] = [
  {
    image: "https://placehold.co/300x200.png?text=World+View",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Doe",
    date: "14/04/2024",
  },
  {
    image: "https://placehold.co/300x200.png?text=Nature",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Jane Smith",
    date: "14/04/2024",
  },
  {
    image: "https://placehold.co/300x200.png?text=Deer",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Michael Johnson",
    date: "14/04/2024",
  },
  {
    image: "https://placehold.co/300x200.png?text=Placeholder",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Emily Davis",
    date: "14/04/2024",
  },
  {
    image: "https://placehold.co/300x200.png?text=Desert",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "David Lee",
    date: "14/04/2024",
  },
  {
    image: "https://placehold.co/300x200.png?text=Landscape",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Sarah Wilson",
    date: "14/04/2024",
  },
];

const BlogSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogContent.map((item, index) => (
        <BlogCard key={index} {...item} />
      ))}
    </div>
  );
};

export default BlogSection;
