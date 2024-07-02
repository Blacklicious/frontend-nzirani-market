import React, { useState } from 'react';
import axios from 'axios';

const UsersLogin: React.FC<{ onEmailVerification: () => void }> = ({ onEmailVerification }) => {
	const [logInData, setLogInData] = useState({
		email: '',
		password: '',
	});

	const handleLogInSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const url = 'http://localhost:8000/api/v1/login/'; // Adjust to your DRF login endpoint
		try {
			const response = await axios.post(url, logInData);

			console.log('Login successful:', response.data);
			// Save the auth tokens to localStorage or context
			sessionStorage.setItem('authTokens', JSON.stringify({
				access: response.data.access_token,
				refresh: response.data.refresh_token,
			}));

			if (response.data.status) { // Assuming 'status' indicates verification
				console.log('User is verified');
				window.location.reload(); // Or navigate to the user's dashboard
			} else {
				console.log('User is not verified');
				onEmailVerification(); // Trigger email verification flow
			}
		} catch (error) {
			console.error('Login failed:', error);
		}
	};
	return (
		<div className='text-black w-[100%]'>
			<div className='bg-gray-200 w-[100%] mt-2 '>
				<form onSubmit={handleLogInSubmit} >
					<div className='md:flex justify-around'>
						<input
							type="email" placeholder='Email (username@domain.com)' value={logInData.email}
							className='w-[100%] md:w-2/5 h-[34px] mb-[7px] px-2 rounded'
							onChange={(e) =>
								setLogInData({ ...logInData, email: e.target.value, })
							}
						/>
						<br />
						<input
							type="password" placeholder='Mot de passe' value={logInData.password}
							className='w-[100%]  md:w-2/5 h-[34px] mb-[7px] px-2 rounded'
							onChange={(e) =>
								setLogInData({ ...logInData, password: e.target.value,  })
							}
						/>
					</div>
					<button className='bg-blue-200 hover:bg-blue-400 w-[100%] h-[40px] rounded' type="submit">Connectez vous</button>
				</form>
			</div>
		</div>
	);
}
export default UsersLogin;