
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
            companyName: "",
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
            grandTotal: 0 // Sum of all costs
        },
        termsAndConditions: "", // Description of terms and conditions
        paymentTerms: {
            methods: "", 
            schedule: "",
            depositRequirements: ""
        },
        deliveryDetails: {
            method: "",
            shippingCharges: 0,
            estimatedDeliveryDates: ""
        },
        signatureAndApproval: {
            signature: "", // For physical approval
            approvalStamp: "" // For digital or official approval
        }
    };

    return (
        <div>
            <table>
                <thead>
                    <tr className='ring m-4  flex flex-row space-x-7'>
											<th className='bg-green-800'>Quote Number</th>
											
											<th className='bg-green-800'>Date of Issue</th>
																				
											<th className='bg-green-800'>Validity Period</th>
																			
											<th className='bg-green-800'>Customer Information</th>
																	
											<th className='bg-green-800'> Supplier Information</th>
																
											<th className='bg-green-800'> Description of Goods or Services</th>
											<th className='bg-green-800'> Total Cost</th>
																					
											<th className='bg-green-800'> Terms and Conditions</th>
																
											<th className='bg-green-800'> Payment Terms</th>
																				
											<th className='bg-green-800'> Delivery Details</th>
																		
											<th className='bg-green-800'> Signature and Approval</th>
														 
                    </tr>
                </thead>
                <tbody className='flex'>
                    <tr className='ring m-4  flex flex-row'>
                        <td className='bg-black'>{salesQuote.quoteNumber}</td>
                        <td className='bg-black'>{salesQuote.dateOfIssue}</td>
                        <td className='bg-black'>{salesQuote.validityPeriod}</td>
                        <td className='bg-black'>
                            <p>Name: {salesQuote.customerInformation.name}</p>
                            <p>Address: {salesQuote.customerInformation.address}</p>
                            <p>Contact Details: {salesQuote.customerInformation.contactDetails}</p>
                            <p>Contact Person: {salesQuote.customerInformation.contactPerson}</p>
                        </td>
                        <td className='bg-black'>
                            <p>Company Name: {salesQuote.supplierInformation.companyName}</p>
                            <p>Address: {salesQuote.supplierInformation.address}</p>
                            <p>Contact Details: {salesQuote.supplierInformation.contactDetails}</p>
                            <p>Sales Representative: {salesQuote.supplierInformation.salesRepresentative}</p>
                        </td>
                        <td className='bg-black'>
                            {salesQuote.descriptionOfGoodsOrServices.map((product, index) => (
                                <div key={index}>
                                    <p>Product Name: {product.productName}</p>
                                    <p>Quantity: {product.quantity}</p>
                                    <p>Specifications: {product.specifications}</p>
                                    <p>Unit Price: {product.unitPrice}</p>
                                </div>
                            ))}
                        </td>
                        <td className='bg-black'>
                            <p>Materials: {salesQuote.totalCost.materials}</p>
                            <p>Labor: {salesQuote.totalCost.labor}</p>
                            <p>Taxes: {salesQuote.totalCost.taxes}</p>
                            <p>Discounts: {salesQuote.totalCost.discounts}</p>
                            <p>Additional Fees: {salesQuote.totalCost.additionalFees}</p>
                            <p>Grand Total: {salesQuote.totalCost.grandTotal}</p>
                        </td>
                        <td className='bg-black'>{salesQuote.termsAndConditions}</td>
                        <td className='bg-black'>
                            <p>Methods: {salesQuote.paymentTerms.methods}</p>
                            <p>Schedule: {salesQuote.paymentTerms.schedule}</p>
                            <p>Deposit Requirements: {salesQuote.paymentTerms.depositRequirements}</p>
                        </td>
                        <td className='bg-black'>
                            <p>Method: {salesQuote.deliveryDetails.method}</p>
                            <p>Shipping Charges: {salesQuote.deliveryDetails.shippingCharges}</p>
                            <p>Estimated Delivery Dates: {salesQuote.deliveryDetails.estimatedDeliveryDates}</p>
                        </td>
                        <td className='bg-black'>
                            <p>Signature: {salesQuote.signatureAndApproval.signature}</p>
                            <p>Approval Stamp: {salesQuote.signatureAndApproval.approvalStamp}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
 }
export default Page;

