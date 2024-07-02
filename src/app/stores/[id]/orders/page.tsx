


import React from 'react';

const Page = () => {
    let salesQuote = {
        quoteNumber: "io3uhgh594rgh94g", // Unique identifier for the quote
        dateOfIssue: "02/12/2023", // The date when the quote was issued
        validityPeriod: "", // Time frame for which the quote is valid
        customerInformation: {
            name: "testinhio",
            address: "Mali, Bamako, Commune 1, Quartier du Fleuve, Rue 1, Porte 1, Chambre 223",
            contactDetails: "223040294",
            contactPerson: "" // Specific for B2B transactions
        },
        supplierInformation: {
            companyName: "Nzirani.IO",
            address: "",
            contactDetails: "",
            salesRepresentative: "" // Optional
        },
        descriptionOfGoodsOrServices: [
            {
                productName: "",
                quantity: 0,
                specifications: "",
                unitPrice: 0
                // Add more products as needed
            }
            // ...
        ],
        totalCost: {
            materials: 0,
            labor: 0,
            taxes: 0,
            discounts: 0,
            additionalFees: 0,
            grandTotal: 4800500 // Sum of all costs
        },
        termsAndConditions: "", // Description of terms and conditions
        paymentTerms: {
            methods: "", 
            schedule: "",
            depositRequirements: ""
        },
        deliveryDetails: {
            method: " en livraison ",
            shippingCharges: 0,
            estimatedDeliveryDates: ""
        },
        signatureAndApproval: {
            signature: "", // For physical approval
            approvalStamp: "" // For digital or official approval
        }
    };

    return (
        <div className='p-2 md:p-8'>
            <table className='w-[100%] h-full rounded-lg'>
                <thead className='w-[100%] h-full'>
                    <tr className=' border-[2px] px-6 hidden md:flex flex-col md:flex-row space-x-3 w-[100%] text-xs md:text-lg h-full rounded-t-xl'>
											<th className='bg-green-700 w-full  flex items-center justify-center'>Quote Number</th>
											<th className='bg-green-700 w-full  flex items-center justify-center'>Date of Issue</th>
											<th className='bg-green-700 w-full  flex items-center justify-center'>Customer Information</th>
											<th className='bg-green-700 w-full  flex items-center justify-center'> Supplier Information</th>
											<th className='bg-green-700 w-full  flex items-center justify-center'> Total Cost</th>
											<th className='bg-green-700 w-full  flex items-center justify-center'> Status </th>
											<th className='bg-transparent w-full  flex items-center justify-center'> </th>
                    </tr>
                </thead>
                <tbody className='flex w-[48%] md:w-[100%] text-md'>
                    <tr className='border hover:border-red-900 hover:border-[6px] flex flex-col md:flex-row  w-[100%] text-sm  rounded-xl md:rounded-t-none md:rounded-b-xl'>
                        <td className=' w-[100%] my-2 md:my-0 py-2 md:py-0 h-[100%] flex items-center justify-center bg-white md:bg-transparent text-black md:text-white '>
													<p className='md:hidden text-right '> Devis - </p>
													<p className=' ml-1'> {salesQuote.quoteNumber} </p>
												</td>
                        <td className='w-full h-[100%] flex items-center justify-normal md:justify-center'>
													<p className='md:hidden text-right w-[40%]  '> Client  : </p>
                          <p className=' ml-1'> {salesQuote.customerInformation.contactDetails}</p>
                        </td>
                        <td className='w-full h-[100%] flex items-center justify-normal md:justify-center'>
													<p className='md:hidden text-right w-[40%] '> Supplier  : </p>
                          <p className=' ml-1'> {salesQuote.supplierInformation.companyName}</p>
                        </td>
                        <td className='w-full h-[100%] flex items-center justify-normal md:justify-center'>
													<p className='md:hidden text-right w-[40%] '> Date : </p>
													<p className=' ml-1'> {salesQuote.dateOfIssue} </p>
												</td>
                        <td className='w-full h-[100%] flex items-center justify-normal md:justify-center'>
													<p className='md:hidden text-right w-[40%] '> Coût  : </p>
                          <p className=' ml-1'> {salesQuote.totalCost.grandTotal} XOF</p>
                        </td>
                        <td className='w-[100%] h-[100%] flex items-center justify-normal md:justify-center'>
													<p className='md:hidden text-right w-[40%] '> Status : </p>
                          <p className=' ml-1'> {salesQuote.deliveryDetails.method}</p>
                        </td>
												<td className=' w-full flex items-center justify-normal md:justify-center'>
                          <button className='bg-yellow-500 hover:ring-4 hover:font-extrabold hover:ring-black rounded-sm m-2 w-[70%] h-8 text-black'> Plus d'info ... </button>
													<button className='bg-red-500 hover:ring-4 hover:font-extrabold hover:ring-black rounded-sm m-2 w-[25%] h-8 text-black'> X </button>
												</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
 }
export default Page;
