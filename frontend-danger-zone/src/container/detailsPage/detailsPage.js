import React from "react";
import {Chip, Grid, Stack, Typography} from "@mui/material";

import dangerZone from "../../assets/danger-zone.png";
import Button from "@mui/material/Button";
import NavBar from "../../components/NavBar/NavBar";
import {useLocation, useNavigate} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function DetailsPage() {
    const location = useLocation();
    const image = location.state?.image;
    const title = location.state?.title;
    const subtitle = location.state?.subtitle;
    const description = location.state?.description;
    const dangerousness = location.state?.dangerousness;
    const navigate = useNavigate();

    return (
        <Grid container spacing={2}>
            <NavBar title={title}/>
            <Grid item xxs={12} justifyContent="center" display="flex">
                <img src={image} alt="Logo" style={{maxWidth: "100%"}}/>
            </Grid>
            <Grid item xxs={12} display="flex" justifyContent="center">
                {<Stack direction="row" spacing={1}>
                    <Chip label={dangerousness} color="primary"/>
                </Stack>}
            </Grid>
            <Grid item xxs={12} style={{marginBottom: "10%", alignItems: "center"}}>
                <Typography variant="h1" textAlign="center">
                    {title}
                </Typography>
                <Typography variant="h2" textAlign="center">
                    {subtitle}
                </Typography>

            <Typography variant="h1" textAlign="center">
                {description}
            </Typography>
            <Grid item xxs={12}>
                <Button variant="outlined" startIcon={<ArrowBackIcon/>} onClick={() => navigate(-1)}>
                    Zurück
                </Button>
            </Grid>
        </Grid>


</Grid>
)
}
