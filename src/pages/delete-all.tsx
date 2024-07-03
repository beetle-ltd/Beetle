import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BASE_URL } from "../api-constant";
import Spinner from "../components/spinner";
import { useToast } from "../use-toast";

const DeleteAll = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [queryParams] = useSearchParams(window.location.search);
  const { showToast } = useToast();

  const handleDelete = async () => {
    const code = queryParams.get("code");
    setIsDeleting(true);
    try {
      const response = await fetch(
        `${BASE_URL}/api/v1/accounts/business/external/verify?code=${code}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );

      const data = await response.json();

      if (response.ok) {
        setIsDeleted(true);
      } else {
        showToast(
          `Error: ${data.errorMessage || "An unknown error occurred"}`,
          "error",
          3000,
          "top-right"
        );
      }
      setIsDeleting(false);
    } catch (error) {
      setIsDeleting(true);
      console.log(error);
    }
  };

  if (isDeleted) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold mb-4">Account Deleted</h1>
        <p className="mb-4">
          Your account has been successfully deleted. We're sorry to see you go.
        </p>
        <a href="/" className="text-blue-500 hover:underline">
          Return to homepage
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-[80dvh]">
      <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-xl ">
        <h1 className="text-2xl font-bold mb-4">Delete Account Confirmation</h1>
        <p className="mb-4">
          Are you sure you want to delete your account? This action cannot be
          undone.
        </p>
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 disabled:bg-red-300"
        >
          {isDeleting ? <Spinner /> : "Confirm Deletion"}
        </button>
      </div>
    </div>
  );
};

export default DeleteAll;
