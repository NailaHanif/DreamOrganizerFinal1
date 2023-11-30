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
import authorsTableData from "./data/authorsTableData";
import Sidenav from "examples/Sidenav";
import shopRoutes from "routes/shopRoutes";
// import projectsTableData from "./data/projectsTableData";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Customer() {
 const [row,setRow]=useState([])
  // const { columns: prCols, rows: prRows } = projectsTableData;
  const [customers, setCustomers] = useState([]);
 
  const handleDelete = (customerId) => {
    console.log('Deleting customer with ID:', customerId);
    axios.delete(`http://localhost:8888/deleteCustomer/${customerId}`)
      .then((response) => {
        console.log('Delete response:', response.data);
        if (response.data.success) {
          console.log('Customer deleted successfully');
          // Update the state or fetch the updated customer list
          // Example: setCustomers(updatedCustomers);
          alert('Customer deleted successfully'); // Add an alert
          window.location.reload(); // Reload the page
        } else {
          console.error(response.data.message);
          alert('Error deleting customer: ' + response.data.message); // Add an alert
        }
      })
      .catch((error) => {
        console.error('Error deleting customer:', error);
        alert('Error deleting customer: ' + error.message); // Add an alert
      });
  };
  
  
  const viewAllCustomers=()=>{
    axios.get('http://localhost:8888/viewAllCustomers')
    .then((response) => {
      const customersData = response.data;
      
      console.log('Fetched data:', customersData); // Log the retrieved data
      setCustomers(customersData); // Update the state with the fetched data
    })
    .catch((error) => {
      console.error('Error fetching user data:', error);
    });
  }
  useEffect(() => {
    viewAllCustomers()
   
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
              <SoftTypography variant="h6"> customer List</SoftTypography>
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
  customers.map((item, index) => (
    <tr key={index}>
      <td>{item._id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>
        {/* Add action buttons, e.g., edit or delete */}
       
        <button className="btn btn-danger" onClick={() => handleDelete(item._id)}>Delete</button>
      </td>
    </tr>
  ))
}


        </tbody>
      </table>
    </div>
            </Card>
            {/* <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={rows} />
            </SoftBox> */}
          </Card>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Customer;
