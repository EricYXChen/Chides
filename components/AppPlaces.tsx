import { useState } from "react";

import Image from "next/image";

import {
  Avatar,
  CardContent,
  CardHeader,
  Card,
  Grid,
  CardMedia,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import { DateTimePicker } from "@mui/lab";

import moment from "moment";
import { Formik, Form } from "formik";
import axios from "axios";

export default function AppPlaces(props) {
  const [placesVisited, setPlacesVisited] = useState(props.places);

  const [showVisitedField, setVisited] = useState(false);
  const [showVisistedButton, setVisitedButton] = useState(true);

  const [createEventOpen, setCreateEventOpen] = useState<boolean>(false);
  const [openVisit, setOpenVisit] = useState(null);

  return (
    <Grid container spacing={2}>
      <Dialog open={createEventOpen} onClose={() => setCreateEventOpen(false)} fullWidth>
        <DialogTitle>Add new event</DialogTitle>
        <DialogContent>
          <p>Fill in some details about your event.</p>
          <Formik
            initialValues={{ name: "", date: new Date(), photo: "", description: "" }}
            onSubmit={(values) => {
              axios.post("/api/event", values);
              setVisitedButton(true);
              setVisited(false);
              setPlacesVisited((prev) => [values, ...prev]);
            }}
          >
            {(formikBag) => (
              <Form style={{ display: "flex", flexDirection: "column", rowGap: 20 }}>
                <TextField
                  name="name"
                  label="Name"
                  variant="outlined"
                  value={formikBag.values.name}
                  onChange={formikBag.handleChange}
                />
                <DateTimePicker
                  label="Date"
                  value={formikBag.values.date}
                  renderInput={(props) => <TextField {...props} />}
                  onChange={(change) => formikBag.setFieldValue("date", change)}
                />
                <TextField
                  name="photo"
                  label="Enter Image URL"
                  variant="outlined"
                  value={formikBag.values.photo}
                  onChange={formikBag.handleChange}
                />
                <TextField
                  name="description"
                  label="Description"
                  variant="outlined"
                  value={formikBag.values.description}
                  onChange={formikBag.handleChange}
                  multiline
                  minRows={3}
                />
                <DialogActions>
                  <Button type="submit" variant="contained" color="primary">
                    Create
                  </Button>
                  <Button onClick={() => setCreateEventOpen(false)}>Cancel</Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
      <Dialog open={openVisit != null} onClose={() => setOpenVisit(null)}>
        {openVisit && (
          <>
            <img src={openVisit.photo} />
            <DialogTitle>{openVisit.name}</DialogTitle>
            <DialogContent>
              <p>{moment(openVisit.date).format("LLLL")}</p>
              <div style={{ display: "flex", columnGap: 5, margin: "10px 0" }}>
                <Tooltip title="David Liu">
                  <Avatar src="/static/images/david.jpg" />
                </Tooltip>
                <Avatar src="/static/images/eric.png" />
                <Avatar src="/static/images/alex.jpg" />
              </div>
              <p>Description</p>
              <TextField value={openVisit.description} multiline minRows={5} fullWidth />
            </DialogContent>
          </>
        )}
      </Dialog>
      {placesVisited.map((item) => (
        <Grid key={item.name} item xs={3}>
          <Card variant="outlined" style={{ height: "100%" }}>
            <CardMedia component="img" image={item.photo} alt={item.name} height="200px" />
            <CardContent>
              <div style={{ fontSize: "1.3rem" }}>{item.name}</div>
              <p>{moment(item.date).calendar()}</p>
            </CardContent>
            <CardActions>
              <Button onClick={() => setOpenVisit(item)}>See More...</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
      {showVisistedButton ? (
        <Grid item xs={3}>
          <Card
            variant="outlined"
            onClick={() => setCreateEventOpen(true)}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              fontWeight: 600,
            }}
          >
            Add new event
          </Card>
        </Grid>
      ) : null}
    </Grid>
  );
}
