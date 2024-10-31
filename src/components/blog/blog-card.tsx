import { FaRegClock } from "react-icons/fa";
import { BlogContent } from "../../containers/blogs/blogs-container";

const BlogCard = ({ image, title, description, author, date }: BlogContent) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {image ? (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400 font-bold text-4xl">
          {author.split(" ").map((part, index) => (
            <span key={index}>{part.charAt(0)}</span>
          ))}
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-gray-500 text-sm">
          <FaRegClock className="mr-2" />
          <span>{author}</span>
          <span className="mx-2">-</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
