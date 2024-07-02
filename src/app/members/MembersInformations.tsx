import React, { useEffect, useState } from 'react'
// Simulate a user model object
const dummyUser = {
    UserID: '12345',
    Email: 'janedoe@example.com',
    Member: {
      Username: 'JaneDoe',
    	FullName: 'Jane Doe',
    	SignUpDate: '2024-03-25',
			BirthDate: '1990-01-01',
    	Role: 'individual', // could be 'individual', 'business_owner', 'store_manager', 'store_superviser', 'strore_employee', 'admin', etc.
    	ProfilePicture: 'https://example.com/path/to/profile/picture.jpg',
    	ContactInfo: {
      	phone: '+1234567890', email: 'test@test.com',
      	website: 'https://janedoe.com', youtube: 'https://youtube.com/janedoe',
      	whatsapp: '1234 Street, City, Country', facebook: 'https://facebook.com/janedoe',
      	twitter: 'https://twitter.com/janedoe', instagram: 'https://instagram.com/janedoe',
      	linkedin: 'https://linkedin.com/janedoe', twicht: 'https://twicht.com/janedoe',
				telegram: 'https://telegram.com/janedoe', tiktok: 'https://tiktok.com/janedoe',
				pinterest: 'https://pinterest.com/janedoe', snapchat: 'https://snapchat.com/janedoe',
				wechat: 'https://wechat.com/janedoe', viber: 'https://viber.com/janedoe',
				signal: 'https://signal.com/janedoe', skype: 'https://skype.com/janedoe',
				steam: 'https://steam.com/janedoe', discord: 'https://discord.com/janedoe',
				playstation: 'https://playstation.com/janedoe', xbox: 'https://xbox.com/janedoe',
				nintendo: 'https://nintendo.com/janedoe', line : 'https://line.com/janedoe',
				kakao: 'https://kakao.com/janedoe', qq: 'https://qq.com/janedoe',
    	},
    	ContactAddress: [
				{id:'1', title:'Home', apartment: '405', door: '20', street: ' 860', neighborhood: 'Faladie Sema', commune: 'Commune 5', city: 'Bamako', country: 'Mali', zipCode: '12345', gps: '12.345678, -9.876543, 8m',description: 'This is my home address'},
				{id:'2', title:'Work', apartment: '805', door: '890', street: ' 640', neighborhood: 'Faladie Sema', commune: 'Commune 4', city: 'Bamako', country: 'Mali', zipCode: '12345', gps: '12.345678, -9.876543, 8m',description: 'This is my work address'},
			],
			Badges:[
				{id: 1, name: 'Badge 1', description: 'This is badge 1', animation: 'https://example.com/path/to/badge1.jpg',},
				{id: 2, name: 'Badge 2', description: 'This is badge 2', animation: 'https://example.com/path/to/badge2.jpg',},
			],
			Wallet: [
				{ card:'orange-money-mali', account:'74563495', credit: 50000, currency: 'XOF',},
				{ card:'orange-money-cote_ivoire', account:'74563495', credit: 50000, currency: 'XOF',},
				{ card:'wave-money-mali', account:'74563495', credit: 50000, currency: 'XOF',},
				{ card:'visa', account:'*******3495', credit: 50000, currency: 'XOF',},	
				{ card:'mastercard', account:'*******3495', credit: 50000, currency: 'XOF',},
			],
		},	
};

const MembersProfile: React.FC = () => {
     // Add your logic here
     const [member, setMember] = useState(dummyUser.Member); // Assuming user data would be fetched

     // Simulate fetching user data on component mount
     useEffect(() => {
         // Here you would fetch user data from an API
         // For this example, we're using dummy data
         setMember(dummyUser.Member);
     }, []);
 
    return (
        <div>
            {/* Add your content here */}
             Profile
            <div className='p-3 bg-white'>
                <img className='bg-red-200' src={member?.ProfilePicture} alt="Profile" style={{ width: 100, height: 100, borderRadius: '15px' }} />
                <h2>{member?.FullName}</h2>
                <p>member nickname: {member?.Username}</p>
                <p>Email: {member?.ContactInfo.email}</p>
                <p>Role: {member?.Role}</p>
                <p>Bagdes</p>
                <p>Phone: {member?.ContactInfo?.phone}</p>
                <p>Address: [ {member?.ContactAddress[0]?.title} ] {member?.ContactAddress[0]?.gps}</p>
                {/* Further details and interactions based on the member's role could be added here */}
            </div>
        </div>
    )
}


export default MembersProfile;