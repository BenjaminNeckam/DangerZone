import React from "react";
import {Grid, Typography} from "@mui/material";

import dangerZone from "../../assets/danger-zone.png";
import NavBar from "../../components/NavBar/NavBar";

export function LandingPage () {
    return(
        <Grid container spacing={2}>
            <Grid item xxs={12}>
                <img src={dangerZone} alt="Logo" style={{maxWidth: "100%"}}/>
            </Grid>
            <Grid item xxs={12}>
                <Typography variant="body1">
                    Adrenalin ist dein zweiter Vorname?

                    Von bungee jumping bis Zebra Rodeo schon alles mal getestet?

                    Dann ist es Zeit für den nächsten Schritt!

                    Willkommen bei Danger Zone - Abenteuer mit finalem Kick!
                </Typography>
            </Grid>

        </Grid>
    )
}