export interface Product {
  id: number;
  name: string;
  description: string;
  price: number; // Price is a number
  size: string; // e.g., 'sm-l-xl', consider an array of strings if sizes are multiple and distinct
  status: string; // e.g., 'in-stock'
  owner: string; // Assuming owner is represented by an ID or name as a string
  imageUrl?: string; // Optional property if not all products have an image
  location?: string; // Optional based on your previous structure, not included in the dummy data but in the interface
}