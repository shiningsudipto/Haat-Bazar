import Banner from "./Banner";
import GridSection from "./GridSection";
import MyAds from "./MyAds";
import SearchBar from "./SearchBar";

const Home = () => {
    return (
        <div>
            <Banner />
            <SearchBar />
            <GridSection />
            <MyAds />
            <MyAds />
        </div>
    );
};

export default Home;