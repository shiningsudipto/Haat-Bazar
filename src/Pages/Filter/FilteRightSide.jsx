import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { FaFilter } from "react-icons/fa";


const FilteRightSide = () => {
return (
<div >
    {/* Filter top nav option */}
    <section style={{display:'flex', justifyContent:'space-between'}}>
    <div className="filter-topnav">
        <ul className="p-0">
            <li>
                <NavLink className={"ms-2 px-5"} to={"/filter/all"}> {" "}
              ALL{" "}
            </NavLink>{" "}
          </li>
          <li>
            <NavLink className={" ms-2"} to={"/filter/instock-whole"}> {" "}
              IN STOCK-WHOLE{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className={" ms-2"} to={"/filter/instock-vagg"}> {" "}
              IN STOCK-VAGG{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className={" ms-2 px-5"} to={"/filter/sold"}> {" "}
              SOLD{" "}
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Form.Select className="" aria-label=" Default select example ">
                    <option > Short by   </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
             </Form.Select>
       </div>
     </section>

    <Outlet />
</div>
);
};

export default FilteRightSide;