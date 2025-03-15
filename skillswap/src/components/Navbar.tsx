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

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

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
                            Your Skill Swaps
                        </Typography>
                    </div>
                    <Typography fontWeight="bold" variant="h6" style={{color: 'black'}}>
                        Skill Swap
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerClose}
                sx={{'& .MuiDrawer-paper': {backgroundColor: '#f7535a'}}}
            >
                <List style={{backgroundColor: '#f7535a'}}>
                    <ListItem onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Home"/>
                    </ListItem>
                    <ListItem onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <AccountCircleIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Profile"/>
                    </ListItem>
                    <ListItem onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <ImportContacts/>
                        </ListItemIcon>
                        <ListItemText primary="Your Skill Swaps"/>
                    </ListItem>
                    <ListItem onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <NotificationsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Notifications"/>
                    </ListItem>
                    <ListItem onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <SettingsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Settings"/>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}