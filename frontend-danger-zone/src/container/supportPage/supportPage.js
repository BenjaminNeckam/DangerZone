import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Button, Grid, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {useNavigate} from "react-router-dom";

export function SupportPage () {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');

    const navigate=useNavigate();

    return (
        <Grid container spacing={2}>
            <NavBar title="Support"/>
            <form onSubmit={(event) => {
                window.location.href = "mailto:support@danger-zone.com?subject=" + subject + "&body=" + "Support question from " + name + ":";
                event.preventDefault();}}>
                <Grid item xxs={10} style={{margin: "10%", alignItems: "center"}}>
                    <TextField label="Name" type="text" value={name} onChange={(event) => setName(event.target.value)} required={true}/>
                </Grid>
                <Grid item xxs={10} style={{margin: "10%", alignItems: "center"}}>
                    <TextField type="text" label="Subject" value={subject} onChange={(event) => setSubject(event.target.value)} required={true}/>
                </Grid>
                <Grid item xxs={10} style={{margin: "10%", alignItems: "center"}}>
                    <Button type="submit" value="Submit" >
                        Contact us!
                    </Button>
                </Grid>
                <Grid item xxs={12}>
                    <Button variant="outlined" startIcon={<ArrowBackIcon/>} onClick={() => navigate(-1)}>
                        Zurück
                    </Button>
                </Grid>
            </form>
        </Grid>
    );
}
