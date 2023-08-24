import { Typography } from "@mui/material";

const Page = ({ title, Component }) => {
  return (
    <>
      <Typography variant="h2">
        {title}
      </Typography>
      <Component />
    </>
  );
}

export default Page;