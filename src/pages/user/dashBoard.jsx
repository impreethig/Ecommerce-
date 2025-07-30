
import React from 'react';

// Product data
const featuredProducts = [
  {
    id: 1,
    name: 'Food Processing Machine',
    price: 50,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 4.5,
    image: '',
  },
  {
    id: 2,
    name: 'Control and Automation',
    price: 75,
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 3.8,
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/1/379975750/ZT/GV/SI/28164451/dmx-light-controller-500x500.jpg',
  },
 
];

const recommendedProducts = [
  {
    id: 4,
    name: 'Submersible pumps',
    price: 80,
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    rating: 4.0,
    image: '',
  },
  {
    id: 5,
    name: 'Process Controller',
    price: 120,
    description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    rating: 4.5,
    image: 'https://3.imimg.com/data3/SL/TF/GLADMIN-8702/process-controllers-250x250.jpgx ',
  },
 
];

// Categories data
const categories = [
  {
    id: 1,
    name: 'Building and Construction',
    products: [
      
        {name: 'Brick Making Machines', price: 45000, rating: 4, image: 'https://5.imimg.com/data5/GLADMIN/Default/2022/7/YO/YW/JG/90525/fly-ash-brick-making-machine-250x250.jpg' },
        { name: 'TMT Bars', price: 200, rating: 4.5, image: 'https://5.imimg.com/data5/PO/QS/FA/SELLER-397513/tmt-bar-1000x1000.png'},
        { name: 'Emulsion Paints',price: 599, rating: 4, image: 'https://img2.exportersindia.com/product_images/bc-small/2023/11/4124436/plastic-emulsion-paints-2852364.jpg'  },
        { name: 'Wooden Door',price: 10000, rating: 4, image: 'https://5.imimg.com/data5/YJ/DU/MY-8045192/coated-wooden-door-500x500.jpg' },
    ],
  },
  {
    id: 2,
    name: 'Electrical and Electronics',
    products: [
      {name: 'alternators', price: 1500, rating: 4.5, image: 'https://4.imimg.com/data4/FU/EN/MY-4236569/indica-regulator-500x500.jpg' },
      { name: 'generator', price: 1200, rating: 3.8, image: 'https://5.imimg.com/data5/SELLER/Default/2023/11/359153466/OH/ZB/LH/9560319/eu30is-250x250.jpg'},
        {name: 'transformer', price: 1500, rating: 4.5, image: 'https://5.imimg.com/data5/SELLER/Default/2020/12/JY/AI/AT/29268932/high-power-transformer-500x500.jpg' },
      { name: 'motor', price: 1200, ratingting: 3.8, image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/321657074/QD/RU/NJ/24648504/transtorque-electric-motors-1000x1000.JPG'},
    ],
  },
  {
    id: 3,
    name: 'Industry Supply',
    products: [
      {name: 'Oils', price: 699, rating: 4, image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/336211144/HO/VA/QW/30968396/industrial-oils-500x500.jpeg' },
    { name: 'Storage Tanks', price: 58000, rating: 4, image: 'https://5.imimg.com/data5/SELLER/Default/2021/5/IF/FO/RZ/6738052/diesel-underground-storage-tank-500x500.jpg'},
      {name: 'Filters', price: 467, rating: 4.5, image: 'https://5.imimg.com/data5/SELLER/Default/2023/10/353668484/UZ/BH/AH/616583/industrial-filters-500x500.jpeg' },
    {name: 'Rubber', price: 299, rating: 3.8, image: 'https://www.industrialrubbergoods.com/images/industrial-rubber-good.jpg'},
    ],
  },
  {
    id: 4,
    name: 'Agriculture Products',
    products: [
      {name: 'Cultipacker', price: 1500, rating: 2, image: 'https://5.imimg.com/data5/UJ/IC/DS/SELLER-79101850/itci-type-agricultural-cultivator-500x500.jpg' },
    { name: 'Cultivator', price: 1200, rating: 3.8, image: 'https://2.imimg.com/data2/UN/CA/MY-148883/cultipacker-hc-606-250x250.jpg'},
{name: 'Harrow', price: 1500, rating: 4.5, image: 'https://5.imimg.com/data5/DX/YO/QS/SELLER-512708/trailed-offset-disc-harrow-500x500.jpg' },
    { name: 'Land imprinter', price: 1200, rating: 3.8, image: 'https://2.imimg.com/data2/PY/MF/MY-4227106/consultation-visit-services-500x500.jpg'},
    ],
  },
  {
    id: 5,
    name: 'Food Factory',
    products: [
      {name: 'Flour Kneading', price: 1500, rating: 4.5, image: 'https://5.imimg.com/data5/PJ/OE/DZ/SELLER-10915778/25-kg-commercial-dough-kneader-machine-500x500.jpg' },
      { name: 'Peeler', price: 1200, rating: 3.8, image: 'https://5.imimg.com/data5/XD/OL/MY-12995/universal-peeler-for-large-scale-processing-kronen-500x500.jpeg'},
    
          {name: 'Grinders', price: 1500, rating: 4.5, image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/XQ/XO/YM/694891/food-grinder-machine-500x500.jpeg' },
      { name: 'Oil Extraction Machines', price: 1200, rating: 3.8, image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/332392035/GN/LX/OZ/688876/oil-extraction-machine-in-bangalore-500x500.jpg'},
    ],
  },
];

// ProductCard component
const ProductCard = ({ product }) => {
  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px', // Increased padding for larger card size
    marginBottom: '20px', // Increased margin for spacing between cards
    display: 'flex',
    alignItems: 'center',
    width: '600px',
     // Increased card width
  };

  const imageStyle = {
    width: '120px', // Increased image size
    height: '120px', // Increased image size
    marginRight: '20px',
    objectFit: 'cover',
  };

  const headingStyle = {
    color: '#333',
    fontSize: '20px', // Increased font size for heading
    marginBottom: '10px',
  };

  const textStyle = {
    color: '#666',
    fontSize: '16px', // Increased font size for text
    marginBottom: '5px',
  };

  const ratingStyle = {
    color: '#f39c12',
    fontSize: '18px', // Increased font size for rating
    marginBottom: '5px',
  };

  return (
    <div style={cardStyle} className="product-card">
      <img src={product.image} alt={product.name} style={imageStyle} />
      <div>
        <h3 style={headingStyle}>{product.name}</h3>
        <p style={textStyle}>{product.description}</p>
        <p style={textStyle}>Price: ${product.price}</p>
        <p style={ratingStyle}>Rating: {product.rating} ★</p>
      </div>
    </div>
  );
};

// Category component
const Category = ({ category }) => {
  const categoryStyle = {
    marginBottom: '30px',
  };

  const categoryTitleStyle = {
    color: '#333',
    fontSize: '20px',
    marginBottom: '15px',
    width: '100%',
  };

  const productListStyle = {
    display: 'flex', // Display products in a single line
    flexWrap: 'nowrap', // Prevent products from wrapping to next line
    overflowX: 'auto', // Add horizontal scroll for overflow
  };

  return (
    <div style={categoryStyle}>
      <h2 style={categoryTitleStyle}>{category.name}</h2>
      <div style={productListStyle} className="product-list">
        {category.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
// Dashboard component
const Dashboard = () => {
  const dashboardStyle = {
    display: 'flex',
    flexDirection: 'column', // Align categories vertically
  };

  const titleStyle = {
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px',
  };

  const columnsContainerStyle = {
    display: 'flex',
    marginBottom: '30px',
  };

  const columnStyle = {
    flex: '1', // Equal flex-grow to make columns expand evenly
    marginRight: '20px', // Add margin for spacing between columns
  };

  return (
    <div style={dashboardStyle} className="dashboard">
      <div style={titleStyle}>Featured Products</div>
      <div style={columnsContainerStyle}>
        <div style={columnStyle}>
          <div className="product-list">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div style={titleStyle}></div>
        <div style={columnStyle}>
          <div className="product-list">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Dashboard;