// import React, { useState } from 'react';

// const Wishlist = () => {
//   const [wishlist, setWishlist] = useState([]);

//   const addToWishlist = (item) => {
//     setWishlist([...wishlist, item]);
//   };

//   const removeFromWishlist = (item) => {
//     const updatedWishlist = wishlist.filter((wishlistItem) => wishlistItem !== item);
//     setWishlist(updatedWishlist);
//   };

//   return (
//     <div>
//       <h2>Wishlist</h2>
//       {wishlist.length === 0 && <p>Your wishlist is currently empty.</p>}
//       {wishlist.map((item) => (
//         <div key={item}>
//           <p>{item}</p>
//           <button onClick={() => removeFromWishlist(item)}>Remove from wishlist</button>
//         </div>
//       ))}
//       <form onSubmit={(e) => {
//         e.preventDefault();
//         const newItem = e.target.elements.item.value.trim();
//         if (newItem !== '') {
//           addToWishlist(newItem);
//           e.target.elements.item.value = '';
//         }
//       }}>
//         <label htmlFor="item">Add item to wishlist:</label>
//         <input type="text" id="item" />
//         <button type="submit">Add to wishlist</button>
//       </form>
//     </div>
//   );
// };

// export default Wishlist;
