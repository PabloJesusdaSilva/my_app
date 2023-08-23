import { Container } from "@mui/material";

import Header from "../partials/header/Header";

const Default = ({ children }) => {
  return (
    <>
      <Header />
      <Container sx={{p: 2}}>
        {children}
      </Container>
    </>
  );
}

export default Default