import { Fragment, useEffect } from "react";
import { AuthContextProvider } from "../contexts/auth.context";
import { UserContextProvider } from "../contexts/user.context";
import AllRoutes from "../routes/AllRoutes";

const Main = () => {
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
      <AuthContextProvider>
        <UserContextProvider>
        <AllRoutes />
        </UserContextProvider>
      </AuthContextProvider>
    </Fragment>
  );
};

export default Main;
