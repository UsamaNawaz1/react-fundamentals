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
      >
        <p>lorem20 adnasd jkasdjkashdjbdjkasbfsbjksdkfbsjkdfbskdb j</p>
      </Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  // const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
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
