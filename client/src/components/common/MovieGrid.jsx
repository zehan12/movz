import { Col } from "antd"
import { Fragment } from "react"

const MovieGrid = (props) => {
    const { image, movieId,movieName  } = props;
    return(
        <Fragment>
            <Col lg={6} md={8} xs={24}>
                <div className="relative">
                    <a href="http://">
                        <img
                            alt=""
                            src={image}
                            />
 
                    </a>
                </div>
            </Col>
        </Fragment>
    )
}

export default MovieGrid;