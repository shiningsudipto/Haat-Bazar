import GridSection from "./GridSection";
import MyAds from "./MyAds";
import SearchBar from "./SearchBar";
import Slider from "../Shared/Slider";

const Home = () => {
    return (
        <div>
            <Slider />
            <SearchBar />
            <GridSection />
            <MyAds />
            <MyAds />
        </div>
    );
};

export default Home;