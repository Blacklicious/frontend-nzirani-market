import React, { useEffect, useState } from 'react';
import { TinyColor } from '@ctrl/tinycolor';
import { Button, ConfigProvider, Drawer, Form, Input, InputNumber, Select, message } from 'antd';

const { TextArea } = Input;

interface GeolocationData {
  latitude: string;
  longitude: string;
  altitude: string;
  altitudeAccuracy: string;
  accuracy: string;
}

interface FormData {
  name: string;
  category: string;
  description: string;
  location: string; // This will hold the JSON string of geolocation data
  surface: string;
  note: string;
  contact: string;
}

const InputIndexArea: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [locationData, setLocationData] = useState<GeolocationData>({
    latitude: '',
    longitude: '',
    altitude: '',
    altitudeAccuracy: '',
    accuracy: ''
  });

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const colors1 = ['#6253E1', '#04BEFE'];
  const colors2 = ['#fc6076', '#ff9a44', '#ef9d43', '#e75516'];
  const colors3 = ['#40e495', '#30dd8a', '#2bb673'];

  const getHoverColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());
  const getActiveColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());

	useEffect(() => {
		const fetchGeolocationData = () => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						const { latitude, longitude, altitude, altitudeAccuracy, accuracy } = position.coords;
						console.log('Geolocation data received:', position.coords);
						setLocationData({
							latitude: latitude.toString(),
							longitude: longitude.toString(),
							altitude: altitude ? altitude.toString() : '',
							altitudeAccuracy: altitudeAccuracy ? altitudeAccuracy.toString() : '',
							accuracy: accuracy.toString()
						});
					},
					(error) => {
						console.error("Error getting geolocation", error);
						message.error('Error getting geolocation: ' + error.message);
					},
					{
						enableHighAccuracy: true,
						timeout: 10000,
						maximumAge: 0
					}
				);
			} else {
				message.error('Geolocation is not supported by this browser.');
			}
		};

		fetchGeolocationData();
	}, []);
	
	

  const onFinish = async (values: any) => {
    // Merge geolocation data with form data
    const formData: FormData = {
      ...values,
      location: JSON.stringify(locationData), // Convert locationData to JSON string
      contact: `${values.contact_name} - ${values.contact_job} - ${values.contact_number} - ${values.contact_business}`
    };

    console.log('Form data to be sent:', formData);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/farms/operations/area/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Form submitted successfully:', result);
      message.success('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      message.error('Error submitting form: ' + error.message);
    }
  };


  return (
		<>
			<Button className='w-[29%]' type='primary' onClick={showDrawer}> + ferme</Button>
			<Drawer title="formulaire des fermes" onClose={onClose} open={open}>
				<Form form={form} onFinish={onFinish}>
					<Form.Item 
						name="name" 
						rules={[{ required: true, message: 'Veuillez entrer le nom de la ferme' }]}
						style={{ marginBottom: '10px' }} // Adjust the margin bottom
					>
						<Input placeholder="Nom de la ferme" />
					</Form.Item>
					<Form.Item 
						name="category" 
						initialValue="ferme" 
						rules={[{ required: true, message: "Veuillez entrer la classification de l'espace" }]}
						className="hidden"
					>
						<Input placeholder="Classification de l'espace" />
					</Form.Item>
					<Form.Item 
						name="description" 
						rules={[{ required: true, message: 'Veuillez entrer la description' }]}
						style={{ marginBottom: '10px' }} // Adjust the margin bottom
					>
						<TextArea placeholder="Description" />
					</Form.Item>
					<Form.Item 
						name="surface" 
						rules={[{ required: true, message: 'Veuillez entrer la surface' }]}
						style={{ marginBottom: '10px' }} // Adjust the margin bottom
					>
						<Input placeholder="Estimation de la surface en m2" />
					</Form.Item>
					<div className='flex justify-between'>
						<div className='w-[18%] bg-gray-300 rounded-md border-l-4'></div>
						<div className='w-[79%] flex flex-col justify-between'>
							<Form.Item 
								name="contact_name" 
								rules={[{ required: true, message: 'Veuillez entrer le nom du contact' }]}
								style={{ marginBottom: '10px',  }} // Adjust the margin bottom
							>
								<Input placeholder="Name" />
							</Form.Item>
							<Form.Item 
								name="contact_job" 
								rules={[{ required: true, message: 'Veuillez entrer le job du contact' }]}
								style={{ marginBottom: '10px', }} // Adjust the margin bottom
							>
								<Input placeholder="Job" />
							</Form.Item>
							<Form.Item 
								name="contact_number" 
								rules={[{ required: true, message: 'Veuillez entrer le numéro du contact' }]}
								style={{ marginBottom: '0px' }} // Adjust the margin bottom
							>
								<Input placeholder="Number" />
							</Form.Item>
							<Form.Item 
								name="contact_business" 
								initialValue="ferme P.P.A"
								rules={[{ required: true, message: 'Veuillez entrer le business du contact' }]}
								className='hidden'
								style={{ marginBottom: '0px' }} // Adjust the margin bottom
							>
								<Input placeholder="Business" />
							</Form.Item>
						</div>
					</div>
					<Form.Item 
						name="note" 
						rules={[{ required: true, message: 'Veuillez entrer une note' }]}
						style={{ marginTop: '10px', marginBottom: '0px' }} // Adjust the margin bottom
					>
						<TextArea placeholder="Note" />
					</Form.Item>
					
					<div className='mt-3 text-black p-3 ring-2 rounded-lg w-[100%]'>
						<div className='text-lg font-bold'>Donnée Geospatial GPS </div>
						<p><strong>Latitude:</strong> {locationData.latitude}</p>
						<p><strong>Longitude:</strong> {locationData.longitude}</p>
						<p><strong>Altitude:</strong> {locationData.altitude}</p>
						<p><strong>Altitude Accuracy:</strong> {locationData.altitudeAccuracy}</p>
						<p><strong>Accuracy:</strong> {locationData.accuracy} m</p>
						<Button className='w-[100%] mt-2' type='primary' disabled>Montrer sur la carte</Button>
					</div>
					<ConfigProvider
						theme={{
							components: {
								Button: {
									colorPrimary: `linear-gradient(135deg, ${colors1.join(', ')})`,
									colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors1).join(', ')})`,
									colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors1).join(', ')})`,
									lineWidth: 0
								}
							}
						}}
					>
						<Button className='mt-3 w-[100%] font-bold' type="primary" size="large" htmlType="submit">Sousmettre</Button>
					</ConfigProvider>
				</Form>
			</Drawer>
		</>
  );
}

export default InputIndexArea;