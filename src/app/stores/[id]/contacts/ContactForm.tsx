'use client';
import React, { useEffect, useState } from 'react'
import { DatePicker,Upload, message } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { InboxOutlined } from '@ant-design/icons';
import { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface';
import moment from 'moment';


type FormData = {
  group?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  birthday?: Dayjs | null; // Use Dayjs instead of moment.Moment
  telephone?: string;
  business?: string;
  job?: string;
  address?: string;
  note?: string;
  image?: string; // Add this line
};

const ContactForm = () => { 	
  const [formData, setFormData] = useState<FormData>({});
  const [contacts, setContacts] = useState<Array<FormData>>([]); // New state for contacts
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
      if (savedContacts) {
        setContacts(JSON.parse(savedContacts));
      }
    }, []);
  };

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleImageChange = (info: UploadChangeParam<UploadFile<any>>) => {
    if (info.file.status === 'done') {
      setImage(info.file.originFileObj as File);
    }
  };

  const uploadProps = {
    name: 'file',
    multiple: false,
    accept: 'image/*',
    onChange: handleImageChange,
    beforeUpload: () => false, // Prevent automatic upload
  };

  const handleDateChange = (date: Dayjs | null) => {
    setFormData({ ...formData, birthday: date });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Prepare the data for saving
    let dataToSave = { ...formData };
    if (image) {
      // Convert image to Base64 if it's present
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        dataToSave = {
          ...dataToSave,
          image: base64String.replace('data:', '').replace(/^.+,/, ''),
        };

        // Save the data with the image to local storage
        localStorage.setItem('formData', JSON.stringify(dataToSave));
      };
      reader.readAsDataURL(image);
    } else {
      // Save the data without the image to local storage
      localStorage.setItem('formData', JSON.stringify(dataToSave));
    }

    // Reset the file input after form submission
    setImage(null);
  };

	

	return (
		<div>
			<form className='flex flex-wrap w-[100%] text-black p-4 bg-gray-200 mt-3 rounded-lg' onSubmit={handleSubmit}>
				<div className='flex flex-wrap w-[100%] justify-between '>
					<div className='w-[100%] bg-black/90 mb-4 text-white px-4 py-1 text-md rounded-md'>Entrez les informations du Client</div>
          <select required
            className="w-full h-14 border-2 px-2 mb-2 rounded-md "
            name="group"
          value={formData.group || ''}
            onChange={handleInputChange}
          >
            <option  value="" disabled> Selectionnez un profil de contact.  👥 </option>
            <option value="CLIENT">CLIENT</option>
            <option value="EMPLOYÉ">EMPLOYÉ</option>
            <option value="FOURNISSEUR">FOURNISSEUR</option>
          </select>
					<input className='w-[25%] mb-2 rounded-md px-3 py-3' type="text" id="firstName" name="firstName" placeholder='Nom'   onChange={handleInputChange} />
					<input  className='w-[25%] mb-2 rounded-md px-3 py-3' type="text" id="lastName" name="lastName" placeholder='Prénom'  onChange={handleInputChange} />
					<input  className='w-[48%] mb-2 rounded-md px-3 py-3 ' type="email" id="email" name="email" placeholder='E-mail' onChange={handleInputChange} />
					<div className='w-[49%] mb-2 flex justify-between items-center rounded-md'>
            <div className='w-[49%] flex justify-between items-center rounded-md'>
              <DatePicker value={formData.birthday ? dayjs(formData.birthday) : null}
                onChange={handleDateChange}
                className='w-[100%] rounded-md py-3'
                format="YYYY-MM-DD"
                placeholder='Date de naissance'
              />
            </div>
            <input  className='w-[49%] rounded-md px-3 py-3' type="text" id="telephone" name="telephone" placeholder='Telephone'  onChange={handleInputChange} />
					</div>
          <div className='w-[50%] mb-2 py-1 flex justify-around items-center bg-gray-300/80 rounded-md'>
						<input  className='w-[48%]  rounded-md px-3 py-3' type="text" id="business" name="business" placeholder='Business' onChange={handleInputChange} />
						<input  className='w-[48%]  rounded-md px-3 py-3' type="text" id="job" name="job" placeholder='Job'  onChange={handleInputChange} />
					</div>
          <div className='w-[69%] mb-4 flex flex-col justify-between'>
            <textarea className='w-[100%] h-[48%] rounded-md px-3 py-2 mb-2' id="address" name="address" placeholder='addresse'  onChange={handleInputChange} />	
            <textarea className='w-[100%] h-[48%] rounded-md px-3 py-2' id="note" name="note" placeholder='notes'  onChange={handleInputChange} />
   	 			</div>
          {/* ... more input fields with onChange={handleInputChange} ... */}
          <Upload.Dragger {...uploadProps} className='w-[30%] rounded-md px-2 pt-2 pb-10 bg-white mb-4'>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Cliquer ou glisser le fichier ici pour le télécharger</p>
            <p className="ant-upload-hint">
            Prise en charge d'une seule d'image. Faites glisser ou cliquez pour sélectionner une image.
            </p>
          </Upload.Dragger>
          <button  className='w-[100%] rounded-md px-3 py-3 bg-blue-400 hover:bg-blue-500 hover:border-[3px] hover:border-black/50 text-md font-bold' type="submit">Enregister le Contact</button>
				</div>
				</form>
		</div>
	);
};

export default ContactForm;
