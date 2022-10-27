import { Typography } from "@mui/material";
import { Link } from "react-router-dom";


export default function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }