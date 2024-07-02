import React, { useEffect, useState } from 'react'
import { Button, Drawer, Input , Cascader, InputNumber, Select, Space} from 'antd';
import { Avatar, Divider, List, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';

interface DataType {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

const { TextArea } = Input;

const IndexInputCrop = () => {
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

    loadMoreData();
  }, [enfance, adolescence, production, restante]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };


  return (
    <>
      <div className='w-[100%]'>
        <Button type="primary" onClick={showDrawer} className='my-2'>
          + Culture
        </Button>
        <Drawer title="Saisie des données des cultures" onClose={onClose} open={open} >
          <div className='mt-3'>
            <Input placeholder="Nom de la Culture" />
            - papaye
            - gombo
            - aubergine
            - maïs
            - panicom
            - banane
            - citron
          </div>
          <div className='mt-3'>
            <Input placeholder="entrez les categories" />
            farm - crops - (fruits - vegetable - herbs )
          </div>
          <div className='mt-3'>
            <TextArea rows={6} placeholder="description de l'animal [maxLength is 250]" maxLength={250} />
  
          </div>
          <div className='flex mt-3'>
            <div className='w-[15%] bg-gray-100 mr-2 rounded-md'>
            </div>
            <div className='w-[85%]'>
              <div className='flex items-center justify-between'>
                <label className='w-[350px]'>Durée de la germination</label>
                <InputNumber addonAfter="Jours" value={enfance} onChange={setEnfance} placeholder="Durée de l'enfance" />
              </div>
              <div className='mt-3 flex items-center justify-between'>
                <label className='w-[350px] '>Durée de la croissance</label>
                <InputNumber addonAfter="Jours" value={adolescence} onChange={setAdolescence} placeholder="Durée de l'adolescence" />
              </div>
              <div className='mt-3 flex items-center justify-between'>
                <label className='w-[350px] '>Durée de Fructification</label>
                <InputNumber addonAfter="Jours" value={production} onChange={setProduction} placeholder="Durée de production" />
              </div>
              <div className='mt-3 flex items-center justify-between'>
                <label className='w-[350px] '>Durée repos</label>
                <InputNumber addonAfter="Jours" value={restante} onChange={setRestante} placeholder="Durée restante" />
              </div>
              <div className='mt-3 flex items-center justify-between'>
                <label className='w-[350px] '>Durée de vie</label>
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

export default IndexInputCrop;