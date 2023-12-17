import React, { useState, useEffect } from "react";


import axios from "axios";
import {
  Card,
  Table,
  TableBody,
  td,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import SoftBox from "components/SoftBox"; //div,/view
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
  const buttonStyle = {
    background: 'linear-gradient(to right, #009387, #023e8a)',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  const addSubCategory = () => {
    const formData = new FormData();
    if (!newSubCategoryName.trim()) {
      setSubCategoryNameErr("Subcategory name is required");
      return;
    }
    if (!newSubCategoryImage) {
      setSubCategoryImgErr("Subcategory image is required");
      return;
    }

    // Append data to formData
    formData.append("subCategory_name", newSubCategoryName);
    formData.append("subCategory_image", newSubCategoryImage);

    axios
      .post("http://localhost:8888/addSubCategory", formData)
      .then((response) => {
        console.log(response.data);
        viewSubCategories();
        setNewSubCategoryName("");
        setNewSubCategoryImage("");
        setSubCategoryNameErr("");
        setSubCategoryImgErr("");
        setShowAddForm(false);
      })
      .catch((error) => {
        console.error("Error adding subcategory:", error);
      });
  };

  const viewSubCategories = (categoryId) => {
    axios
      .get(`http://localhost:8888/viewSubCat`)
      .then((response) => {
        console.log(response.data);
        setSubcategories(response.data);
        setShowSubcategories(true);
      })
      .catch((error) => {
        console.error("Error fetching subcategories:", error);
      });
  };

  const viewAllCategories = () => {
    axios
      .get(`http://localhost:8888/getCategories`)
      .then((response) => {
        console.log(response.data);
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  };

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
            <SoftBox
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
            >
              <SoftTypography variant="h6">SubCategory List</SoftTypography>
              <SoftButton
                onClick={() => {
                  addSubCategory();
                  setShowAddForm(true);
                }}
              >
                Add SubCategories
              </SoftButton>
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
                <div className="relative">
                  <h3>Add New Subcategory</h3>
                  <div className="bd-white p-4 w-52 shadow-lg absolute -left-14 top-24">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-info dropdown-toggle dropdown-toggle-split"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-bs-toggle="dropdown"
                      >
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <div className="dropdown-menu">
                        <ul>
                          {categories.map((category, index) => (
                            <li key={index}>
                              <button
                                className="dropdown-item"
                                onClick={() => setSelectedCategory(category)}
                              >
                                {category.category_name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {selectedCategory && (
                    <div>
                      <h4>Selected Category:</h4>
                      <p>{selectedCategory.category_name}</p>
                    </div>
                  )}
                  <div>
                    <SoftInput
                      label="Subcategory Name"
                      value={newSubCategoryName}
                      onChange={(e) => {
                        setNewSubCategoryName(e.target.value);
                        setSubCategoryNameErr("");
                      }}
                    />
                    {subCategoryNameErr && (
                      <p style={{ color: "red" }}>{subCategoryNameErr}</p>
                    )}
                  </div>
                  <div>
                    <SoftInput
                      type="file"
                      label="Subcategory Image"
                      onChange={(e) =>
                        setNewSubCategoryImage(e.target.files[0])
                      }
                    />
                    {subCategoryImgErr && (
                      <p style={{ color: "red" }}>{subCategoryImgErr}</p>
                    )}
                  </div>
                  <div>
                    <SoftButton onClick={addSubCategory}>
                      Add Subcategory
                    </SoftButton>
                  </div>
                </div>
              )}
            </SoftBox>
            <div style={{ textAlign: "center" }}>
              {categories.length === 0 ? (
                <p>No category saved yet!</p>
              ) : (
                <div className="container">
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{category.category_name}</td>
              <td>
                {category.category_image && (
                  <img
                    src={`http://localhost:8888/public/assets/images/${category.category_image}`}
                    alt={category.category_name}
                    style={{
                      width: '50px', // Adjust the width to your preference
                      height: '50px', // Adjust the height to your preference
                      objectFit: 'cover',
                      borderRadius: '50%',
                    }}
                  />
                )}
              </td>
              <td className="button-column mr-10 mb-2">
              <button
  onClick={() => viewSubCategories(category._id)}
  className="btn btn-primary mr-2 mb-2 mr-10"
>
  View SubCategories
</button>

<button
  onClick={() => {
    addSubCategory();
    setShowAddForm(true);
  }}
  className="btn btn-success mr-2 mb-2 mr-2"
>
  Add SubCategories
</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
              )}
            </div>
          </Card>
        </SoftBox>
      </SoftBox>
      <Footer />
      
<div className="container-fluid p-5" style={{ backgroundImage: 'linear-gradient(to right, #008397, #00587A)' }}>
  <h1 className="text-white">Beautiful Gradient</h1>
  <p className="text-white">This is a beautiful gradient applied using Bootstrap.</p>
</div>

<button style={buttonStyle} type="button">
      Login
    </button>
   

    </DashboardLayout>
  );
}

export default subCategory;
