import { Dropdown, Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const SearchBar = () => {
    return (
        <div className="container">
            <div className="searchSection">
                <Form className="d-flex searchBar shadow-lg">
                    <button className="searchButton fw-bold"><BsSearch className="searchIcon" /></button>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="ps-4 border-0 border-0"
                        aria-label="Search"
                    />
                    <div className="locationBorder"></div>
                    <Dropdown className="locationDropdown">
                        <Dropdown.Toggle className="locationBtn"><IoLocationOutline className="locationIcon" /> Select Location</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Location 1</Dropdown.Item>
                            <Dropdown.Item>Location 2</Dropdown.Item>
                            <Dropdown.Item>Location 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>
            </div>
        </div>
    );
};

export default SearchBar;