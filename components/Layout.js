import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Layout(props) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Chides
            </Typography>
            <Button color="inherit" href="/auth">
              Login
            </Button>
            <Button color="inherit" href="/app">
              Dashboard
            </Button>
            <Button color="inherit" href="/app/user/username">
              Profile
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <main style={{ margin: "30px 0" }}>{props.children}</main>
    </>
  );
}
