// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import BusinessMenu from "layouts/business/BusinessMenu";
import Cashback from "layouts/business/Cashback";
import SignIn from "layouts/business/authentication/sign-in";
import Customer from "layouts/business/customer";
import Provider from "layouts/business/Provider";
import SubCategory from "layouts/business/subCategory";
import Category from "layouts/business/Category";
import Orders from "layouts/business/orders";

import { FaList,FaWallet,FaSteamSquare,FaBoxes,FaUser,FaFirstOrder,FaQrcode,FaCalendar,FaMoneyBill,FaEdit } from 'react-icons/fa';
const shopRoutes = [
  
  // { type: "title", title: "Restaurant Management", key: "resmgt" },
  {
    type: "collapse",
    name: "Category",
    key: "category",
    route: "/category",
    icon: <FaUser size="14px" />,
    component: <Category />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "subCategory",
    key: "subCategory",
    route: "/SubCategory",
    icon: <FaWallet size="14px" />,
    component: <SubCategory />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Customers",
    key: "customers",
    route: "/customers",
    icon: <FaUser size="14px" />,
    component: <Customer />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Providers",
    key: "providers",
    route: "/providers",
    icon: <FaUser size="14px" />,
    component: <Provider />,
    noCollapse: true,
  },
  
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <FaEdit size="14px" />,
    component: <SignIn />,
    noCollapse: true,
  },
 
  { type: "title", title: "Events", key: "m&cb" },  
  {
    type: "collapse",
    name: "Orders",
    key: "orders",
    route: "/orders",
    icon: <FaFirstOrder size="18px" />,
    component: <Orders />,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "Reservations",
  //   key: "reservations",
  //   route: "/reservations",
  //   icon: <FaCalendar size="14px" />,
  //   component: <SignIn />,
  //   noCollapse: true,
  // },
  
  
];

export default shopRoutes;
