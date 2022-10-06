import React from "react";
import { Chip, Grid, Stack, Typography } from "@mui/material";

import dangerZone from "../../assets/danger-zone.png";
import Button from "@mui/material/Button";
import NavBar from "../../components/NavBar/NavBar";
import { useLocation } from "react-router-dom";

export function DetailsPage () {
    const location = useLocation();
    const image = location.state?.image;
    const title = location.state?.title;
    const subtitle = location.state?.subtitle;
    const description = location.state?.description;

    return(
        <Grid container spacing={2}>
            <NavBar title={title}/>
            <Grid item xxs={12}>
                <img src={image} alt="Logo" style={{maxWidth: "100%"}}/>
            </Grid>
            <Grid item xxs={12} style={{marginBottom: "10%", alignItems: "center"}}>
                <Typography variant="h1" textAlign="center">
                    {title}
                </Typography>
                <Typography variant="h2" textAlign="center">
                    {subtitle}
                </Typography>
                {/*<Stack direction="row" spacing={1}>
                    <Chip label="primary" color="primary"/>
                    <Chip label="success" color="success"/>
                </Stack>*/}
                <Typography variant="h1" textAlign="center">
                    {description}
                </Typography>
            </Grid>
            <Grid item xxs={3}/>
            <Grid item xxs={3}/>

        </Grid>
    )
}
