import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import EmojiGrid from "../components/EmogiContainer";
import { Grid } from "@mui/material";
import CustomButton from "../components/CustomButton";

function SecoundBanner() {
  return (
    <Box
      component="main"
       sx={{
        backgroundColor: "#e4defb",
    padding: {
      xs: "20px",
      sm: "50px 100px",
      md: "100px 270px",

    },
  }}
    >
      <Grid
        container
        spacing={0}
       
      >
        <Grid item xs={12} md={2.5}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center", 
           
            }}
          >
            <Box
              component={"img"}
              alt="logo"
              src={require("../assets/front-mobile.png")}
              sx={{
                width: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={2.5}
         sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
        
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component={"img"}
              alt="logo"
              src={require("../assets/side-mobile.png")}
              sx={{
                width: "50%",
                height: "50%",

                objectFit: "contain",
              }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
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
              fontSize: { md: 20, xs: 10 ,color:"#785aec",fontWeight:600},
              textAlign: "left",
            }}
          >
           Introducing Swerri{" "}
           <br />

            <Typography
              sx={{
                fontSize: { md: 58, xs: 25 },
                fontWeight: 800,
                color: "#25373f",
              }}
              component={"span"}
            >
              We Exist To{" "}
            </Typography>
            <br />
            <Typography
              sx={{
                fontSize: { md: 58, xs: 25 },
                fontWeight: 800,
                color: "#785aec",
              }}
              component={"span"}
            >
             Simplify Crypto!
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
            Join together with friends in your community to Earn, Lend and


            <br />
            Borrow. Easily buy, convert and Send crypto on your phone.
          </Typography>

          <Stack
            py={4}
            direction={"row"}
            spacing={2}
            sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
          >
            <Box sx={{ flexGrow: 0 }}>
              <CustomButton
                title="Get Started Today"
                MFontSize="15px"
                width="100%"
                bgColor="#785aec"
                color="white"
                hoverbgcolor="#6a26da"
              />
          </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SecoundBanner;
