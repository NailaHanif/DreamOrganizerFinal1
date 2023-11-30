import { useState, useEffect } from "react";
// Soft UI Dashboard React examples
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// css styling
import '../../business/tableData.css'
// Soft UI Dashboard React icons
import Cube from "examples/Icons/Cube";
import Document from "examples/Icons/Document";
import Settings from "examples/Icons/Settings";
//shop routes
import shopRoutes from "routes/shopRoutes";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";

// Soft UI Dashboard React base styles
import breakpoints from "assets/theme/base/breakpoints";
import Sidenav from "examples/Sidenav";

// Images
import burceMars from "assets/images/bruce-mars.jpg";
import curved0 from "assets/images/curved-images/curved0.jpg";

// @mui material components
import { Card, Table } from "@mui/material";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "../authentication/components/Footer";
const Orders=()=>{

    const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);
  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);
  const [categories,setCatgories] =useState( [
    {
      id: 1,
      image: "https://media.timeout.com/images/106000654/750/422/image.jpg",
      name: "Wedding",
      orders: [
        { index:1,event:"wedding" },
        { index:2,event:"party" },
        { index:3,event:"birthday" },
       
      ],
      buttons: [
        { label: "Edit", backgroundColor: "#3498db" },
        { label: "View", backgroundColor: "green" },
        { label: "Delete", backgroundColor: "orange" },
      ],
    },
    {
      id: 2,
      image:
        "https://assets.cntraveller.in/photos/63d8e5103d7229d4cf308f01/16:9/w_1920,h_1080,c_limit/Prequel-lead.jpg",
      name: "Parties",
      orders: [
        { index:1,event:"wedding" },
        { index:2,event:"party" },
        { index:3,event:"birthday" },
       
      ],
      buttons: [
        { label: "Edit", backgroundColor: "#3498db" },
        { label: "View", backgroundColor: "green" },
        // { label: "Deactivate", backgroundColor: "red" },
        { label: "Delete", backgroundColor: "orange" },
      ],
    },
    {
      id: 3,
      image:
        "https://cdn-v2.theculturetrip.com/1200x900/wp-content/uploads/2022/12/louis-hansel-rheovfxoloa-unsplash.jpg",
      name: "Islamic functions",
      orders: [
        {event:"wedding" },
        { event:"party" },
        { event:"birthday" },
       
      ],
      buttons: [
        { label: "Edit", backgroundColor: "#3498db" },
        { label: "View", backgroundColor: "green" },
        // { label: "Deactivate", backgroundColor: "red" },
        { label: "Delete", backgroundColor: "orange" },
      ],
    },
    // Add more data objects as needed
    
  ]);
  const [userData,setUserData] = useState([
    {
      id: 1,
      name: 'John Doe',
      orders: [
        { event: 'Wedding', image: 'wedding.jpg' },
        { event: 'Birthday', image: 'birthday.jpg' },
      ],
    },
    {
      id: 2,
      name: 'Jane Smith',
      orders: [
        { event: 'Anniversary', image: 'anniversary.jpg' },
        { event: 'Birthday', image: 'birthday.jpg' },
      ],
    },
  ]);
  // Define state to track user actions
  const [editingUser, setEditingUser] = useState(null);
  const [updatedName, setUpdatedName] = useState('');

  // Event handlers
  const handleEditUser = (user) => {
    setEditingUser(user);
    setUpdatedName(user.name);
  };

  const handleUpdateUser = (user) => {
    // Create a copy of the userData array
    const updatedUserData = userData.map((u) => {
      if (u.id === user.id) {
        return { ...u, name: updatedName };
      }
      return u;
    });
  
    // Update the userData state with the modified data
    // You can send this data to a server or store it in a state management system
    setUserData(updatedUserData);
  
    // Reset the editingUser to null
    setEditingUser(null);
  };
  

  const handleDeleteUser = (user) => {
    // Create a copy of the userData array without the user to be deleted
    const updatedUserData = userData.filter((u) => u.id !== user.id);
  
    // Update the userData state with the modified data
    // You can send this data to a server or store it in a state management system
    setUserData(updatedUserData);
  };
  

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);
return(
    <DashboardLayout>
         <DashboardNavbar absolute dark />
    <Sidenav color="info" brandName="Dream Organizer" routes={shopRoutes} />

        <SoftBox py={3}>
            <SoftBox mb={3}>
                <Card style={{margin:20}}>
                <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Orders List</SoftTypography>
              <SoftTypography variant="h6">Completed orders</SoftTypography>
            </SoftBox>
            <div>
              <Table className="tableData">
                {/* Add a CSS class for styling */}
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Orders</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {categories.map((item) => (
  <tr key={item.id}>
   
   <td>{item.id}</td>
    <td>
      <img
        src={item.image}
        alt="Profile Image"
        style={{ height: 50, width: 50, borderRadius: 50 }}
      />
    </td>
    <td>{item.name}</td>
    <td>
                <ul className="li">
                  {item.orders.map((order, index) => (
                    <li key={index}>{order.event}</li>
                  ))}
                </ul>
              </td>
    <td>
      {item.orders.map((index,item)=>{
        <td key={index}>{item.event}</td>
      })}
    </td>
    <td className="button-column">
      {item.buttons.map((button, index) => (
        <button
          key={index}
          className='button'
          style={{ backgroundColor: button.backgroundColor }}
        >
          {button.label}
        </button>
      ))}
    </td>
  </tr>
))}

      </tbody>
              </Table>
            </div>
                </Card>
                <Card style={{margin:20}}>
                <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Orders List</SoftTypography>
              <SoftTypography variant="h6">Ongoing orders</SoftTypography>

            </SoftBox>
            <div>
              <Table className="tableData">
                {/* Add a CSS class for styling */}
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {categories.map((item) => (
  <tr key={item.id}>
   
   <td>{item.id}</td>
    <td>
      <img
        src={item.image}
        alt="Profile Image"
        style={{ height: 50, width: 50, borderRadius: 50 }}
      />
    </td>
    <td>{item.name}</td>
    <td className="button-column">
      {item.buttons.map((button, index) => (
        <button
          key={index}
          className='button'
          style={{ backgroundColor: button.backgroundColor }}
        >
          {button.label}
        </button>
      ))}
    </td>
  </tr>
))}

      </tbody>
              </Table>
            </div>
                </Card>
                <Card style={{margin:20}}>
                <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Orders List</SoftTypography>
              <SoftTypography variant="h6">cancelled orders</SoftTypography>

            </SoftBox>
            <div>
              <Table className="tableData">
                {/* Add a CSS class for styling */}
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Orders</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {categories.map((item) => (
  <tr key={item.id}>
   
   <td>{item.id}</td>
    <td>
      <img
        src={item.image}
        alt="Profile Image"
        style={{ height: 50, width: 50, borderRadius: 50 }}
      />
    </td>
    <td>{item.name}</td>
    <td>
                <ul className="li">
                  {item.orders.map((order, index) => (
                    <li key={index}>{order.event}</li>
                  ))}
                </ul>
              </td>
    <td className="button-column">
      {item.buttons.map((button, index) => (
        <button
          key={index}
          className='button'
          style={{ backgroundColor: button.backgroundColor }}

        >
          {button.label}
        </button>
      ))}
    </td>
  </tr>
))}

      </tbody>
              </Table>
            </div>
                </Card>
                <Card style={{margin:20}}>
                <div>
      <Table className="tableData">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Orders</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {user.id === editingUser?.id ? (
                  <input
                    type="text"
                    value={updatedName}
                    onChange={(e) => setUpdatedName(e.target.value)}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                <ul className="li">
                  {user.orders.map((order, index) => (
                    <li key={index}>{order.event}</li>
                  ))}
                </ul>
              </td>
              <td className="button-column">
                {user.id === editingUser?.id ? (
                  <>
                    <button className="button" onClick={() => handleUpdateUser(user)}>Update</button>
                    <button  className="button" onClick={() => setEditingUser(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button
                    className='button'
                  onClick={() => handleEditUser(user)}>Edit</button>
                    <button 
                    className='button'
                 onClick={() => handleDeleteUser(user)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
                </Card>
            </SoftBox>
        </SoftBox>
      <Footer />

    </DashboardLayout>
    
)
    
}
export default Orders
