import { CardContent, CardHeader, Card, Grid, CardMedia, CardActions} from "@mui/material";
import { Button, IconButton } from "@mui/material"; // Buttons
import AddIcon from '@mui/icons-material/Add'; // Import Plus Icon
import DeleteIcon from '@mui/icons-material/Delete'; //Import Trash Button
import { TextField } from "@mui/material"; //TextField Input (Input field for creating a new Plan)
import React, { useState } from 'react'; //Usestate for hiding
import {Dialog, DialogTitle, DialogContent, DialogContentText} from "@mui/material";
const placesVisited = [
    {
        place: "Google HeadQuarters",
        dateVisited:  "yyyy-mm-dd",
        description:  "Google headquarters is a beautiful place that everyone needs to visit! Lovely community and atmosphere. Pog!",
        photo: "https://storeys.com/wp-content/uploads/2021/02/lifeatgoogle_28765593_578872345823723_7689751722121494528_n.jpg"
    },
    {
        place: "asdf",
        dateVisited:  "yyyy-asdfasdf-dd",
        description:  "Google headquarasdft everyone needs to visit! Lovely community and atmosphere. Pog!",
        photo: "https://storeys.com/wp-content/uploads/2021/02/lifeatgoogle_28765593_578872345823723_7689751722121494528_n.jpg"
    }
]
const newPlace = 
    {
        place: "",
        dateVisited:  "",
        description:  "",
        photo: "" 
    }


export default function AppPlans() {
    const [showVisitedField, setVisited] = useState (false)
    const [showVisistedButton, setVisitedButton] = useState (true)
    const [isOpen, setOpen] = useState(false);
    const [newPlan, setPlan] = useState("");
    const [newDate, setDate] = useState("");
    const [newImage, setImage] = useState("");
    const [newDesc, setDesc] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = (value) => {
        setOpen(false);
    }
    const handlePlanChange = e => {
        console.log('Typed => ${e.target.value}')
        setPlan(e.target.value);
    }
    const handleDateChange = e => {
        console.log('Typed => ${e.target.value}')
        setDate(e.target.value);
    }
    const handleImageChange = e => {
        console.log('Typed => ${e.target.value}')
        setImage(e.target.value);
    }
    const handleDescChange = e => {
        console.log('Typed => ${e.target.value}')
        setDesc(e.target.value);
    }
    const setNewValues = () => {
        newPlace.place = newPlan;
        newPlace.dateVisited = newDate;
        newPlace.photo = newImage;
        newPlace.description = newDesc;
        placesVisited.unshift(newPlace);

    }
    return (
        <Grid container spacing={2}>
        {placesVisited.map((planItem) => {
                return (
                    <Grid item xs={3} sx={{ maxWidth: 400 }}>
                        <Card>
                            <CardMedia component = "img" image={planItem.photo} alt = "test" height="200px" /> 
                            <CardHeader title={planItem.place}></CardHeader>
                            <CardContent>Date: {planItem.dateVisited}</CardContent>
                            <CardActions> 
                                <Button onClick={handleClickOpen}>More...</Button>
                                <Dialog
                                    open={isOpen}
                                    onClose ={handleClose}
                                >
                                    <DialogTitle>{planItem.place}</DialogTitle>    
                                        <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            {planItem.description}
                                        </DialogContentText>
                                        </DialogContent>
                                    </Dialog>                      
                            </CardActions>

                        </Card>
                    </Grid>
                )
            })}
            {
                showVisitedField? <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <ul><TextField id="outlined-basic" label="Plan Item" variant="outlined" value={newPlan} onChange={handlePlanChange} /></ul>
                            <ul><TextField id="outlined-basic" label="Date Visited" variant="outlined" value={newDate} onChange={handleDateChange} /></ul>
                            <ul><TextField id="outlined-basic" label="Enter Image URL" variant="outlined" value={newImage} onChange={handleImageChange} /></ul>
                            <ul><TextField id="outlined-basic" label="Description of Place" variant="outlined" value={newDesc} onChange={handleDescChange} /></ul>
                            <ul><Button color="success" onClick={() => {setNewValues(), setVisitedButton(true), setVisited(false)} } variant ="outlined" startIcon ={<AddIcon />}>Confirm</Button> 
                            <Button color="error" onClick={() => {setVisitedButton(true), setVisited(false)} } variant="outlined" startIcon={<DeleteIcon />} sx={{paddingleft: "5px"}}>Discard</Button></ul>
                            
                    </CardContent>
                </Card>
                </Grid>:null
            }
            {
                showVisistedButton?<Grid item xs={3}>
                        <Button onClick={() => {setVisitedButton(false), setVisited(true)} } variant="outlined" startIcon={<AddIcon />} sx={{ height: "240px", width: "500px" }}>
                            Add Button
                        </Button>
                    </Grid>:null
            }
        </Grid>
    

    );
}

