import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MaterialUISwitch from './ThemeButton';
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = ['Home','FAQ'];

function DrawerAppBar(props) {
    const [render, reRender] = React.useState(false);
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();
    

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                <ListItem key={item} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }} 
                    onClick={() => item === 'FAQ' ? navigate('/FAQ') : navigate('/')}>
                        <ListItemText primary={item} />
                    </ListItemButton>
                </ListItem>
                ))}
                    {
                        props.mode === 'light'
                        ?
                        <MaterialUISwitch 
                        onClick={() =>
                        {
                            props.mode === 'light'
                            ?
                            props.setMode('dark')
                            :
                            props.setMode('light')
                        }
                        }
                        onChange={()=> reRender(!render)}
                        />
                        :
                        <MaterialUISwitch 
                        onClick={() =>
                        {
                            props.mode === 'light'
                            ?
                            props.setMode('dark')
                            :
                            props.setMode('light')
                        }
                        }
                        onChange={()=> reRender(!render)} 
                        checked/>
                    }
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex'}}>
            <CssBaseline />
            <AppBar component="nav" color='primary'>
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                      <Button to='/FAQ' key={item} sx={{ color: '#fff' }} 
                      onClick={() => item === 'FAQ' ? navigate('/FAQ') : navigate('/')}>
                        {item}
                      </Button>
                    ))}
                    {
                        props.mode === 'light'
                        ?
                        <span style={{paddingLeft: '20px'}}> <MaterialUISwitch 
                        onClick={() =>
                        {
                            props.mode === 'light'
                            ?
                            props.setMode('dark')
                            :
                            props.setMode('light')
                        }
                        }
                        onChange={()=> reRender(!render)}
                        /></span>
                        :
                        <span style={{paddingLeft: '20px'}}> <MaterialUISwitch 
                        onClick={() =>
                        {
                            props.mode === 'light'
                            ?
                            props.setMode('dark')
                            :
                            props.setMode('light')
                        }
                        }
                        onChange={()=> reRender(!render)} 
                        checked/></span>
                    }
                    
                </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                >
                {drawer}
                </Drawer>
                
            </Box>
        </Box>
    );
}



export default DrawerAppBar;