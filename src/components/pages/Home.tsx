import { Fragment } from "react/jsx-runtime";
import Navbar from "../layouts/Navbar";
import Card from "@mui/material/Card";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Card sx={{p:2}}>"Success is not about the destination, but the journey taken to get there; every stumble is a step towards strength, and every setback a lesson in resilience."</Card>
    </Fragment>
  );
};

export default Home;
