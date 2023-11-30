import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import SoftBox from "components/SoftBox";   //div,/view
import SoftTypography from "components/SoftTypography"; //text
import SoftInput from "components/SoftInput"; //input
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Sidenav from "examples/Sidenav";
import SoftButton from "components/SoftButton";
import shopRoutes from "routes/shopRoutes";
import "../tableData.css";
import SoftAvatar from "components/SoftAvatar";

function subCategory() {
  const [subcategories, setSubcategories] = useState([]);
const [showSubcategories, setShowSubcategories] = useState(false);
  const [categories, setCategories] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
const [newSubCategoryName, setNewSubCategoryName] = useState("");
const [newSubCategoryImage, setNewSubCategoryImage] = useState("");
const [subCategoryNameErr, setSubCategoryNameErr] = useState("");
const [subCategoryImgErr, setSubCategoryImgErr] = useState("");

const addSubCategory = () => {
  if (!selectedCategory) {
    console.error("No category selected");
    return;
  }
  console.log("selectedCategory:", selectedCategory);
  setShowAddForm(true)
  // Validation logic (you can customize this based on your requirements)
  if (!newSubCategoryName.trim()) {
    setSubCategoryNameErr("Subcategory name is required");
    return;
  }
  if (!newSubCategoryImage) {
    setSubCategoryImgErr("Subcategory image is required");
    return;
  }

  // If validation passes, make an API request to add the subcategory
  const formData = new FormData();
  formData.append("subCategory_name", newSubCategoryName);
  formData.append("subCategory_image", newSubCategoryImage);
  formData.append("category", selectedCategory._id);
 console.log(selectedCategory._id)
 axios.post("http://localhost:8888/addSubCategory", formData)
  .then((response) => {
    console.log(response.data);
    // Optionally, update the state or perform any other actions
    // For example, you may want to refresh the list of subcategories
    viewSubCategories(selectedCategory._id);
    // Clear the form fields
    setNewSubCategoryName("");
    setNewSubCategoryImage("");
    setSubCategoryNameErr("");
    setSubCategoryImgErr("");
    // Hide the add form
    setShowAddForm(false);
  })
  .catch((error) => {
    console.error("Error adding subcategory:", error);
    // Handle errors as needed
  });

};

// ... (previous code)

{showSubcategories && (
  <div>
    <p>Subcategories:</p>
    <ul>
      {subcategories.map((subcategory, index) => (
        <li key={index}>{subcategory.subCategory_name}</li>
      ))}
    </ul>
  </div>
)}

{showAddForm && (
  <div>
    <h3>Add New Subcategory</h3>
    <div>
      <SoftInput
        label="Subcategory Name"
        value={newSubCategoryName}
        onChange={(e) => setNewSubCategoryName(e.target.value)}
      />
      {subCategoryNameErr && <p style={{ color: "red" }}>{subCategoryNameErr}</p>}
    </div>
    <div>
      <SoftInput
        type="file"
        label="Subcategory Image"
        onChange={(e) => setNewSubCategoryImage(e.target.files[0])}
      />
      {subCategoryImgErr && <p style={{ color: "red" }}>{subCategoryImgErr}</p>}
    </div>
    <div>
      <SoftButton onClick={addSubCategory}>Add Subcategory</SoftButton>
    </div>
  </div>
)}

// ... (remaining code)

  const viewAllCategories = () => {
    axios
      .get("http://localhost:8888/viewAllCategories")
      .then((response) => {
        console.log(response.data);
        const categoriesData = response.data;

        console.log("Fetched data:", categoriesData); // Log the retrieved data
        setCategories(categoriesData); // Update the state with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };
  // ... (previous code)

const viewSubCategories = (categoryId) => {
  axios
    .get(`http://localhost:8888/viewSubCategories/${categoryId}`)
    .then((response) => {
      console.log(response.data);
      setSubcategories(response.data);
      setShowSubcategories(true);
    })
    .catch((error) => {
      console.error("Error fetching subcategories:", error);
    });
};

// ... (previous code)



// ... (remaining code)

  useEffect(() => {
    viewAllCategories();
  }, []);
 
 
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Sidenav color="info" brandName="Dream Organizer" routes={shopRoutes} />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">SubCategory List</SoftTypography>
            
              {showSubcategories && (
  <div>
    <p>Subcategories:</p>
    <ul>
      {subcategories.map((subcategory, index) => (
        <li key={index}>{subcategory.subCategory_name}</li>
      ))}
    </ul>
  </div>
)}
{showAddForm && (
  <div>
    <h3>Add New Subcategory</h3>
    <div>
      <SoftInput
        label="Subcategory Name"
        value={newSubCategoryName}
        onChange={(e) => setNewSubCategoryName(e.target.value)}
      />
      {subCategoryNameErr && <p style={{ color: "red" }}>{subCategoryNameErr}</p>}
    </div>
    <div>
      <SoftInput
        type="file"
        label="Subcategory Image"
        onChange={(e) => setNewSubCategoryImage(e.target.files[0])}
      />
      {subCategoryImgErr && <p style={{ color: "red" }}>{subCategoryImgErr}</p>}
    </div>
    <div>
      <SoftButton onClick={addSubCategory}>Add Subcategory</SoftButton>
    </div>
  </div>
)}
            </SoftBox>
            <div style={{ textAlign: "center" }}>
              {categories.length === 0 ? (
                <p>No category saved yet!</p>
              ) : (
                <div>
                  <Table className="tableData">
                    {/* Add a CSS class for styling */}
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((category, index) => (
                        <tr key={index}>
                          <td>{index+1}</td>
                          <td>{category.category_name}</td>

                          <td>
                            {category.category_image && (
                              <img
                                src={`http://localhost:8888/public/assets/images/${category.category_image}`}
                                alt={category.category_name}
                                style={{ width: "100px", height: "100px", borderRadius: 100 }}
                              />
                            )}
                          </td>
                          <td className="button-column">
                          <SoftButton onClick={() => viewSubCategories(category._id)}>
  View SubCategories
</SoftButton>

<SoftButton onClick={() => addSubCategory()}>
  Add SubCategories
</SoftButton>

                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )}
            </div>
          </Card>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default subCategory;
