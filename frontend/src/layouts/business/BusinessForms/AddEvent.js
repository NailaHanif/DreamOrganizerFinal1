/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import BasicLayout from "layouts/business/authentication/components/BasicLayout";
import Socials from "layouts/business/authentication/components/Socials";
import Separator from "layouts/business/authentication/components/Separator";

// Images
import curved6 from "assets/images/curved-images/form.jpg";

function Form() {
  const [agreement, setAgremment] = useState(true);

  const handleSetAgremment = () => setAgremment(!agreement);

  return (
    <BasicLayout
      // title="Welcome!"
      // description="Use these awesome forms to login or create new account in your project for free."
      image={curved6}
    >
      <Card>
        <SoftBox p={2} mb={1} textAlign="center">  {/* view k lia isy use kia*/}
          <SoftTypography variant="h5" fontWeight="medium">   {/* view k lia isy use kia*/}
            Add New Event
          </SoftTypography>
        </SoftBox>
     <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form">
            <SoftBox mb={2}>
              <SoftInput placeholder="Product Name" />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput  placeholder="Product Desription" />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput  placeholder="Product Price" />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput  placeholder="Image" />
            </SoftBox>
             {/* <SoftBox display="flex" alignItems="center">
              <Checkbox checked={agreement} onChange={handleSetAgremment} />
              <SoftTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetAgremment}
                sx={{ cursor: "poiner", userSelect: "none" }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </SoftTypography>
              <SoftTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                textGradient
              >
                Terms and Conditions
              </SoftTypography> 
            </SoftBox> */}
            <SoftBox mt={4} mb={1}>
              <SoftButton variant="gradient" color="info" fullWidth>
                Add New Event
              </SoftButton>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default Form;
