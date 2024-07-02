import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import UsersRegistration from './usersRegistration';
import UsersLogin from './usersLogin';
import UsersVerificationEmail from './usersVerificationEmail';
import axiosInstance from '../../../utils/axiosInstance';

const AuthenticationPage: React.FC = () => {
    
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const [isEmailVerificationOpen, setIsEmailVerificationOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
	
	// Function to be called on Email Verification
	const handleEmailVerification = () => {
    setIsRegistrationOpen(false);
    setIsLoginOpen(false);
    setIsEmailVerificationOpen(true);
  };

	const handleLogout = async() => {
		const token = JSON.parse(sessionStorage.getItem('authTokens') || '{}');
		if (token) {
			const res = await axiosInstance.post("/logout/", {refresh_token: token.refresh });
			if (res.status === 200) {
				sessionStorage.removeItem('authTokens');
				sessionStorage.removeItem('user');
				setIsAuthenticated(false);
			}
		}
	}

	return (
		<div className='text-black w-[98%] my-[5px] rounded-lg p-2 bg-gray-200 shadow-lg'>
			{isAuthenticated ? (
				<div>
					<Link href="/dashboards/products/farms/">
						<button className='bg-white hover:bg-gray-300 focus:bg-gray-300 w-[100%] h-[40px] rounded-md mb-1'
							 >
							Dashboard	
						</button>
					</Link>
					<button className='bg-white hover:bg-gray-300 focus:bg-gray-300 w-[100%] h-[40px] rounded-md mb-1'>
						Parametre	
					</button>
					<button className='bg-white hover:bg-gray-300 focus:bg-gray-300 w-[100%] h-[40px] rounded-md'
						onClick={() => {
							handleLogout()
							sessionStorage.removeItem('authTokens');
							window.location.reload();
						}}
					>
						Déconnexion
					</button>
				</div>
			) : (
				<>
					<div className='flex justify-between font-bold'>
						<button className='bg-white hover:bg-gray-300 focus:bg-gray-300 w-[100%] h-[40px] rounded-l-md border-r-[1px]'
							onClick={() =>{ setIsRegistrationOpen(false); setIsLoginOpen(true);}}
						>
							Connectez vous 
						</button>
						<button className='bg-white hover:bg-gray-300 focus:bg-gray-300 w-[100%] h-[40px] rounded-r-md border-l-[1px]'
							onClick={() => { setIsLoginOpen(false); setIsRegistrationOpen(true);}}
						>
							Inscrivez vous 
						</button>
					</div>
					<div>
						{isRegistrationOpen && <UsersRegistration onRegistrationSuccess={handleEmailVerification} />}
						{isLoginOpen && <UsersLogin  onEmailVerification={handleEmailVerification} />}
						{isEmailVerificationOpen && <UsersVerificationEmail />}
					</div>
				</>	
			)}
			
			
		</div>
	);
};

export default AuthenticationPage;