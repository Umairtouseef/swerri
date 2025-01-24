import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";

function About() {
  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={4}
        sx={{
          backgroundColor: "white",
          padding: {
            xs: "10px 20px",
            sm: "20px 50px",
            md: "20px 270px",
          },
        }}
      >
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "white",
            // padding: {
            //   xs: "20px",
            //   sm: "50px 100px",
            //   md: "100px 270px",
            // },
          }}
        >
          <Typography
            color={"black"}
            sx={{
              fontSize: { md: 48, xs: 25 },
              textAlign: "left",
            }}
          >
            {" "}
            <Typography
              sx={{
                fontSize: { md: 40, xs: 25 },
                fontWeight: 800,
                color: "#25373f",
              }}
              component={"span"}
            >
              About{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: { md: 40, xs: 25 },
                fontWeight: 800,
                color: "#785aec",
              }}
              component={"span"}
            >
              Us
            </Typography>
          </Typography>

          <Typography
            sx={{
              fontSize: "18px",
              textAlign: "left",
              fontWeight: 400,
              color: "rgba(37, 55, 63, 0.7)",
              py: 1,
            }}
          >
            Swerri is a Decentralized Finance (DeFi) Protocol on the Binance
            Smart Chain Blockchain which combines the power of DeFi in crypto
            {/* <br /> */}
            and the functionalities of a decentralized exchange. Swerri App
            {/* <br /> */}
            allows members to create a circle of friends and transact in crypto
            together. On Swerri a member can lend, borrow and earn from trading
            together. They can also buy, convert, Pay and send crypto.
            {/* <br /> */}
            learn, lend and borrow.
          </Typography>
        </Grid>

        <Grid item xs={12} md={7}>
          <Box
            sx={{
              width: "100%",
              margin: "auto",
              display: "block",
            }}
            component={"img"}
            alt="logo"
            src={require("../../assets/about-us.png")}
          />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={4}
        sx={{
          backgroundColor: "#F9F9F9",
          padding: {
            xs: "20px",
            sm: "50px 100px",
            md: "100px 270px",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          backgroundColor: "#F9F9F9",
          // padding: {
          //   xs: "20px",
          //   sm: "20px",
          //   md: "20px",
          // },
        }}
      >
        <Typography
          color={"black"}
          sx={{
            fontSize: { md: 48, xs: 25 },
            textAlign: "center",
          }}
        >
          {" "}
          <Typography
            sx={{
              fontSize: { md: 58, xs: 25 },
              fontWeight: 800,
              color: "#25373f",
            }}
            component={"span"}
          >
            Team{" "}
          </Typography>
        </Typography>
      </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              margin: "auto",
              display: "block",
            }}
            component={"img"}
            alt="logo"
            src={require("../../assets/mwendwa.jpg")}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // paddingTop: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              textAlign: "left",
              fontWeight: 400,
              color: "rgba(37, 55, 63, 0.7)",
              py: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: { md: 20, xs: 25 },
                fontWeight: 800,
                color: "#785aec",
              }}
              component={"span"}
            >
              Nick Mwendwa
            </Typography>
            <br />
            {/* </Typography> */}
            Founder & CEO
            <br />
            Nick is an Enterpreneur and Tech enthusiast. He founded Riverbank
            Solutions Ltd, a Fintech solutions
            <br />
            provider 13 years ago providing payment solutions and creating
            <br />
            great teams that have delivered in the areas of financial inclusion
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              width: "100%",
              margin: "auto",
              display: "block",
            }}
            component={"img"}
            alt="logo"
            src={require("../../assets/mwendwa.jpg")}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // paddingTop: "20px",
          }}
        >
          <Typography
            color={"black"}
            sx={{
              fontSize: { md: 48, xs: 25 },
              textAlign: "left",
            }}
          >
            {" "}
            <Typography
              sx={{
                fontSize: { md: 20, xs: 25 },
                fontWeight: 800,
                color: "#25373f",
              }}
              component={"span"}
            >
              {" "}
            </Typography>
            <Typography
              sx={{
                fontSize: { md: 20, xs: 25 },
                fontWeight: 800,
                color: "#785aec",
              }}
              component={"span"}
            >
              Lynda Ambiyo
            </Typography>
          </Typography>

          <Typography
            sx={{
              fontSize: "18px",
              textAlign: "left",
              fontWeight: 400,
              color: "rgba(37, 55, 63, 0.7)",
              py: 1,
            }}
          >
            COO
            <br />
            Nick is an Enterpreneur and Tech enthusiast. He founded Riverbank
            Solutions Ltd, a Fintech solutions
            <br />
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              width: "100%",
              margin: "auto",
              display: "block",
            }}
            component={"img"}
            alt="logo"
            src={require("../../assets/mwendwa.jpg")}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // paddingTop: "20px",
          }}
        >
          <Typography
            color={"black"}
            sx={{
              fontSize: { md: 48, xs: 25 },
              textAlign: "left",
            }}
          >
            {" "}
            <Typography
              sx={{
                fontSize: { md: 20, xs: 25 },
                fontWeight: 800,
                color: "#25373f",
              }}
              component={"span"}
            >
              {" "}
            </Typography>
            <Typography
              sx={{
                fontSize: { md: 20, xs: 25 },
                fontWeight: 800,
                color: "#785aec",
              }}
              component={"span"}
            >
              Lynda Ambiyo
            </Typography>
          </Typography>

          <Typography
            sx={{
              fontSize: "18px",
              textAlign: "left",
              fontWeight: 400,
              color: "rgba(37, 55, 63, 0.7)",
              py: 1,
            }}
          >
            CFO
            <br />
            Nick is an Enterpreneur and Tech enthusiast. He founded Riverbank
            Solutions Ltd, a Fintech solutions
            <br />
          </Typography>
        </Grid>

        <Grid item xs={12} md={3}>
          <Box
            sx={{
              width: "100%",
              margin: "auto",
              display: "block",
            }}
            component={"img"}
            alt="logo"
            src={require("../../assets/mwendwa.jpg")}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // paddingTop: "20px",
          }}
        >
          <Typography
            color={"black"}
            sx={{
              fontSize: { md: 48, xs: 25 },
              textAlign: "left",
            }}
          >
            {" "}
            <Typography
              sx={{
                fontSize: { md: 20, xs: 25 },
                fontWeight: 800,
                color: "#25373f",
              }}
              component={"span"}
            >
              {" "}
            </Typography>
            <Typography
              sx={{
                fontSize: { md: 20, xs: 25 },
                fontWeight: 800,
                color: "#785aec",
              }}
              component={"span"}
            >
              Lynda Ambiyo
            </Typography>
          </Typography>

          <Typography
            sx={{
              fontSize: "18px",
              textAlign: "left",
              fontWeight: 400,
              color: "rgba(37, 55, 63, 0.7)",
              py: 1,
            }}
          >
            COO
            <br />
            Nick is an Enterpreneur and Tech enthusiast. He founded Riverbank
            Solutions Ltd, a Fintech solutions
            <br />
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              width: "100%",
              margin: "auto",
              display: "block",
            }}
            component={"img"}
            alt="logo"
            src={require("../../assets/mwendwa.jpg")}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // paddingTop: "20px",
          }}
        >
          <Typography
            color={"black"}
            sx={{
              fontSize: { md: 48, xs: 25 },
              textAlign: "left",
            }}
          >
            {" "}
            <Typography
              sx={{
                fontSize: { md: 20, xs: 25 },
                fontWeight: 800,
                color: "#25373f",
              }}
              component={"span"}
            >
              {" "}
            </Typography>
            <Typography
              sx={{
                fontSize: { md: 20, xs: 25 },
                fontWeight: 800,
                color: "#785aec",
              }}
              component={"span"}
            >
              Lynda Ambiyo
            </Typography>
          </Typography>

          <Typography
            sx={{
              fontSize: "18px",
              textAlign: "left",
              fontWeight: 400,
              color: "rgba(37, 55, 63, 0.7)",
              py: 1,
            }}
          >
            CFO
            <br />
            Nick is an Enterpreneur and Tech enthusiast. He founded Riverbank
            Solutions Ltd, a Fintech solutions
            <br />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
