// Note: Ensure this code resides in a file under your pages directory, 
// e.g., pages/products/[id].tsx for dynamic routing to work as expected.
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import type { Product } from '../types'; // Import your Store interface

// Assuming dummyProducts and dummyServices are imported or defined in the same file
const dummyProductVersion = [
  { id: 1, title: 'petit', description: '1 kg', multiplier: 1, status: 'in-stock', owner: 'product1' },
  { id: 2, title: 'moyen', description: '1.5 kg', multiplier: 1.2, status: 'in-stock', owner: 'product1' },
  { id: 3, titel: 'large', description: '2 kg', multiplier: 1.4, status: 'in-stock', owner: 'product1' },
  // Add other products...
];

// Utility function for truncating text
function truncateText(text, wordLimit) {
  const wordsArray = text.split(' ');
  if (wordsArray.length > wordLimit) {
    return wordsArray.slice(0, wordLimit).join(' ') + '...';
  } else {
    return text;
  }
}

function ProductDetails({ params }: { params: { productId: string } }) {
  const router = useRouter(); 
  const [productData, setProductData] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [price, setPrice] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1); // Initialized with 1 as the default quantity
  const [totalCost, setTotalCost] = useState(0);
  const deliveryCost = 1000; // Fixed delivery cost

  // Example useEffect to simulate fetching data
  useEffect(() => {
    setIsLoading(true);
    // Simulate fetching store data
    setTimeout(() => {
      const dummyStore: Product = {
        id: parseInt(params.productId), // Using params.id as store ID
        name: 'Poulet de Chair P.P.A',
        imageUrl: 'https://via.placeholder.com/150',
        description: ' Poulets de chair frais et de haute qualité disponibles dès maintenant ! À la recherche d un poulet succulent, nutritif et délicieux pour vos repas ? Ne cherchez plus ! Nos poulets de chair fermiers sont élevés dans les meilleures conditions, vous garantissant une option savoureuse et saine pour vous et votre famille. Qualité Supérieure : Nos poulets sont nourris d un régime naturel et riche en nutriments, sans additifs nocifs, assurant une viande de la plus haute qualité. Élevage Éthique : Nous sommes fiers de fournir à nos poulets un environnement spacieux et propre, leur permettant de grandir en bonne santé.',
        location: 'Sokorodji, Bamako, Mali',
        size: '(sm)-(lg)-(xl)', 
        price: 2500, 
        status: 'in-stock', 
        owner: '123',
      };
      setProductData(dummyStore);
      setPrice(dummyProductVersion[0].multiplier * dummyStore.price);
      setIsLoading(false);
    }, 1000);
    // Calculate total cost whenever quantity or productData changes
    setTotalCost((price * quantity) + deliveryCost);
  }, [params.productId]);

  // Truncate the description to 50 words for display
  const truncatedDescription = productData ? truncateText(productData.description, 24) : '';

  // Handlers to increment and decrement quantity
  const incrementQuantity = () => {
    setQuantity(prevQuantity => Math.min(99, prevQuantity + 1)); // Ensuring max quantity is 99
  };
  const decrementQuantity = () => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity - 1)); // Ensuring min quantity is 1
  };

  return (
    <div className=" bg-white p-2 m-2 rounded-[22px]">
      <div className="w-full h-[450px] bg-gray-200 flex justify-center items-center mb-4 rounded-[30px] ">
        {/* Placeholder for product image */}
        <span>Product Image Placeholder</span>
      </div>
      <div className='flex justify-between px-2'>
        <div>categorie</div>
        <div className="mb-2">Status: {productData?.status}</div>
      </div>
      <div className='flex justify-between items-center w-[100%] px-2'>
        <div className="text-3xl font-bold mb-2">{productData?.name}</div>
      </div>
      <div className="font-normal text-sm mb-2 flex flex-wrap justify-around p-1">
        {dummyProductVersion.map((product) => (
          <button key={product.id} className='border shadow-sm active:bg-gray-100 rounded-md w-[65px] h-[65px]'
          onClick={() => setPrice((productData?.price * product.multiplier || 0).toString())}
    >
            {product.description}
          </button>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap justify-around items-center ">
        <div>
          <div className='text-3xl font-extrabold'>{price * quantity} fcfa</div>
          <div> +1000 fcfa/ livraison </div>
        </div>
        <div className='text-2xl flex items-center'>
          <button className='border-[2px] rounded-md border-gray-400 hover:bg-gray-200
           px-1 mr-2' onClick={incrementQuantity}>➕</button>
          <input
            type="number"
            value={quantity.toString()}
            onChange={e => setQuantity(Math.max(1, Math.min(99, parseInt(e.target.value))))}
            className="w-16 text-center border-2 rounded-md border-gray-400"
            min="1"
            max="99"
          />
          <button className='border-[2px] rounded-md border-gray-400
           hover:bg-gray-200 px-1 ml-2 ' onClick={decrementQuantity}>➖</button>
        </div>
      </div>
      <div className="mb-1 font-thin p-3 md:text-xl ">
        {truncatedDescription} 
        <button className='text-blue-500 font-medium'> plus</button>
      </div>
      <div className="flex items-center justify-between px-3 pt-3 pb-3
       bg-gray-100 rounded-[20px] mb-1 hover:border-[3px] z-[2]">
        <div className='ml-1 text-3xl font-extrabold '>{ price * quantity + deliveryCost} fcfa</div> {/* Updated to display totalCost */}
        <button className="bg-white shadow-md text-black px-3 py-1
        hover:bg-gray-300 rounded-xl font-extrabold  w-[30%] text-4xl ">
          📱
        </button>
      </div>
      <div className='hidden flex-col justify-center items-center bg-gray-100 
       border-b-[3px] border-x-[3px] rounded-b-[20px] mt-[-25px] z-[1] pt-[30px] pb-2'>
        <button className='border-[3px] m-1 p-1 w-[80%] rounded-lg bg-white hover:bg-gray-200'> Achetez maintenant </button>
        <button className='border-[3px] m-1 p-1 w-[80%] rounded-lg bg-white hover:bg-gray-200'> Accedez à votre panier</button>
        <button className='border-[3px] m-1 p-1 w-[80%] rounded-lg bg-white hover:bg-gray-200'> Continuez vers la boutique</button>
        <button className='border-[3px] m-1 p-1 w-[80%] rounded-lg bg-white hover:bg-gray-200'> Continuez vers le marché</button>
      </div>
      <div className=' flex flex-col justify-center items-center w-[100%] bg-gray-100 px-3 
       border-b-[3px] border-x-[3px] rounded-b-[20px] mt-[-25px] pt-[30px] pb-2'>
          <div>Le panier indisponible contactez le </div>
          <div className='font-bold mx-1 w-min'>(+223)94050591 </div>
      </div>  

    </div>
  );
};

export default ProductDetails;
