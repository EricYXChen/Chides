import { CardContent, CardHeader, Card, Grid } from "@mui/material";
import { Button, IconButton } from "@mui/material"; // Buttons
import AddIcon from '@mui/icons-material/Add'; // Import Plus Icon
import DeleteIcon from '@mui/icons-material/Delete'; //Import Trash Button
import { TextField } from "@mui/material"; //TextField Input (Input field for creating a new Plan)
import React, { useState } from 'react' //Usestate for hiding
import Container from '@mui/material/Container';

const plans = [
    {
        Name: "Poggers",
        date: "yyyy-mm-dd",
        details: "Meet at Scarborough Town Centre at 12:00 PM EDT!!!! Chi Des!!!!!",
        Participants: "Friends"
    },
    {
        Name: "Poggers2",
        date: "yyyy-mm-dd",
        details: "ligma",
        Participants: "Friends"
    }
]
const placesVisited = [
    {
        Place: "Test1",
        dateVisted:  "yyyy-mm-dd",
        photo: "/test.jpg"
    }


]

export default function AppPlans() {
    const [showInputPlanField, setShow] = useState(false)
    const [showPlanButton, setPlanButton] = useState(true)
    return (
        <div>
            <Container maxWidth = 'false'>
                <Grid container spacing={2}>
                    {plans.map((planItem) => {
                        return (
                            <Grid item xs={3}>
                                <Card>
                                    <CardHeader title={planItem.Name}></CardHeader>
                                    <CardContent><ul><b>Date</b>: {planItem.date}</ul>
                                         <ul><b>Attendees:</b> {planItem.Participants} </ul>
                                        <ul> {planItem.details}</ul>

                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })}
                    {
                        showInputPlanField? <Grid item xs={3}>
                            <Card>
                                <CardContent>
                                    <ul><TextField id="outlined-basic" label="Event Name" variant="outlined" /></ul>
                                    <ul><TextField id="outlined-basic" label="Date" variant="outlined" /></ul>
                                    <ul><TextField id="outlined-basic" label="Details" variant="outlined" /></ul>
                                    <ul><TextField id="outlined-basic" label="Invitees" variant="outlined" /></ul>
                                    <ul><Button color="success" onClick={() => {setPlanButton(true), setShow(false)} } variant ="outlined" startIcon ={<AddIcon />}>Confirm</Button> 
                                    <Button color="error" onClick={() => {setPlanButton(true), setShow(false)} } variant="outlined" startIcon={<DeleteIcon />} sx={{paddingleft: "5px"}}>Discard</Button></ul>
                                    
                            </CardContent>
                        </Card>
                        </Grid>:null
                    }
                    {
                        showPlanButton?<Grid item xs={3}>
                                <Button onClick={() => {setPlanButton(false), setShow(true)} } variant="outlined" startIcon={<AddIcon />} sx={{ height: "240px", width: "500px" }}>
                                    Add Button
                                </Button>
                            </Grid>:null
                    }
                </Grid>
    

            </Container>
        </div >
        );
}
