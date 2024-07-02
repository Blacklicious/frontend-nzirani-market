import React from 'react'

const Products = () => {
	const products = [
		{
			id: 1,
			name: 'Product 1',
			price: 10,
			quantity: 100,
			supplier: 'Supplier 1',
			category: 'Category 1',
			subcategory: 'Sub category 1',
			description: 'This is a description of Product 1.',
			purchaseDate: '2022-01-01',
			expiryDate: '2023-01-01',
			location: 'Aisle 1, Shelf 2'
		},
		{
			id: 2,
			name: 'Product 2',
			price: 20,
			quantity: 300,
			supplier: 'Supplier 1',
			category: 'Category 2',
			subcategory: 'Sub category 2',
			description: 'This is a description of Product 2.',
			purchaseDate: '2022-01-01',
			expiryDate: '2023-01-01',
			location: 'Aisle 1, Shelf 2'
		},
		{
			id: 3,
			name: 'Product 3',
			price: 1000,
			quantity: 1800,
			supplier: 'Supplier 2',
			category: 'Category 3',
			subcategory: 'Sub category 3',
			description: 'This is a description of Product 3.',
			purchaseDate: '2022-01-01',
			expiryDate: '2023-01-01',
			location: 'Aisle 1, Shelf 2'
		},
		];
    
  return (
    <div className=' border-black border-[3px]'>
	  <div className='flex flex-wrap items-center justify-between p-3 text-lg bg-emerald-800 '> 
	  	Produits
          <button className='bg-blue-500 hover:bg-blue-800 text-white font-bold  px-4 rounded w-[30%] h-[80%] border-black border-[2px]'>
            Ajoutez un produit
          </button> 
          <div className='w-[100%] hidden text-sm'>
            Service form produits
          </div>
        </div>  
		<div  className='w-[100%] '>
		<input className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 text-sm focus:outline-none w-[100%]'
			type='search'
			name='search'
			placeholder='Search'
		/>
		</div>
      <table className='table-auto w-[100%] '>
        <thead className='w-[100%]'>
          <tr>
            <th className='bg-emerald-800 border-black border-[2px]'>Nom</th>
            <th className='bg-emerald-800 border-black border-[2px]'>Prix</th>
            <th className='bg-emerald-800 border-black border-[2px]'>Quantité</th>
            <th className='bg-emerald-800 border-black border-[2px]'>Fournisseur</th>
            <th className='bg-emerald-800 border-black border-[2px]'>Categorie</th>
            <th className='bg-emerald-800 border-black border-[2px]'>Description</th>
            <th className='bg-emerald-800 border-black border-[2px]'>Date d&apos;expiration</th>
            <th className='bg-emerald-800 border-black border-[2px]'>Status</th>
            {/* Add more <th> elements as needed */}
          </tr>
        </thead>
        <tbody className='w-[100%] text-center '>
            {products.map((product) => (
              <tr key={product.id} className='hover:border-red-900 hover:border-[3px] bg-white text-black'>
                <td className=''>{product.name}</td>
                <td className=''>{product.price}</td>
                <td className=''>{product.quantity}</td>
                <td className=''> {product.supplier}</td>
                <td className=''> {product.category}</td>
                <td className=''> {product.description}</td>
                <td className=''> {product.expiryDate} </td>
                <td className=''> en stock</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Products
