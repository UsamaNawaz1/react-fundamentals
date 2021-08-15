import React from "react";
import reactDom from "react-dom";
//css
import "./index.css";
const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41wBo8-XN7L._AC_SX368_.jpg",
    title: "New SAT Book",
    author: "Ali Usama Nawaz",
  },

  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41BzGc2MBYS._SX329_BO1,204,203,200_.jpg",
    title: "Blind Tiger",
    author: "Sandra Brown",
  },
];
const names = ["ali", "usama", "nawaz"];
const newName = names.map((name) => {
  return <h1>{name}</h1>;
});
console.log(newName);
function BookList() {
  return <section className='booklist'>{newName}</section>;
}

const Book = (props) => {
  // const { img, title, author } = props;
  return <article className='book'></article>;
};

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hello World")
//   );
// };

reactDom.render(<BookList />, document.getElementById("root"));
