import { Fragment, useEffect } from "react";
import { Button, Result } from 'antd';

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
    </Fragment>
  );
};

export default Main;