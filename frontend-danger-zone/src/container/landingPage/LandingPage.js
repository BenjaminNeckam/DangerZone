import React from "react";
import {Grid, Typography} from "@mui/material";

import dangerZone from "../../assets/danger-zone.png";
import NavBar from "../../components/NavBar/NavBar";
import Button from "@mui/material/Button";

export function LandingPage () {
    return(
        <Grid container spacing={2}>
            <Grid item xxs={12}>
                <img src={dangerZone} alt="Logo" style={{maxWidth: "100%"}}/>
            </Grid>
            <Grid item xxs={12} style={{marginBottom: "10%"}}>
                <Typography variant="body1">
                    Adrenalin ist dein zweiter Vorname?

                    Von bungee jumping bis Zebra Rodeo schon alles mal getestet?

                    Dann ist es Zeit für den nächsten Schritt!

                    Willkommen bei Danger Zone - Abenteuer mit finalem Kick!
                </Typography>
            </Grid>
            <Grid item xxs={3}/>
            <Grid item xxs={6}>
                <Button variant="contained">
                    Find your adventures
                </Button>
            </Grid>
            <Grid item xxs={3}/>

        </Grid>
    )
}