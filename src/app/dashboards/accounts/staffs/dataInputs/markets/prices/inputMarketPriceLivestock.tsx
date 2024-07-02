import { Button, DatePicker, Drawer, Input, InputNumber, Select, TimePicker } from 'antd';
import React, { useState } from 'react'
import type { DatePickerProps } from 'antd';
import moment from 'moment';


interface DataType {
  breed: string;
  age: number; // seed-baby-grown-mature-old
  price: number;
  date: number;
  location: string;
  //metadata
  creation_time: string;
  creation_location: string;
  creation_author: string;
  status: string;
}

const { TextArea } = Input;

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const { Option } = Select;

const selectAfter = (
  <Select defaultValue="sujet" style={{ width: 120 }}>
    <Option value="sujets">sujets</Option>
    <Option value="couples">couples</Option>
    <Option value="kg">kg</Option>
  </Select>
);

const InputMarketPriceLivestock = () => {
  
  const [open, setOpen] = useState(false);
  const showDrawer = () => { setOpen(true); };
  const onClose = () => { setOpen(false); };
  const [age, setAge] = useState<number | null>(0);

  // Define the date and time format if necessary
  const dateFormat = 'YYYY/MM/DD';  // Adjust date format as needed
  const timeFormat = 'HH:mm';  // Adjust time format as needed
  
  // Define onChange handlers for DatePicker and TimePicker
  const onDateChange = (date: any, dateString: any) => {
    console.log(date, dateString);  // Handle date change
  };

  const onTimeChange = (time: any, timeString: any) => {
    console.log(time, timeString);  // Handle time change
  };


  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };


  return (
    <>
      < Button className='w-[29%] font-bold' onClick={showDrawer} > + Prix </Button>
      <Drawer title=" Saisie des prix du marché du bétail" onClose={onClose} open={open} >
        <div className='mt-3'>
          <Select
            showSearch
            style={{ width: '100%' }}
            placeholder="Selectionez le bétail"
            optionFilterProp="children"
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={[
              {
                value: '1',
                label: 'Not Identified',
              },
              {
                value: '2',
                label: 'Closed',
              },
              {
                value: '3',
                label: 'Communicated',
              },
              {
                value: '4',
                label: 'Identified',
              },
              {
                value: '5',
                label: 'Resolved',
              },
              {
                value: '6',
                label: 'Cancelled',
              },
            ]}
          />
          </div>
          <div className='flex mt-3'>
            <div className='w-[15%] bg-gray-100 mr-2 rounded-md'>
            </div>
            <div className='w-[85%]'>
              <div className='flex items-center justify-between'>
                <Select
                  defaultValue="mature"
                  style={{ width: '100%' }}
                  onChange={handleChange}
                  options={[
                    { value: 'seed', label: 'oeuf' },
                    { value: 'baby', label: 'bébé' },
                    { value: 'pre-mature', label: 'pré-mature' },
                    { value: 'mature', label: 'mature' },
                    { value: 'old', label: 'vieux' },
                  ]}
                />
              </div>
              <div className='mt-3 flex items-center justify-between'>
                <InputNumber className='w-[100%]' addonAfter="fcfa" placeholder="prix" />
              </div>
              <div className='mt-3 flex items-center justify-between'>
                <InputNumber addonAfter={selectAfter} placeholder='Quantité' />
              </div>
            </div>
          </div>
          <div className='flex justify-between'>
            <DatePicker className='w-[64%] mt-2' 
              onChange={onDateChange}
              defaultValue={moment()}  // Sets default date to now
              format={dateFormat}
            />
            <TimePicker className='w-[35%] mt-2 ml-2' 
              onChange={onTimeChange}
              defaultValue={moment()}  // Sets default time to now
              format={timeFormat}
              placeholder='Time'
            />
          </div>
          <div className='mt-3'>
            <TextArea rows={6} placeholder=" Note [maxLength is 250]" maxLength={250} />
          </div>
          
          <div className='mt-3 hidden'>
            <Input placeholder="l'auteur de cette information" />
          </div>
          <div className='mt-3 hidden'>
            <Input placeholder="date de creation de l'information" />
          </div>
          <div className='mt-3 hidden'>
            <Input placeholder="lieu de creation de l'imformation" />
          </div>
          <div className='mt-3 hidden'>
            <Input placeholder="status de cette information" />
          </div>
          <Button className='mt-3 w-[100%]'> sousmettre </Button>
        </Drawer>
    </>
  )
}
export default InputMarketPriceLivestock;