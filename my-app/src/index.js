import React from "react";
import reactDom from "react-dom";
//css
import "./index.css";
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/41wBo8-XN7L._AC_SX368_.jpg",
    title: "New SAT Book",
    author: "Ali Usama Nawaz",
  },

  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/41BzGc2MBYS._SX329_BO1,204,203,200_.jpg",
    title: "Blind Tiger",
    author: "Sandra Brown",
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  const clickHandler = () => {
    alert("hello world");
  };
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1
        onClick={() => {
          console.log(`this is heading  ${title}`);
        }}
      >
        {title}
      </h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Reference
      </button>
    </article>
  );
};

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hello World")
//   );
// };

reactDom.render(<BookList />, document.getElementById("root"));
