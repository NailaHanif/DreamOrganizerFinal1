// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import '../tableData.css'
// Data
import Sidenav from "examples/Sidenav";
import shopRoutes from "routes/shopRoutes";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Vendor() {

  const [vendors, setVendors] = useState([]);

 
  const handleDelete = (vendorId) => {
    console.log('Deleting vendor with ID:', vendorId);
    axios.delete(`http://localhost:8888/deleteVendor/${vendorId}`)
      .then((response) => {
        console.log('Delete response:', response.data);
        if (response.data.success) {
          console.log('vendor deleted successfully');
          // Update the state or fetch the updated vendor list
          // Example: setvendors(updatedvendors);
          alert('vendor deleted successfully'); // Add an alert
          window.location.reload(); // Reload the page
        } else {
          console.error(response.data.message);
          alert('Error deleting vendor: ' + response.data.message); // Add an alert
        }
      })
      .catch((error) => {
        console.error('Error deleting vendor:', error);
        alert('Error deleting vendor: ' + error.message); // Add an alert
      });
  };
  
  
  const viewAllVendors=()=>{
    axios.get('http://localhost:8888/viewAllVendors')
    .then((response) => {
      const vendorsData = response.data;
      console.log('Fetched data:', vendorsData); // Log the retrieved data
      setVendors(vendorsData); // Update the state with the fetched data
    })
    .catch((error) => {
      console.error('Error fetching user data:', error);
    });
  }
  useEffect(() => {
    viewAllVendors()
   
  }
  , []);
  

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Sidenav
        color="info"
        brandName="Dream Organizer"
        routes={shopRoutes}       
      /> 
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6"> vendor List</SoftTypography>
            </SoftBox>
            <Card>
            <div>
      <table className="tableData">
        <thead>
          <tr>
            <th>id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {
  vendors.map((item, index) => (
    <tr key={index}>
      <td>{item._id}</td>
      <td>{item.vendorName}</td>
      <td>{item.vendorEmail}</td>
      <td>
        <button className="button" onClick={() => handleDelete(item._id)}>Delete</button>
      </td>
    </tr>
  ))
}


        </tbody>
      </table>
    </div>
            </Card>
            
          </Card>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Vendor;
