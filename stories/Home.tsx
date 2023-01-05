import React from "react";
// import "./Home.css";

interface HomeProps {
  margin: string;
}

export const Home = ({ margin = "mx-5" }: HomeProps) => {
  return <h1 className={`text-600 ${margin}`}>Hello World</h1>;
};
