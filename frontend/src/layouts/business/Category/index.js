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

function Category() {
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryImage, setNewCategoryImage] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [imgErr, setImgErr] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const isAddButtonDisabled = () => {
    if (!newCategoryName || !newCategoryImage) {
      return true;
    }
    return false;
  };
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
  useEffect(() => {
    viewAllCategories();
  }, []);

  const handleAddCategory = () => {
    if (newCategoryName == "" || newCategoryName == null) {
      setNameErr("category name must not be null");
    }
    if (newCategoryImage == "" || newCategoryImage == null) {
      setImgErr("category image must not be null");
    }
    if (!newCategoryName || !newCategoryImage) {
      return false;
    }
   
    const formData = new FormData();
    formData.append("category_name", newCategoryName);
    formData.append("category_image", newCategoryImage);

    // Check if it's an update or add operation
    const url = selectedCategory
      ? `http://localhost:8888/updateCategory/${selectedCategory._id}`
      : "http://localhost:8888/addCategory";

    axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        console.log(response.data);

        if (response.data.save === true) {
          console.log(response.data);
          // Handle success
          console.log("data saved successfully");
        } else {
          // Handle failure
          console.log("data is not saved successfully");
        }
        // if (response.data.error === 'Duplicate category name') {
        //   alert('Category name already exists. Please choose a different name.');
        // } else if (response.data.error === 'Duplicate category image') {
        //   alert('Category image already exists. Please choose a different image.');
        // } else {
        //   alert('Failed to save data. Please try again later.');
        // }
        viewAllCategories();
        setNewCategoryImage("");
        setNewCategoryName("");
      })
      .catch(function (error) {
        // Handle error
        console.error(error);
      });

    setSelectedCategory(null);
  };

  const handleUpdateCategory = (categoryId) => {
    const categoryToUpdate = categories.find((category) => category._id === categoryId);
    setSelectedCategory(categoryToUpdate);
    setNewCategoryName(categoryToUpdate.category_name); // Add this line to update the name in the form
    setShowAddForm(true);
  };

  const handleDeleteCategory = async (categoryId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this category?");

    if (confirmDelete) {
      try {
        const response = await axios.delete(`http://localhost:8888/deleteCategory/${categoryId}`);
        console.log(response.data);

        if (response.data.success) {
          console.log("Category deleted successfully");

          // Show a success alert
          alert("Category deleted successfully");

          // Refresh the category list
          viewAllCategories();
        } else {
          console.log("Failed to delete category");
        }
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Sidenav color="info" brandName="Dream Organizer" routes={shopRoutes} />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Category List</SoftTypography>
              <SoftButton onClick={() => setShowAddForm(true)} variant="gradient" color="info">
                Add New Category
              </SoftButton>
            </SoftBox>

            {showAddForm && (
              <Card style={{ width: 300, margin: '0 auto' }}>
              <SoftBox pt={2} pb={3} px={3}>
                  <SoftBox component="form" role="form">
                <SoftBox mb={2}>
                  <SoftTypography>name</SoftTypography>
                  <SoftInput
                  style={{width:180,height:50}}
                    placeholder="Category Name"
                    value={selectedCategory ? selectedCategory.category_name : newCategoryName}
                    name="category_name"
                    onChange={(e) => {
                      setNewCategoryName(e.target.value);
                      setNameErr("");
                    }}
                  />
                  {nameErr ? (
                    <p style={{ color: "red", fontSize: 14, fontFamily: "Poppins-Regular" }}>
                      {nameErr}
                    </p>
                  ) : null}

                  <SoftBox>
                    <SoftTypography>Image</SoftTypography>
                    <input
                      type="file"
                      placeholder="Category Image"
                      name="category_image"
                      onChange={(e) => {
                        if (e.target.files[0] != null && e.target.files[0] != "") {
                          setNewCategoryImage(e.target.files[0]);
                          setImgErr("");
                        } else {
                          alert("please add a picture");
                        }
                      }}
                    />

                    {imgErr ? (
                      <div>
                        <p
                          style={{
                            color: "#FF0000",
                            fontSize: 14,
                            fontFamily: "Poppins-Regular",
                          }}
                        >
                          {imgErr}
                        </p>
                      </div>
                    ) : null}
                  </SoftBox>
                </SoftBox>
                <SoftBox mt={4} mb={1}>
                  <SoftButton
                    variant="gradient"
                    color="info"
                    fullWidth
                    onClick={() => {
                      if (selectedCategory) {
                        handleUpdateCategory(selectedCategory._id);
                      } else {
                        handleAddCategory();
                      }
                      setShowAddForm(false);
                    }}
                    disabled={isAddButtonDisabled()}
                  >
                    {selectedCategory ? "Update Category" : "Add Category"}
                  </SoftButton>
                </SoftBox>
              </SoftBox>
              </SoftBox>
              </Card>
            
            )}

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
                          <td>{category._id}</td>
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
                            <SoftButton onClick={() => handleUpdateCategory(category._id)}>
                              update
                            </SoftButton>
                            <SoftButton onClick={() => handleDeleteCategory(category._id)}>
                              delete
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

export default Category;
