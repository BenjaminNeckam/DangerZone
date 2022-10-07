import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {useNavigate} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

export default function TemporaryDrawer({state, setState}) {

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const links = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "Adventure List",
            link: "/overview"
        },
        {
            title: "Support",
            link: "/support"
        }
    ]

    const navigate = useNavigate();


    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {links.map((item, index) => (
                    <>
                    <ListItem key={item.title}>
                        {index === 0 ? <HomeIcon/> : index === 1 ? <FormatListBulletedIcon/> : <HelpCenterIcon/>}
                        <ListItemButton onClick={() => {navigate(item.link)}}>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
        </Box>
    );


    return (
        <div>
            <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}>
                {list("left")
                     }
            </Drawer>
        </div>
    );
}
