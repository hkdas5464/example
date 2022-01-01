import * as React from "react";
import Banner from "./Banner";
import { useLocation } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { Data } from "../Home_page/Data";
import Card from "@mui/material/Card";
import Table from "./Table";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Question from "./QuestionApi";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Date from "./ImportantDate";
import { useRouteMatch } from "react-router-dom";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

function MainForumpage() {
  let params = useParams();
  const { url, path } = useRouteMatch();
  const Id = parseInt(params.Id);
  const topic = Data.find(({ id }) => id === Id);
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const MyTypography = styled(Typography)({
    background: "green",
    border: 0,
    alignItems: "center",
    borderRadius: 20,
    boxShadow: "0 3px 5px 2px rgba(25, 118, 210, .6)",

    height: 48
  });

  return (
    <>
      <Container
        maxWidth="lg"
        component="main"
        sx={{
          mt: 2
        }}
      >
        {/* <Banner post={mainFeaturedPost} /> */}
        <Card sx={{ mt: 28 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Card>
                <Typography>{topic.title}</Typography>
                <Typography>{topic.description}</Typography>
              </Card>
            </Grid>

            <Grid item xs={6} md={6}>
              <Card>
                <Typography style={{ color: "green" }}>
                  Important Dates
                </Typography>
                <Divider />

                <Typography>Application Begin : {topic.date}</Typography>
                <Typography>
                  Last Date for Apply Online :
                  <Typography style={{ color: "red" }}></Typography>
                </Typography>

                <Typography>Complete Form Last Date :</Typography>

                {/* <Typography
                      
                    >
                      {e.message}
                    </Typography> */}
              </Card>
            </Grid>

            <Grid item xs={6} md={6}>
              <Card>
                <Typography style={{ color: "green" }}>
                  {" "}
                  Application Fee{" "}
                </Typography>
                <Divider />
                {Date.map((e) => (
                  <>
                    <Typography>General:/-</Typography>
                    <Typography>OBC: /-</Typography>
                    <Typography>ST: /-</Typography>

                    <Typography>SC:/-</Typography>
                    <Divider />
                    {/* <Typography style={{ background: "#00AB55" }}>
                      {" "}
                      {e.message}/-
                    </Typography> */}
                  </>
                ))}
              </Card>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography>
                UPSC Engineering Services IAS 2021 Vacancy Details
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Table />
            </Grid>
            <Grid item xs={6}>
              <Typography>Apply Online</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Click Here</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography>Download DAF Notification</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Click Here</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography>For Vacancy Details</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Click Here</Typography>
            </Grid>
            <Divider />
            <Grid item xs={6}>
              <Typography>Join Our Telegram Page</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Click Here</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography>UPSC Official Website</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Click Here</Typography>
            </Grid>
            <Grid item xs={12}>
              <Card>
                {Question &&
                  Question.map((e) => (
                    <>
                      <Stack sx={{ width: "100%" }} spacing={2}>
                        <Card>
                          <Alert severity="error">{e.title}</Alert>
                        </Card>
                        <Card>
                          <Alert severity="success" noWrap>
                            {e.answer}
                          </Alert>
                        </Card>
                        <br />
                      </Stack>
                    </>
                  ))}
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
}

export default MainForumpage;
