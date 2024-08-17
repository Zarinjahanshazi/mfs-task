import { BsFillStarFill, BsStar, BsStarHalf } from 'react-icons/bs';
import { HiOutlineStar } from 'react-icons/hi';

export default function ProductCard({ productImage, productName, description, ratings, brandName, price, creationDate, category }) {

  const generateRating = (ratings) => {
    const fullStars = Math.floor(ratings);
    const halfStar = ratings % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className='flex gap-1 text-[18px] text-yellow-500'>
        {Array(fullStars).fill(<BsFillStarFill />).map((star, index) => (
          <span key={index}>{star}</span>
        ))}
        {halfStar && <BsStarHalf />}
        {Array(emptyStars).fill(<BsStar />).map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>
    );
  };

  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };

  // Define the maximum length for the description
  const maxDescriptionLength = 50; // You can adjust this value
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform max-w-[300px] transform hover:scale-105 duration-300 mx-auto h-[500px] flex flex-col">
      <img 
        src={productImage} 
        alt={productName} 
        className="w-full h-52 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-xl font-semibold mb-2 truncate">{productName}</h2>
        <p className="text-gray-700 mb-2 line-clamp-3">   {truncateDescription(description, maxDescriptionLength)}</p>
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-900 font-bold text-xl">${price}</span>  
          <span className="text-gray-500 text-sm line-through">${parseInt(price) + 50}.00</span>
        </div>
        <div className="mb-3">
          {generateRating(ratings)}
        </div>
        <div className="text-sm text-gray-600 mb-3">
          <p><strong>Category:</strong> {category}</p>
          <p><strong>Brand:</strong> {brandName}</p>
          <p><strong>Added on:</strong> {new Date(creationDate).toLocaleDateString()}</p>
        </div>
        <button className="mt-auto w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}


//         <div className='px-4 border border-gray-200 rounded-xl max-w-[400px]'>
//             <div>
//                 <img className='w-full h-auto' src={productImage} alt={productName} />
//             </div>
//             <div className='space-y-2 py-2'>
//                 <h2 className='text-accent font-medium uppercase'>{productName}</h2>
//                 <p className=' text-gray-500 max-w-[150px]'>{description}</p>
// <div>
//     {generateRating(ratings)}
// </div>
// <div className='font-bold flex gap-4'>
//     ${price}
//     <del>${parseInt(price) + 50}.00</del>
// </div>
//             </div>

//         </div>