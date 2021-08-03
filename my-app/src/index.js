import React from "react";
import reactDom from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
};

const Image = () => (
  <img src='https://images-na.ssl-images-amazon.com/images/I/41wBo8-XN7L._AC_SX368_.jpg' />
);

const Title = () => <h1>The Official SAT Guide Book</h1>;

const Author = () => <h4>Ali Usama Nawaz</h4>;

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hello World")
//   );
// };

reactDom.render(<BookList />, document.getElementById("root"));
