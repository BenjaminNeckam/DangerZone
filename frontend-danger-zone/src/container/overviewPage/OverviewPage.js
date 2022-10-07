import React from "react";
import {Grid} from "@mui/material";

import ActionAreaCard from "../../components/Card/Card";
import NavBar from "../../components/NavBar/NavBar";
import { trips } from "../../assets/trips";

export function OverviewPage () {
    return(
        <Grid container spacing={2}>
            <NavBar title="Adventures"/>
            {trips.map(trip => (
                <Grid item xxs={12} key={trip.title}>
                    <ActionAreaCard image={"/images/" + trip.image} title={trip.title} description={trip.description} subtitle={trip.subtitle} dangerousness={trip.dangerousness}>
                    </ActionAreaCard>
                </Grid>
            ))}
        </Grid>
    )
}
