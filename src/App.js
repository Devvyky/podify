import React from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid, Typography, Container } from "@material-ui/core";
import ButtomNavigation from "./components/BottomNavigation";

function App() {
  return (
    <Container maxWidth="sm" disableGutters="false">
      <Typography
        component="div"
        style={{ backgroundColor: "#f0f0f0", height: "90vh" }}
      />
      <Grid
        container
        direction="row"
        xs="12"
        justify="center"
        alignItems="center"
      >
        <ButtomNavigation />
      </Grid>
    </Container>

    // <div className="App">
    // </div>
  );
}

export default App;

// export default function SimpleContainer() {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="sm">
//         <Typography
//           component="div"
//           style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
//         />
//       </Container>
//     </React.Fragment>
//   );
// }
