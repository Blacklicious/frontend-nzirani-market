import React, { useEffect, useState, Suspense } from 'react';
import { Skeleton } from 'antd';

interface Author {
  id: number;
}

interface Livestock {
  id: number;
  author: Author;
  title: string;
  breed: string;
  category: string;
  description: string;
  infancy_days: number;
  growing_days: number;
  production_days: number;
  resting_days: number;
  lifespan: number;
  image: string | null;
  creation_date: string;
  modification_date: string;
  author_location: string;
  status: string;
}

const fetchLivestockData = async (): Promise<Livestock[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}farms/markets/livestocks/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const LivestockList: React.FC = () => {
  const [livestockData, setLivestockData] = useState<Livestock[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLivestockData();
        setLivestockData(data);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>

      <div className='border-[2px] p-2 hover:bg-gray-50 h-[40px] rounded-md'></div>
      {livestockData.map((livestock) => (
        <div key={livestock.id} className='border-b p-2 hover:bg-gray-50'>
          <div className='flex justify-between'>
            <div className='h-[40px] w-[15%] bg-gray-200 rounded'>
            </div>
            <div className='w-[60%] flex pl-4 items-center'>
             {livestock.title} {livestock.breed}</div>
            <div className='w-[25%]  flex justify-between'>
              <button className='w-[47%] bg-blue-100 hover:bg-blue-500 rounded'>
              ✏️
              </button>
              <button className='w-[47%] bg-red-100 hover:bg-red-400 rounded'>
              🗑️
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const LivestockListWrapper: React.FC = () => {
  return (
    <Suspense fallback={<Skeleton active />}>
      <LivestockList />
    </Suspense>
  );
};

const IndexInputListLivestock: React.FC = () => {
  return (
    <>
      <div>Base de donnée des animaux</div>
      <div className='flex flex-col  bg-white w-[100%]'>
        <LivestockListWrapper />
      </div>
    </>
  );
};

export default IndexInputListLivestock;