import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [loading, setLoading] = useState(false);
  if (loading) {
    return <h1>Loading</h1>;
  }
  return <h1>Multiple Loading</h1>;
};

export default MultipleReturns;
