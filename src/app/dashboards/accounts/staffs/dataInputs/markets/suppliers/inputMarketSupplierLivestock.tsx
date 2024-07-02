import { Button, ConfigProvider, Drawer, Input, InputNumber, Select } from 'antd';
import React, { useState } from 'react'
import { TinyColor } from '@ctrl/tinycolor';

interface DataType {
  category: string;
  title: string;
  breed: string;
  description: string;
  // lifespan (days)
  infancy: number;
  growth: number;
  production: number;
  rest: number;
  lifespan: number;
  // picture
  large: string;
  medium: string;
  thumbnail: string;
  //metadata
  creation_time: string;
  creation_location: string;
  creation_author: string;
  status: string;
}

const { TextArea } = Input;

const InputMarketSupplierLivestock = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const { Option } = Select;

  const selectAfter = (
    <Select defaultValue="sujets" style={{ width: 120 }}>
      <Option value="sujets">sujets</Option>
      <Option value="couples">couples</Option>
      <Option value="kg">kg</Option>
    </Select>
  );

  const colors1 = ['#6253E1', '#04BEFE'];
  const colors2 = ['#fc6076', '#ff9a44', '#ef9d43', '#e75516'];
  const colors3 = ['#40e495', '#30dd8a', '#2bb673'];
  const getHoverColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());
  const getActiveColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());


  return (
    <>
      < Button className='w-[29%] font-bold flex justify-center items-center' onClick={showDrawer}> + Fourni. </Button>
      < Drawer title="Données de fournisseur de bétail" onClose={onClose} open={open} >  
        < Select
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
                label: 'Poulet - cobb 500',
              },
              {
                value: '2',
                label: 'Poulet - local',
              },
              {
                value: '3',
                label: 'Boeuf - local',
              },
              {
                value: '4',
                label: 'mouton - tchad',
              },
              {
                value: '5',
                label: 'mouton - local',
              },
              {
                value: '6',
                label: 'chevre - local',
              },
            ]}
          />
        <div className='mt-3'>
          <Input placeholder=" Nom du fournisseur" />
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

        <div className='mt-3'>
          <Input placeholder=" Contact" />
        </div>

        <div className='mt-3'>
          <Input placeholder=" Adresse" />
        </div>

        <div className='mt-3'>
          <TextArea rows={6} placeholder="description de l'animal [maxLength is 250]" maxLength={250} />
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
          <ConfigProvider
            theme={{
              components: {
                Button: {
                  colorPrimary: `linear-gradient(135deg, ${colors1.join(', ')})`,
                  colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors1).join(', ')})`,
                  colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors1).join(', ')})`,
                  lineWidth: 0,
                },
              },
            }}
          >
            <Button className='mt-3 w-[100%] font-bold' type="primary" size="large" > Sousmettre </Button>
          </ConfigProvider>
        </Drawer>
    </>
  )
}
export default InputMarketSupplierLivestock;