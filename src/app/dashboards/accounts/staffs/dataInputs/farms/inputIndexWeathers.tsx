'use client';
import React, { useState } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';  // Import js-cookie

const IndexWeather = () => {
  const [file, setFile] = useState(null);  // State to hold the selected file
  const [uploadStatus, setUploadStatus] = useState('');  // State to display upload status

	// Function to handle file selection
	const handleFileChange = (event) => {
		setFile(event.target.files[0]);
	};

	// Function to handle form submission
	const handleFormSubmit = async (event) => {
		event.preventDefault();
		if (!file) {
				setUploadStatus('Please select a CSV file to upload.');
				return;
		}

		const formData = new FormData();
		// Append the file
		formData.append('file', file);
		// Get CSRF token from cookies
		const csrftoken = Cookies.get('csrftoken');


		try {
				const response = await axios.post('http://127.0.0.1:8000/api/v1/upload-csv/', formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
						'X-CSRFToken': csrftoken,  // Include the CSRF token in the request header
					}
				});
				setUploadStatus('File uploaded successfully!');
				console.log('Server response:', response.data);
		} catch (error) {
				console.error('Upload error:', error);
				setUploadStatus('Error uploading file. Please try again.');
		}
};



  return (
    <div className='mt-[60px]'>
			<form onSubmit={handleFormSubmit}>
					<input type="file" accept=".csv" onChange={handleFileChange}  className='ring-2 bg-gray-200'/>
					<button className="m-4 ring-2 hover:bg-gray-400" type="submit">Upload CSV</button>
			</form>
			{uploadStatus && <p>{uploadStatus}</p>}  // Display the upload status
		</div>
  )
}

export default IndexWeather;
