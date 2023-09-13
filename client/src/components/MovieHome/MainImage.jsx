import { Typography } from "antd";
import { Fragment } from "react";
const { Title } = Typography;


const MainImage = (props) => {
  const { image, title, text } = props;
  return (
    <Fragment>
      <div
        className="h-[500px] w-[100%] relative"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0)
            39%,rgba(0,0,0,0)
            41%,rgba(0,0,0,0.65)
            100%),
            url('${image}'), #1c1c1c`,
          backgroundSize: "100%, cover",
          backgroundPosition: "center, center",
        }}
      >
        <div>
          <div className="absolute max-w-[500px] bottom-[2rem] ml-[2rem]">
            <Title style={{ color: "white" }} color="white" level={2}>
              {title}
            </Title>
            <p className="text-white text-[1rem]">{text}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainImage;
