import React from 'react';
import SearchAppBar from '../../components/UI/navBar';
import Dashboard from './dashBoard';
import DashComponent from './dashBoard';
import App from './dashBoard';
export default function HomePage() {
  return (
    <>
      <SearchAppBar />
      <App/>
    </>
  );
}

// {
//   id: 2,
//   name: 'Electrical and Electronics',
//   products: [
//     {name: 'alternators', price: 1500, rating: 4.5, image: 'https://4.imimg.com/data4/FU/EN/MY-4236569/indica-regulator-500x500.jpg' },
//     { name: 'generator', price: 1200, rating: 3.8, image: 'https://5.imimg.com/data5/SELLER/Default/2023/11/359153466/OH/ZB/LH/9560319/eu30is-250x250.jpg'},
//       {name: 'transformer', price: 1500, rating: 4.5, image: 'https://5.imimg.com/data5/SELLER/Default/2020/12/JY/AI/AT/29268932/high-power-transformer-500x500.jpg' },
//     { name: 'motor', price: 1200, ratingting: 3.8, image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/321657074/QD/RU/NJ/24648504/transtorque-electric-motors-1000x1000.JPG'},
//   ],
// },
// {
//   id: 3,
//   name: 'Industry Supply',
//   products: [
//     {name: 'Oils', price: 699, rating: 4, image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/336211144/HO/VA/QW/30968396/industrial-oils-500x500.jpeg' },
//   { name: 'Storage Tanks', price: 58000, rating: 4, image: 'https://5.imimg.com/data5/SELLER/Default/2021/5/IF/FO/RZ/6738052/diesel-underground-storage-tank-500x500.jpg'},
//     {name: 'Filters', price: 467, rating: 4.5, image: 'https://5.imimg.com/data5/SELLER/Default/2023/10/353668484/UZ/BH/AH/616583/industrial-filters-500x500.jpeg' },
//   {name: 'Rubber', price: 299, rating: 3.8, image: 'https://www.industrialrubbergoods.com/images/industrial-rubber-good.jpg'},
//   ],
// },
// {
//   id: 4,
//   name: 'Agriculture Products',
//   products: [
//     {name: 'Cultipacker', price: 1500, rating: 2, image: 'https://5.imimg.com/data5/UJ/IC/DS/SELLER-79101850/itci-type-agricultural-cultivator-500x500.jpg' },
//   { name: 'Cultivator', price: 1200, rating: 3.8, image: 'https://2.imimg.com/data2/UN/CA/MY-148883/cultipacker-hc-606-250x250.jpg'},
// {name: 'Harrow', price: 1500, rating: 4.5, image: 'https://5.imimg.com/data5/DX/YO/QS/SELLER-512708/trailed-offset-disc-harrow-500x500.jpg' },
//   { name: 'Land imprinter', price: 1200, rating: 3.8, image: 'https://2.imimg.com/data2/PY/MF/MY-4227106/consultation-visit-services-500x500.jpg'},
//   ],
// },
// {
//   id: 5,
//   name: 'Food Factory',
//   products: [
//     {name: 'Flour Kneading', price: 1500, rating: 4.5, image: 'https://5.imimg.com/data5/PJ/OE/DZ/SELLER-10915778/25-kg-commercial-dough-kneader-machine-500x500.jpg' },
//     { name: 'Peeler', price: 1200, rating: 3.8, image: 'https://5.imimg.com/data5/XD/OL/MY-12995/universal-peeler-for-large-scale-processing-kronen-500x500.jpeg'},
  
//         {name: 'Grinders', price: 1500, rating: 4.5, image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/XQ/XO/YM/694891/food-grinder-machine-500x500.jpeg' },
//     { name: 'Oil Extraction Machines', price: 1200, rating: 3.8, image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/332392035/GN/LX/OZ/688876/oil-extraction-machine-in-bangalore-500x500.jpg'},
//   ],
// },