import {useState} from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import {ImportContacts} from "@mui/icons-material";
import {Link} from "react-router-dom";

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    function getTitle(): string {
        if (location.pathname === '/CS4227-project/swaps') {
            return "Your Skill Swaps";
        } else {
            return "Home";
        }
    }

    return (
        <>
            <AppBar sx={{bgcolor: '#f7535a'}}>
                <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <IconButton edge="start" aria-label="menu" style={{marginRight: '10px'}}
                                    onClick={handleDrawerOpen}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography fontWeight="bold" variant="h6" style={{color: 'black'}}>
                            {getTitle()}
                        </Typography>
                    </div>
                    <Link to="/CS4227-project/home" style={{textDecoration: 'none', color: 'black'}}>
                        <Typography fontWeight="bold" variant="h6" style={{color: 'black'}}>
                            Skill Swap
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerClose}
                sx={{'& .MuiDrawer-paper': {backgroundColor: '#f7535a'}}}
            >
                <List style={{backgroundColor: '#f7535a'}}>
                    {/* Home Page */}
                    <Link to="/CS4227-project/home" style={{textDecoration: 'none', color: 'black'}}>
                        <ListItem onClick={handleDrawerClose}
                                  sx={{
                                      '&:hover': {
                                          backgroundColor: '#e13d4e',
                                          transition: 'background-color 0.5s ease',
                                      },
                                  }}>
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Home"/>
                        </ListItem>
                    </Link>
                    {/* Profile Page */}
                    <Link to="/CS4227-project" style={{textDecoration: 'none', color: 'black'}}>
                        <ListItem onClick={handleDrawerClose}
                                  sx={{
                                      '&:hover': {
                                          backgroundColor: '#e13d4e',
                                          transition: 'background-color 0.5s ease',
                                      },
                                  }}>
                            <ListItemIcon>
                                <AccountCircleIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Profile"/>
                        </ListItem>
                    </Link>
                    {/* Skill Swaps Page */}
                    <Link to="/CS4227-project/swaps" style={{textDecoration: 'none', color: 'black'}}>
                        <ListItem onClick={handleDrawerClose}
                                  sx={{
                                      '&:hover': {
                                          backgroundColor: '#e13d4e',
                                          transition: 'background-color 0.5s ease',
                                      },
                                  }}>
                            <ListItemIcon>
                                <ImportContacts/>
                            </ListItemIcon>
                            <ListItemText primary="Your Skill Swaps"/>
                        </ListItem>
                    </Link>
                    {/* Notifications Page */}
                    <Link to="/CS4227-project" style={{textDecoration: 'none', color: 'black'}}>
                        <ListItem onClick={handleDrawerClose}
                                  sx={{
                                      '&:hover': {
                                          backgroundColor: '#e13d4e',
                                          transition: 'background-color 0.5s ease',
                                      },
                                  }}>
                            <ListItemIcon>
                                <NotificationsIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Notifications"/>
                        </ListItem>
                    </Link>
                    {/* Settings Page */}
                    <Link to="/CS4227-project" style={{textDecoration: 'none', color: 'black'}}>
                        <ListItem onClick={handleDrawerClose}
                                  sx={{
                                      '&:hover': {
                                          backgroundColor: '#e13d4e',
                                          transition: 'background-color 0.5s ease',
                                      },
                                  }}>
                            <ListItemIcon>
                                <SettingsIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Settings"/>
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
        </>
    );
}