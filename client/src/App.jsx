import { Fragment, useEffect, useState } from "react";
import "./App.css";
import Login from "./page/screen/Login";

function App() {
  
  useEffect(() => {
    console.log(import.meta);
    let abortController = new AbortController();
    const fetchData = async () => {
      try {
        const res = await fetch(endpoint, {
          ...options,
          signal: abortController.signal,
        });
        const data = await res.json();
      } catch (error) {
        console.log(error.message);
        if (error.name === "AbortError") {
          console.log(error.name);
        }
      }
    };
    return () => abortController.abort();
  }, []);

  return (
    <Fragment>
      <Login />
    </Fragment>
  );
}

export default App;
