import React from 'react';
import './Storyteller.css';

const genres = {
  'Education': [
    { title: 'Fun Learning Activities', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS0H32Ndl9kRky0XRddtbNC2uKn45YT_0atA&s' },
    { title: 'Alphabet Book', imgSrc: 'https://offshootbooks.com/cdn/shop/products/51PqtHCdhsL._SY498_BO1_204_203_200.jpg?v=1652948416' },
    { title: 'Amazing Activity Book', imgSrc: 'https://i5.walmartimages.com/seo/amazing-Jumbo-activity-book-kids-fun-kid-workbook-gam-Best-Book-Giant-s-Activity-matching-Sudoku-Writing-Mazes-drawing-Gradient-Coloring-Pre-Kinderga_ac1da12b-a5e9-4293-804f-7b83daacc3cd.dacb2b172c32ce937a8b2cd7659fc53c.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF' },
    { title: 'Hamleys Product', imgSrc: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492908630/665/492908630-1.webp' },
    { title: 'ABC Big Pictures', imgSrc: 'https://rukminim2.flixcart.com/image/850/1000/l2z26q80/book/9/b/t/abc-big-pictures-alphabet-book-original-image777t8mjph2c.jpeg?q=20&crop=false' },
    { title: 'Book of Fun Learning Activities', imgSrc: 'https://m.media-amazon.com/images/I/81Dx0RR-zCL._AC_UF1000,1000_QL80_.jpg' },
    { title: 'Alphabet Learning Book', imgSrc: 'https://offshootbooks.com/cdn/shop/products/71YCMMyPrCL.jpg?v=1652952264' }
  ],
  'Moral': [
    { title: 'Moral Stories', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQegDFFDull46Q9ElYI-G_LPDKqQKQVsKNWUw&s' },
    { title: 'Moral Tales', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46FjD9RIXanl51UBJ2JzIri8Fc9sxWQF7rw&s' },
    { title: 'Life Lessons', imgSrc: 'https://admin.tradesala.com/public/product-images/large/20240424-6628b2e141e5b.jpg' },
    { title: 'Inspirational Stories', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvxRR5YOQr7Y7DqhX1eOuqCf31aPv7UXGEw&s' },
    { title: 'Moral Fables', imgSrc: 'https://www.care.com/c/wp-content/uploads/sites/2/2023/08/moral-stories-18.png' },
    { title: 'Moral Storybook 1', imgSrc: 'https://rukminim2.flixcart.com/image/850/1000/kwcfngw0/book/0/n/p/moral-story-book-illustrated-story-book-for-kids-1-original-imag9fnf6pcargfc.jpeg?q=90&crop=false' },
    { title: 'Moral Storybook 2', imgSrc: 'https://www.mommyinme.com/wp-content/uploads/2018/06/story-books-kids.003-243x300.jpeg' }
  ],
  'Fairytale': [
    { title: 'The Frog Prince', imgSrc: 'https://www.splashlearn.com/blog/wp-content/uploads/2024/06/the-frog-prince.jpeg' },
    { title: 'Cinderella', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZeKUwdY5NKsVOVA_O-Yujf1EwhjeksBwX2g&s' },
    { title: 'Snow White', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzbjqqfV3gw0XBHFRwFd813JBA6HorHAloQ&s' },
    { title: 'Hansel and Gretel', imgSrc: 'https://www.splashlearn.com/blog/wp-content/uploads/2024/06/hansel-the-gretel.jpeg' },
    { title: 'The Little Blue Bridge', imgSrc: 'https://imaginationsoup.net/wp-content/uploads/2021/06/The-Little-Blue-Bridge-715x988.jpeg' },
    { title: 'Little Red Riding Hood', imgSrc: 'https://www.splashlearn.com/blog/wp-content/uploads/2024/06/little-red-riding-hood.jpeg' },
    { title: 'Jack and the Beanstalk', imgSrc: 'https://www.splashlearn.com/blog/wp-content/uploads/2024/06/jack-the-beanstalk.jpeg' }
  ],
  'Princess': [
    { title: 'Royal Princess', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaw6xlCV67eEOfdoKfbBhn3mIRoXkW0REwkA&s' },
    { title: 'Princess Adventures', imgSrc: 'https://i.pinimg.com/474x/9a/67/59/9a67593a3a2317b51b331cb1010c39b1.jpg' },
    { title: 'Enchanted Princess', imgSrc: 'https://i.ytimg.com/vi/GyTlKFmqMzs/hqdefault.jpg' },
    { title: 'Fairy Tale Princess', imgSrc: 'https://lzd-img-global.slatic.net/g/p/8f1803775797d450707668a0963dc82a.jpg_360x360q75.jpg_.webp' },
    { title: 'The Princess and the Frog', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvTe4b_pIkSHXVKu8W378u3mrSeXVRU0Ri6w&s' },
    { title: 'Princess Book 1', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEPisV4SiF44L3GVKIIK5DhdyWdE6ud1nCg&s' },
    { title: 'Princess Book 2', imgSrc: 'https://m.media-amazon.com/images/I/51k1WAgnqpL._AC_UF1000,1000_QL80_.jpg' }
  ],
  'Adventure': [
    { title: 'Jungle Adventure', imgSrc: 'https://m.media-amazon.com/images/I/51UljjJjlDL.jpg' },
    { title: 'Nature Quest', imgSrc: 'https://media.slidesgo.com/storage/21693435/conversions/0-nature-adventure-storybook-thumb.jpg' },
    { title: 'Lost Treasure', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGAJFwWE5G0QjwrvQIMLWiF6rU9ZGluV2EIg&s' },
    { title: 'Space Adventure', imgSrc: 'https://m.media-amazon.com/images/I/613zGLqZh6L._AC_UF1000,1000_QL80_.jpg' },
    { title: 'Mystery Island', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZJ4HZJii_9jGEXuDH_Sr-LUU3GyuSOTfXg&s' },
    { title: 'Adventure Book 1', imgSrc: 'https://m.media-amazon.com/images/I/71iqT02rHFL._AC_UF1000,1000_QL80_.jpg' },
    { title: 'Adventure Book 2', imgSrc: 'https://i.ytimg.com/vi/T_wJurzCeB0/maxresdefault.jpg' }
  ],
  'Cartoon': [
    { title: 'Cartoon Storybook 1', imgSrc: 'https://m.media-amazon.com/images/I/910Zg0eFAGL._AC_UF1000,1000_QL80_.jpg' },
    { title: 'Cartoon Storybook 2', imgSrc: 'https://images.squarespace-cdn.com/content/v1/5e6a6a2cba7667377af05556/1605713252828-BDP6M999G07QPX0MKRO6/thumbail+image.png' },
    { title: 'Cartoon Storybook 3', imgSrc: 'https://m.media-amazon.com/images/I/81kViObvOAL._AC_UF1000,1000_QL80_.jpg' },
    { title: 'Cartoon Storybook 4', imgSrc: 'https://m.media-amazon.com/images/I/71OE1VKBj9L._AC_UF1000,1000_QL80_.jpg' },
    { title: 'Cartoon Storybook 5', imgSrc: 'https://rukminim2.flixcart.com/image/850/1000/knoxnrk0/book/g/o/u/doraemon-s-adventures-at-the-farm-original-imag2beqvxr3gkvz.jpeg?q=20&crop=false' },
    { title: 'Cartoon Storybook 6', imgSrc: 'https://m.media-amazon.com/images/I/71Uet8CExsL._AC_UF1000,1000_QL80_.jpg' },
    { title: 'Cartoon Storybook 7', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJiteY_E8ZY5HLK64rm7xnxQFkky2_ikbAw&s' }
  ]
};

const Storyteller = () => {
  return (
    <div className="storyteller">
      {Object.keys(genres).map((genre) => (
        <div className="genre-section" key={genre}>
          <h2 className="genre-title">{genre}</h2>
          <div className="book-container">
            {genres[genre].map((book, index) => (
              <div className="book-card" key={index}>
                <img className="book-image" src={book.imgSrc} alt={book.title} />
                <p className="book-title">{book.title}</p>
              </div>
            ))}
          </div>
          <button className="more-button">More</button>
        </div>
      ))}
    </div>
  );
};

export default Storyteller;
