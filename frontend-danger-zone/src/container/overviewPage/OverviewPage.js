import React from "react";
import {Grid, Typography} from "@mui/material";

import ActionAreaCard from "../../components/Card/Card";

export function OverviewPage () {
    const animals = ["Dog", "Bird", "Cat", "Mouse", "Horse"];

    return(
        <Grid container spacing={2}>
            <Grid item xxs={12} style={{marginBottom: "10%", alignItems: "center"}}>
                <Typography variant="h1" textAlign="center">
                    Adventures
                </Typography>
            </Grid>
            {animals.map(animal => (
                <Grid item xxs={12} key={animal}>
                    <ActionAreaCard image="/danger-zone.png" title="test" description="restestet" subtitle="hallo">
                    </ActionAreaCard>
                </Grid>
            ))}
            <Grid item xxs={3}/>

        </Grid>
    )
}
