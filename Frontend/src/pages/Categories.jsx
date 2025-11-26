import React, { useEffect } from "react";
import { NavLink,useNavigate,useLocation } from "react-router-dom";
import { GoFilter } from "react-icons/go";
const categories = [
  { name: "Men", path: "/categories/men" },
  { name: "Women", path: "/categories/women" },
  { name: "Electronics", path: "/categories/electronics" },
  { name: "Accessories", path: "/categories/accessories" },
  { name: "Sale", path: "/categories/sale" },
];

const Categories = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/categories") {
      navigate(categories[0].path);
    }
  }, [location, navigate]);
  return (
    <div className="w-full flex mb-10 ">
      <div className="container lg:w-1/2 px-6 mx-auto rounded-lg ">
        <h2 className="text-xl font-bold py-4 text-gray-800 flex items-center">Shop by Category <span className="ml-2 font-bold text-2xl"><GoFilter /></span></h2>

        <ul className="flex flex-col gap-3 py-3">
          {categories.map((cat) => (
            <li key={cat.name}>
              <NavLink
                to={cat.path}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition duration-200 ${
                    isActive
                      ? "text-white bg-gray-900 font-bold"
                      : "text-gray-700 hover:text-gray-500 hover:bg-gray-300"
                  }`
                }
              >
                {cat.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
