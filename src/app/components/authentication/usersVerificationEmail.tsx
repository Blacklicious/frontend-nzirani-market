import axios from "axios";
import React, { useState } from "react";

const UsersVerificationEmail: React.FC = () => {
  const [code, setCode] = useState("");

  const handleVerificationSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    const url = "http://localhost:8000/api/v1/verify-email/"; // Adjust to your actual verification endpoint

    try {
      // Use Axios to send a POST request
      const response = await axios.post(url, { code });

      // Log the response from the server
      console.log("Verification response:", response.data);

      // You can handle further actions here based on the response

			window.location.reload(); // Or navigate to the user's dashboard
      // For example, show a success message, redirect the user, etc.

    } catch (error: any) {
      // Log error or display an error message
      // Axios wraps the response's error as `error.response`
      console.error("Verification failed:", error.response ? error.response.data : error);
    }
  };
  return (
    <div className="text-black w-[100%]">
      <div className="bg-gray-200 w-[100%] mt-2 ">
        <form>
          <div className="md:flex justify-around">
            <input
              type="text"  placeholder="Enter your verification code from your email"
              className="w-[100%] md:w-2/5 h-[34px] mb-[7px] px-2 rounded"
            />
            </div>
            <button className="bg-blue-200 hover:bg-blue-400 w-[100%] h-[40px] rounded" type="submit">
              Verify
            </button>
        </form>
      </div>
    </div>
  );
}
export default UsersVerificationEmail;
