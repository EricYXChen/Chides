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
  TextField,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add"; // Import Plus Icon
import DeleteIcon from "@mui/icons-material/Delete"; //Import Trash Button

import moment from "moment";
import { Formik, Form } from "formik";

export default function AppPlaces(props) {
  const [placesVisited, setPlacesVisited] = useState(props.places);

  const [showVisitedField, setVisited] = useState(false);
  const [showVisistedButton, setVisitedButton] = useState(true);

  const [openVisit, setOpenVisit] = useState(null);

  return (
    <Grid container spacing={2}>
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
      {showVisitedField ? (
        <Grid item xs={3}>
          <Card variant="outlined" style={{ height: "100%" }}>
            <CardContent>
              <Formik
                initialValues={{ name: "", date: "", photo: "", description: "" }}
                onSubmit={(values) => {
                  setVisitedButton(true);
                  setVisited(false);
                  setPlacesVisited((prev) => [values, ...prev]);
                }}
              >
                {(formikBag) => (
                  <Form style={{ display: "flex", flexDirection: "column", rowGap: 10 }}>
                    <TextField
                      name="name"
                      label="Name"
                      variant="outlined"
                      value={formikBag.values.name}
                      onChange={formikBag.handleChange}
                      size="small"
                    />
                    <TextField
                      name="date"
                      label="Date Visited"
                      variant="outlined"
                      value={formikBag.values.date}
                      onChange={formikBag.handleChange}
                      size="small"
                    />
                    <TextField
                      name="photo"
                      label="Enter Image URL"
                      variant="outlined"
                      value={formikBag.values.photo}
                      onChange={formikBag.handleChange}
                      size="small"
                    />
                    <TextField
                      name="description"
                      label="Description of Place"
                      variant="outlined"
                      value={formikBag.values.description}
                      onChange={formikBag.handleChange}
                      size="small"
                    />
                    <Button type="submit" color="success" startIcon={<AddIcon />}>
                      Confirm
                    </Button>
                    <Button
                      color="error"
                      startIcon={<DeleteIcon />}
                      onClick={() => {
                        setVisitedButton(true), setVisited(false);
                      }}
                    >
                      Discard
                    </Button>
                  </Form>
                )}
              </Formik>
            </CardContent>
          </Card>
        </Grid>
      ) : null}
      {showVisistedButton ? (
        <Grid item xs={3}>
          <Card
            variant="outlined"
            onClick={() => {
              setVisitedButton(false), setVisited(true);
            }}
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
