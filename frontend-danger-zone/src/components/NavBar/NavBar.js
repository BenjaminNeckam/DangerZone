import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from "./Drawer";

export default function NavBar({title = "Danger Zone"}) {
    const [state, setState] = React.useState({
        left: false,
    });

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Drawer setState={setState} state={state}/>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, paddingLeft: "1.5rem" }}
                    >
                        <MenuIcon onClick={() => {
                            setState({left: true,})
                        }}/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
