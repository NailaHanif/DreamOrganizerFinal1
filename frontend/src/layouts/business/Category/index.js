import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

function Category() {
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [categoryDetails, setCategoryDetails] = useState(null);
  const [newCategoryImage, setNewCategoryImage] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [imgErr, setImgErr] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const params = useParams();
  const categoryId = params.id;
  const isAddButtonDisabled = () => {
    if (!newCategoryName || !newCategoryImage) {
      return true;
    }
    return false;
  };
  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };
  const viewAllCategories = () => {
    axios
      .get("http://localhost:8888/viewAllCategories")
      .then((response) => {
        console.log(response.data);
        const categoriesData = response.data;

        console.log("Fetched data:", categoriesData);
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
    const formData = new FormData();
    formData.append("category_name", newCategoryName);
    formData.append("category_image", newCategoryImage);
    axios
      .post("http://localhost:8888/addCategory", formData, {
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
        if (response.data.error === "Duplicate category name") {
          alert("Category name already exists. Please choose a different name.");
        } else if (response.data.error === "Duplicate category image") {
          alert("Category image already exists. Please choose a different image.");
        }
        viewAllCategories();
        setNewCategoryImage("");
        setNewCategoryName("");
        setSelectedCategory(null); // Move this line inside the .then block
      })
      .catch(function (error) {
        // Handle error
        console.error(error);
        // You might want to set the state here too, depending on your use case
      });
  };
  const handleDeleteCategory = async (categoryId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this category?");

    if (confirmDelete) {
      try {
        const response = await axios.delete(`http://localhost:8888/deleteCategory/${categoryId}`);
        console.log(response.data);

        if (response.data.success) {
          console.log("Category deleted successfully");

          alert("Category deleted successfully");

          viewAllCategories();
        } else {
          console.log("Failed to delete category");
        }
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    }
  };
  const fetchCategory = async (categoryId) => {
    try {
      console.log("id:", categoryId);
      let result = await axios.get(`http://localhost:8888/fetchCategory/${categoryId}`);
      setNewCategoryName(result.data.category_name);
      setNewCategoryImage(result.data.category_image);

      console.log("Name:", newCategoryName);
      console.log("Image:", newCategoryImage);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateCategory = async (categoryId) => {
    try {
      await fetchCategory(categoryId);
      setShowUpdateForm(true);

      const formData = new FormData();
      formData.append("category_name", newCategoryName);

      if (newCategoryImage) {
        formData.append("category_image", newCategoryImage);
      }

      const result = await axios.put(
        `http://localhost:8888/updateCategory/${categoryId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("data updated successfully");

      viewAllCategories();

      // Close the update form
      setShowUpdateForm(false);

      console.log("updated");
      console.log("server:", result);
    } catch (error) {
      console.error(error);
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
              <SoftButton
                onClick={() => {
                  toggleAddForm();
                }}
                variant="gradient"
                color="info"
              >
                Add New Category
              </SoftButton>
            </SoftBox>

            {showAddForm && (
              <Card style={{ width: 300, margin: "0 auto" }}>
                <SoftBox pt={2} pb={3} px={3}>
                  <SoftBox component="form" role="form">
                    <SoftBox mb={2}>
                      <SoftTypography>Name</SoftTypography>
                      <SoftInput
                        style={{ width: 180, height: 50 }}
                        placeholder="Category Name"
                        value={categoryDetails ? categoryDetails.category_name : newCategoryName}
                        name="category_name"
                        onChange={(e) => {
                          setNewCategoryName(e.target.value);
                        }}
                      />
                      <SoftBox>
                        <SoftTypography>Image</SoftTypography>
                        <input
                          type="file"
                          placeholder="Category Image"
                          name="category_image"
                          onChange={(e) => {
                            if (e.target.files[0] != null && e.target.files[0] != "") {
                              setNewCategoryImage(e.target.files[0]);
                            } else {
                              alert("please add a picture");
                            }
                          }}
                        />
                      </SoftBox>
                    </SoftBox>
                    <SoftBox mt={4} mb={1}>
                      <SoftButton
                        variant="gradient"
                        color="info"
                        fullWidth
                        onClick={() => {
                          handleAddCategory();
                          setShowAddForm(false);
                        }}
                        disabled={isAddButtonDisabled()}
                      >
                        Add category
                      </SoftButton>
                    </SoftBox>
                  </SoftBox>
                </SoftBox>
              </Card>
            )}
            {showUpdateForm && (
              <Card style={{ width: 300, margin: "0 auto" }}>
                <SoftBox pt={2} pb={3} px={3}>
                  <SoftBox component="form" role="form">
                    <SoftBox mb={2}>
                      <SoftTypography>Name</SoftTypography>
                      <SoftInput
                        style={{ width: 180, height: 50 }}
                        placeholder="Category Name"
                        value={newCategoryName}
                        name="category_name"
                        onChange={(e) => {
                          setNewCategoryName(e.target.value);
                        }}
                      />
                      <SoftBox>
                        <SoftTypography>Image</SoftTypography>
                        <input
                          type="file"
                          placeholder="Category Image"
                          name="category_image"
                          onChange={(e) => {
                            if (e.target.files[0] != null && e.target.files[0] != "") {
                              setNewCategoryImage(e.target.files[0]);
                            } else {
                              alert("please add a picture");
                            }
                          }}
                        />
                      </SoftBox>
                    </SoftBox>
                    <SoftBox mt={4} mb={1}>
                      <SoftButton
                        variant="gradient"
                        color="info"
                        fullWidth
                        onClick={() => {
                          handleUpdateCategory(selectedCategoryId);
                          setShowUpdateForm(false);
                        }}
                        disabled={isAddButtonDisabled()}
                      >
                        Update category
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
                          <td>{index + 1}</td>
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
                            <SoftButton
                              onClick={() => {
                                handleUpdateCategory(category._id);
                                setSelectedCategoryId(category._id);
                                setShowUpdateForm(true);
                              }}
                            >
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
