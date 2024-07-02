import React, { useEffect, useState } from 'react'
import { Button, Drawer, Input , Cascader, InputNumber, Select, Space} from 'antd';
import { SettingOutlined } from '@ant-design/icons';

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

const IndexInputLivestock = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [enfance, setEnfance] = useState<number | null>(0);
  const [adolescence, setAdolescence] = useState<number | null>(0);
  const [production, setProduction] = useState<number | null>(0);
  const [restante, setRestante] = useState<number | null>(0);
  const [vie, setVie] = useState<number>(0);

  useEffect(() => {
    // Update total only with valid numbers, treat null as 0
    setVie(
      (enfance ?? 0) + 
      (adolescence ?? 0) + 
      (production ?? 0) + 
      (restante ?? 0)
    );
  }, [enfance, adolescence, production, restante]);

  return (
    <>
      <Button type="primary" onClick={showDrawer} className=' w-[100%]'>
        + Animaux
      </Button>
      <div >
        <Drawer title=" Saisie des données de l'animal" onClose={onClose} open={open} >
          <div className='mt-3'>
            <Input placeholder="Race de l'animal" />
          </div>
          <div className='mt-3'>
            <Input placeholder="entrez les categories" />
          </div>
          <div className='mt-3'>
            <TextArea rows={6} placeholder="description de l'animal [maxLength is 250]" maxLength={250} />
  
          </div>
          <div className='flex mt-3'>
            <div className='w-[15%] bg-gray-100 mr-2 rounded-md'>
            </div>
            <div className='w-[85%]'>
              <div className='flex items-center justify-between'>
                <label className='w-[350px]'>Durée de l'enfance</label>
                <InputNumber addonAfter="Jours" value={enfance} onChange={setEnfance} placeholder="Durée de l'enfance" />
              </div>
              <div className='mt-3 flex items-center justify-between'>
                <label className='w-[350px] '>Durée de l'adolescence</label>
                <InputNumber addonAfter="Jours" value={adolescence} onChange={setAdolescence} placeholder="Durée de l'adolescence" />
              </div>
              <div className='mt-3 flex items-center justify-between'>
                <label className='w-[350px] '>Durée de production</label>
                <InputNumber addonAfter="Jours" value={production} onChange={setProduction} placeholder="Durée de production" />
              </div>
              <div className='mt-3 flex items-center justify-between'>
                <label className='w-[350px] '>Durée restante</label>
                <InputNumber addonAfter="Jours" value={restante} onChange={setRestante} placeholder="Durée restante" />
              </div>
              <div className='mt-3 flex items-center justify-between'>
                <label className='w-[350px] '>Durée de l'adolescence</label>
                <InputNumber addonAfter="Jours" value={vie} placeholder="Durée de vie" readOnly />
              </div>
            </div>
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
      </div>
    </>
  )
}

export default IndexInputLivestock;