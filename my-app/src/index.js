import React from "react";
import reactDom from "react-dom";
//css
import "./index.css";
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/41wBo8-XN7L._AC_SX368_.jpg",
  title: "New SAT Book",
  author: "Ali Usama Nawaz",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/41BzGc2MBYS._SX329_BO1,204,203,200_.jpg",
  title: "Blind Tiger",
  author: "Sandra Brown",
};

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.img} />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
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
