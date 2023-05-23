import { Fragment, useEffect } from "react";
import { Button, Result } from "antd";
import { AuthContextProvider } from "../contexts/auth.context";
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
        <AllRoutes />
        <Result
          status="success"
          title="Main App!"
          subTitle="main app display"
          extra={[
            <Button type="primary" key="console">
              Go Console
            </Button>,
            <Button key="render">rendered</Button>,
          ]}
        />
      </AuthContextProvider>
    </Fragment>
  );
};

export default Main;
