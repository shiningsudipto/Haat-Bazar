
import { useParams } from "react-router-dom";

const Details = () => {
    const id = useParams();

    console.log(id);
    return (
        <div className="detailsBanner mb-5 position-relative"> {/* Adjusted class name */}
            <div className="text-white text-uppercase py-5">
                <div className="py-5 text-center">
                    <h1>CAMEL-</h1>
                    <h1>Lorem, ipsum dolor.</h1>
                </div>
                <div className="position-absolute bottom-0 end-0">
                    <p className="m-4 fw-bold">icon AD POSTED: <span className="fw-medium">13-06-2023</span></p>
                </div>
            </div>
        </div>
    );
};

export default Details;