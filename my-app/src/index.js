import React from "react";
import reactDom from "react-dom";
//css
import "./index.css";
import { books } from "./books";

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
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}
    >
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
      <button type='button' onClick={() => complexExample(author)}>
        more complex example
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
