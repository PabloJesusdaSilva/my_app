import { useState } from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material/';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleMenuClick = route => {
    navigate(route);
  }

  const [menuOpen, setMenuOpen] = useState(false);

  const handeToggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => handeToggleMenu()}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            New
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer open={menuOpen} onClose={() => handeToggleMenu()}>
        <List>
          <ListItem button onClick={() => handleMenuClick('/')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button onClick={() => handleMenuClick('/customers')}>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText>Cadastro de clientes</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Header;