import React from "react";
<<<<<<< HEAD
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
                    <ActionAreaCard image={"/images/" + trip.image} title={trip.title} description={trip.description} subtitle={trip.subtitle}>
=======
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
>>>>>>> 3b84d9b7b6a2614cbd8669bac30c2fe9623cf75c
                    </ActionAreaCard>
                </Grid>
            ))}
            <Grid item xxs={3}/>

        </Grid>
    )
}
