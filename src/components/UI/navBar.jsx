import * as React from 'react';
import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import Link from '@mui/material/Link';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link as RouterLink } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
// import SwipeableTextMobileStepper from './Swipper';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#b8860b', // Dark golden yellow color
}));

const Sidebar = styled('div')({
  width: 300,
  backgroundColor: '#000', // Fully black background color
  color: '#fff', // White text color
});

const FilterOptions = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

export default function SearchAppBar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const filterOpen = Boolean(filterAnchorEl);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              '& > *': {
                textDecoration: 'none',
                color: 'inherit',
              },
            }}
          >
             <Link
              component={RouterLink}
              to="/login"
              color="inherit"
              sx={{ mr: 2, textDecoration: 'none' }}
            >
              Login
            </Link>
            <Link
              component={RouterLink}
              to="/home"
              color="inherit"
              sx={{ mr: 2, textDecoration: 'none' }}
            >
              Home
            </Link>
            <Link
              component={RouterLink}
              to="/about"
              color="inherit"
              sx={{ mr: 2, textDecoration: 'none' }}
            >
              About
            </Link>
            <Link
              component={RouterLink}
              to="/contact"
              color="inherit"
              sx={{ mr: 2, textDecoration: 'none' }}
            >
              Contact
            </Link>
            <Link
              component={RouterLink}
              to="/help"
              color="inherit"
              sx={{ textDecoration: 'none' }}
            >
              Help
            </Link>
            
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="filter list"
            sx={{ mr: 2 }}
            onClick={handleFilterClick}
          >
            <FilterListIcon />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </StyledAppBar>
      <Drawer anchor="left" open={openSidebar} onClose={toggleSidebar}>
        <Sidebar>
          <List>
            <ListItem button component={RouterLink} to="/profile">
              <ListItemText primary="Profile" />
            </ListItem>
            <p style={{ color: 'grey' }}>__________________________________________________</p>
            <ListItem button component={RouterLink} to="/settings">
              <ListItemText primary="Settings" />
            </ListItem>
            <p style={{ color: 'grey' }}>__________________________________________________</p>
            <ListItem button component={RouterLink} to="/bought-products">
              <ListItemText primary="Bought Products" />
            </ListItem>
            <p style={{ color: 'grey' }}>__________________________________________________</p>
            <ListItem button component={RouterLink} to="/add-to-cart">
              <ListItemText primary="Add to Cart" />
            </ListItem>
            {/* <SwipeableTextMobileStepper/>  */}
          </List>
        </Sidebar>
      </Drawer>
      <Popover
        open={filterOpen}
        anchorEl={filterAnchorEl}
        onClose={handleFilterClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <FilterOptions>
          <MenuItem onClick={handleFilterClose}>A-Z</MenuItem>
          <MenuItem onClick={handleFilterClose}>Price</MenuItem>
          <MenuItem onClick={handleFilterClose}>Brand</MenuItem>
        </FilterOptions>
      </Popover>
    </Box>
  );
}
