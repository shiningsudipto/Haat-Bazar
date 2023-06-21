
import image from '../../assets/goat-f.png'
// import './home.css'
const Banner = () => {
    return (
        <div className='banner py-5 text-white'>
            <div className='container'>
                <div className='d-flex flex-md-row flex-column align-items-center'>
                    <div className=''>
                        <div>
                            <h2 className='display-4 display-lg-4 fw-bold'>Welcome To Haat Bazar</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aut harum rerum eos iste, exercitationem laboriosam eligendi voluptate minus excepturi quibusdam natus, quo omnis! Incidunt.</p>
                            <button className='bg-white p-2 border-0 rounded-3 fs-6 fw-medium text-uppercase'>discover now</button>
                        </div>
                    </div>
                    <div className=''>
                        <img src={image} className='image-fluid bannerImage1' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;