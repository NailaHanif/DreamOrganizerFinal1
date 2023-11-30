/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Author({ image, name, email }) {
  return (
    <SoftBox display="flex" alignItems="center" px={2} py={2}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "customer", align: "left" },
    { name: "phonenumber", align: "center" },
    { name: "address", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      customer: <Author image={team2} name="John Michael" email="john@gmail.com" />,
     // Bussiness: <Function job="BussinessMan" org="ImportExport" />,
      phonenumber: (
        <SoftBadge
          variant="secondary"
          badgeContent="+91 3187602197"
          color="secondary"
          size="xs"
          container
        />
      ),
      address: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          45PV+35C, Grand Trunk Rd, Khalid Colony, Lahore,
          <br />
          Punjab
        </SoftTypography>
      ),
      action: (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SoftTypography>
            <EditIcon
              sx={{
                color: "#3944BC",
                fontSize: 26,
                fontWeight: "medium",
                border: "1px solid #3944BC",
                marginRight: 2,
                cursor: "pointer",
              }}
            />
          </SoftTypography>
          <SoftTypography>
            <DeleteIcon
              sx={{
                color: "#4d0000",
                fontSize: 26,
                fontWeight: "medium",
                border: "1px solid #4d0000",
                marginRight: 2,
                cursor: "pointer",
              }}
            />
          </SoftTypography>
        </div>
      ),
    },
    {
      customer: <Author image={team3} name="Alexa Liras" email="alexa@gmail.com" />,
     // Bussiness: <Function job="BussinessMan" org="Shop" />,
      phonenumber: (
        <SoftBadge
          variant="secondary"
          badgeContent="+91 3187602197"
          color="secondary"
          size="xs"
          container
        />
      ),
      address: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          Muslim Rd, Islampura, Gujranwala, Punjab 50250
        </SoftTypography>
      ),
      action: (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SoftTypography>
            <EditIcon
              sx={{
                color: "#3944BC",
                fontSize: 26,
                fontWeight: "medium",
                border: "1px solid #3944BC",
                marginRight: 2,
                cursor: "pointer",
              }}
            />
          </SoftTypography>
          <SoftTypography>
            <DeleteIcon
              sx={{
                color: "#4d0000",
                fontSize: 26,
                fontWeight: "medium",
                border: "1px solid #4d0000",
                marginRight: 2,
                cursor: "pointer",
              }}
            />
          </SoftTypography>
        </div>
      ),
    },
    {
      customer: <Author image={team4} name="Laurent Perrier" email="laurent@gmail.com" />,
     // Bussiness: <Function job="BussinessMan" org="Factory" />,
      phonenumber: (
        <SoftBadge
          variant="secondary"
          badgeContent="+91 3187602197"
          color="secondary"
          size="xs"
          container
        />
      ),
      address: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          Plot 103B, General Bus Stand Rd, Model Town, Gujranwala,
          <br />
          Punjab
        </SoftTypography>
      ),
      action: (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SoftTypography>
            <EditIcon
              sx={{
                color: "#3944BC",
                fontSize: 26,
                fontWeight: "medium",
                border: "1px solid #3944BC",
                marginRight: 2,
                cursor: "pointer",
              }}
            />
          </SoftTypography>
          <SoftTypography>
            <DeleteIcon
              sx={{
                color: "#4d0000",
                fontSize: 26,
                fontWeight: "medium",
                border: "1px solid #4d0000",
                marginRight: 2,
                cursor: "pointer",
              }}
            />
          </SoftTypography>
        </div>
      ),
    },
    {
      customer: <Author image={team3} name="Michael Levi" email="michael@gmail.com" />,
     // Bussiness: <Function job="BussinessMan" org="ShowRoom" />,
      phonenumber: (
        <SoftBadge
          variant="secondary"
          badgeContent="+91 3187602197"
          color="secondary"
          size="xs"
          container
        />
      ),
      address: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          Chohan Road, link Jinnah Rd, near Dhullah Police station,
          <br />
          Shaheenabad, Gujranwala, Punjab 52250
        </SoftTypography>
      ),
      action: (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SoftTypography>
            <EditIcon
              sx={{
                color: "#3944BC",
                fontSize: 26,
                fontWeight: "medium",
                border: "1px solid #3944BC",
                marginRight: 2,
                cursor: "pointer",
              }}
            />
          </SoftTypography>
          <SoftTypography>
            <DeleteIcon
              sx={{
                color: "#4d0000",
                fontSize: 26,
                fontWeight: "medium",
                border: "1px solid #4d0000",
                marginRight: 2,
                cursor: "pointer",
              }}
            />
          </SoftTypography>
        </div>
      ),
    },
  ],
};

export default authorsTableData;

// //temp
// /* eslint-disable react/prop-types */
// // Soft UI Dashboard React components
// import SoftBox from "components/SoftBox";
// import SoftTypography from "components/SoftTypography";
// import SoftAvatar from "components/SoftAvatar";
// import SoftBadge from "components/SoftBadge";

// // Images
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

// function Author({ image, name, email }) {
//   return (
//     <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
//       <SoftBox mr={2}>
//         <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
//       </SoftBox>
//       <SoftBox display="flex" flexDirection="column">
//         <SoftTypography variant="button" fontWeight="medium">
//           {name}
//         </SoftTypography>
//         <SoftTypography variant="caption" color="secondary">
//           {email}
//         </SoftTypography>
//       </SoftBox>
//     </SoftBox>
//   );
// }

// function Function({ job, org }) {
//   return (
//     <SoftBox display="flex" flexDirection="column">
//       <SoftTypography variant="caption" fontWeight="medium" color="text">
//         {job}
//       </SoftTypography>
//       <SoftTypography variant="caption" color="secondary">
//         {org}
//       </SoftTypography>
//     </SoftBox>
//   );
// }

// const authorsTableData = {
//   columns: [
//     { name: "customer", align: "left" },
//     { name: "function", align: "left" },
//     { name: "status", align: "center" },
//     { name: "employed", align: "center" },
//     { name: "action", align: "center" },
//   ],

//   rows: [
//     {
//       customer: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
//       function: <Function job="Manager" org="Organization" />,
//       status: (
//         <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
//       ),
//       employed: (
//         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
//           23/04/18
//         </SoftTypography>
//       ),
//       action: (
//         <SoftTypography
//           component="a"
//           href="#"
//           variant="caption"
//           color="secondary"
//           fontWeight="medium"
//         >
//           Edit
//         </SoftTypography>
//       ),
//     },
//     {
//       customer: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
//       function: <Function job="Programator" org="Developer" />,
//       status: (
//         <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
//       ),
//       employed: (
//         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
//           11/01/19
//         </SoftTypography>
//       ),
//       action: (
//         <SoftTypography
//           component="a"
//           href="#"
//           variant="caption"
//           color="secondary"
//           fontWeight="medium"
//         >
//           Edit
//         </SoftTypography>
//       ),
//     },
//     {
//       customer: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
//       function: <Function job="Executive" org="Projects" />,
//       status: (
//         <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
//       ),
//       employed: (
//         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
//           19/09/17
//         </SoftTypography>
//       ),
//       action: (
//         <SoftTypography
//           component="a"
//           href="#"
//           variant="caption"
//           color="secondary"
//           fontWeight="medium"
//         >
//           Edit
//         </SoftTypography>
//       ),
//     },
//     {
//       customer: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
//       function: <Function job="Programator" org="Developer" />,
//       status: (
//         <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
//       ),
//       employed: (
//         <SoftTypography variant="caption" color="secondary" fontWeight="medium">
//           24/12/08
//         </SoftTypography>
//       ),
//       action: (
//         <SoftTypography
//           component="a"
//           href="#"
//           variant="caption"
//           color="secondary"
//           fontWeight="medium"
//         >
//           Edit
//         </SoftTypography>
//       ),
//     }
//   ],
// };

// export default authorsTableData;
