import { useNavigate } from "react-router-dom";

const CodeSos = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-20 text-center flex flex-col items-center min-h-[70dvh]">
      <h1 className="text-2xl py-10 ">
        Do you want to delete all your data on beelte
      </h1>
      <div className="flex items-center space-x-10">
        <button className="bg-red-500 py-2 rounded-md w-[200px] text-white">
          Yes
        </button>
        <button
          onClick={() => navigate("/")}
          className="border border-gray-800 py-2 px-10 rounded-md w-[200px] bg-transparent"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CodeSos;
