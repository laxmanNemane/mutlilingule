import { Box, Grid, Link, Typography } from "@mui/material";
import theme from "../theme.js";

const Navbar = (props) => {
  const styles = {
    section: {
      px: theme.spacing(3),
      py: theme.spacing(2.3),
      mb: theme.spacing(2),
      backgroundColor: theme.palette.common.white,
      boxShadow: theme.shadows[1],
    },
    link: {
      textDecoration: "none",
      color: theme.palette.grey[800],
    },
    hoverLink: {
      "&:hover": {
        color: theme.palette.grey[700],
      },
    },
    hoverIcons: {
      color: theme.palette.grey[200],
      "&:hover": {
        color: theme.palette.grey[300],
      },
    },
    breadcrumb: {
      ml: theme.spacing(1),
      mr: theme.spacing(0.75),
    },
    name: {
      color: theme.palette.grey[800],
    },
    job: {
      color: theme.palette.grey[500],
    },
    avatar: {
      ml: theme.spacing(1.5),
      mr: theme.spacing(1),
    },
    hoverAngleDown: {
      color: theme.palette.grey[500],
      "&:hover": {
        color: theme.palette.grey[600],
      },
    },
    menu: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    hamburger: {
      display: "block",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  };

  const content = {
    "Image1-1": "mui-artemis-assets/navbar/home-alt.svg",
    "Typography1-1": "Dashboard",
    "Image2-1": "mui-artemis-assets/navbar/angle-right.svg",
    "Image3-1": "mui-artemis-assets/navbar/list-ul.svg",
    "Typography2-1": "Data List",
    "Link1-1": (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.7 20.3L18 16.6C21.1 12.7 20.5 7 16.6 3.9C12.7 0.8 6.99999 1.5 3.89999 5.3C0.799994 9.2 1.49999 14.9 5.29999 18C8.59999 20.6 13.3 20.6 16.6 18L20.3 21.7C20.7 22.1 21.3 22.1 21.7 21.7C22.1 21.3 22.1 20.7 21.7 20.3ZM11 18C7.09999 18 3.99999 14.9 3.99999 11C3.99999 7.1 7.09999 4 11 4C14.9 4 18 7.1 18 11C18 14.9 14.9 18 11 18Z"
          fill="currentColor"
        />
      </svg>
    ),
    "Link2-1": (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 2H6C5.20435 2 4.44129 2.31607 3.87868 2.87868C3.31607 3.44129 3 4.20435 3 5V16C3 16.7956 3.31607 17.5587 3.87868 18.1213C4.44129 18.6839 5.20435 19 6 19H8.59L11.29 21.71C11.3834 21.8027 11.4943 21.876 11.6161 21.9258C11.7379 21.9755 11.8684 22.0008 12 22C12.2383 22 12.4689 21.9149 12.65 21.76L15.87 19H18C18.7956 19 19.5587 18.6839 20.1213 18.1213C20.6839 17.5587 21 16.7956 21 16V5C21 4.20435 20.6839 3.44129 20.1213 2.87868C19.5587 2.31607 18.7956 2 18 2ZM19 16C19 16.2652 18.8946 16.5196 18.7071 16.7071C18.5196 16.8946 18.2652 17 18 17H15.5C15.2617 17 15.0311 17.0851 14.85 17.24L12.05 19.64L9.71 17.29C9.61656 17.1973 9.50574 17.124 9.38391 17.0742C9.26207 17.0245 9.13161 16.9992 9 17H6C5.73478 17 5.48043 16.8946 5.29289 16.7071C5.10536 16.5196 5 16.2652 5 16V5C5 4.73478 5.10536 4.48043 5.29289 4.29289C5.48043 4.10536 5.73478 4 6 4H18C18.2652 4 18.5196 4.10536 18.7071 4.29289C18.8946 4.48043 19 4.73478 19 5V16Z"
          fill="currentColor"
        />
      </svg>
    ),
    "Link3-1": (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 13.18V10C17.9986 8.58312 17.4958 7.21247 16.5806 6.13077C15.6655 5.04908 14.3971 4.32615 13 4.09V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V4.09C9.60294 4.32615 8.33452 5.04908 7.41939 6.13077C6.50425 7.21247 6.00144 8.58312 6 10V13.18C5.41645 13.3863 4.911 13.7681 4.55294 14.2729C4.19488 14.7778 4.00174 15.3811 4 16V18C4 18.2652 4.10536 18.5196 4.29289 18.7071C4.48043 18.8946 4.73478 19 5 19H8.14C8.37028 19.8474 8.873 20.5954 9.5706 21.1287C10.2682 21.6621 11.1219 21.951 12 21.951C12.8781 21.951 13.7318 21.6621 14.4294 21.1287C15.127 20.5954 15.6297 19.8474 15.86 19H19C19.2652 19 19.5196 18.8946 19.7071 18.7071C19.8946 18.5196 20 18.2652 20 18V16C19.9983 15.3811 19.8051 14.7778 19.4471 14.2729C19.089 13.7681 18.5835 13.3863 18 13.18V13.18ZM8 10C8 8.93913 8.42143 7.92172 9.17157 7.17157C9.92172 6.42143 10.9391 6 12 6C13.0609 6 14.0783 6.42143 14.8284 7.17157C15.5786 7.92172 16 8.93913 16 10V13H8V10ZM12 20C11.651 19.9979 11.3086 19.9045 11.0068 19.7291C10.7051 19.5536 10.4545 19.3023 10.28 19H13.72C13.5455 19.3023 13.2949 19.5536 12.9932 19.7291C12.6914 19.9045 12.349 19.9979 12 20ZM18 17H6V16C6 15.7348 6.10536 15.4804 6.29289 15.2929C6.48043 15.1054 6.73478 15 7 15H17C17.2652 15 17.5196 15.1054 17.7071 15.2929C17.8946 15.4804 18 15.7348 18 16V17Z"
          fill="currentColor"
        />
      </svg>
    ),
    "Typography3-1": "John Doe",
    "Typography3-2": "Designer",
    "Avatar1-1": "mui-artemis-assets/avatar.png",
    "Link4-1": (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.0834 7.66666C13.75 7.33333 13.25 7.33333 12.9167 7.66666L10 10.5833L7.08335 7.66666C6.75002 7.33333 6.25002 7.33333 5.91669 7.66666C5.58335 8 5.58335 8.5 5.91669 8.83333L9.41669 12.3333C9.58335 12.5 9.75002 12.5833 10 12.5833C10.25 12.5833 10.4167 12.5 10.5834 12.3333L14.0834 8.83333C14.4167 8.5 14.4167 8 14.0834 7.66666Z"
          fill="currentColor"
        />
      </svg>
    ),
    "Image4-1": "mui-artemis-assets/navbar/hamburger-light.svg",
    ...props.content,
  };

  return (
    <Box component="section" sx={styles.section}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
      >
        <Grid item>
          <Grid container sx={styles.menu}>
            <Grid item>
              <Link sx={styles.link} href="#">
                <Grid container columnSpacing={0.75}>
                  <Grid item>
                    <Box component="img" src={content["Image1-1"]} alt="" />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" sx={styles.hoverLink}>
                      {content["Typography1-1"]}
                    </Typography>
                  </Grid>
                </Grid>
              </Link>
            </Grid>
            <Grid item sx={styles.breadcrumb}>
              <Box component="img" src={content["Image2-1"]} alt="" />
            </Grid>
            <Grid item>
              <Link sx={styles.link} href="#">
                <Grid container columnSpacing={0.75}>
                  <Grid item>
                    <Box component="img" src={content["Image3-1"]} alt="" />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" sx={styles.hoverLink}>
                      {content["Typography2-1"]}
                    </Typography>
                  </Grid>
                </Grid>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            alignItems="center"
            justifyContent="end"
            columnSpacing={3}
          >
            <Grid item sx={styles.menu}>
              <Grid container columnSpacing={3}>
                <Grid item>
                  <Link sx={styles.hoverIcons} href="#">
                    {content["Link1-1"]}
                  </Link>
                </Grid>
                <Grid item>
                  <Link sx={styles.hoverIcons} href="#">
                    {content["Link2-1"]}
                  </Link>
                </Grid>
                <Grid item>
                  <Link sx={styles.hoverIcons} href="#">
                    {content["Link3-1"]}
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={styles.menu}>
              <Grid container alignItems="center">
                <Grid item textAlign="right">
                  <Typography variant="body2" sx={styles.name}>
                    {content["Typography3-1"]}
                  </Typography>
                  <Typography variant="body2" sx={styles.job}>
                    {content["Typography3-2"]}
                  </Typography>
                </Grid>
                <Grid item>
                  <Box
                    component="img"
                    src={content["Avatar1-1"]}
                    sx={styles.avatar}
                    alt=""
                  />
                </Grid>
                <Grid item>
                  <Link sx={styles.hoverAngleDown} href="#">
                    {content["Link4-1"]}
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={styles.hamburger}>
              <Link href="#">
                <Box component="img" src={content["Image4-1"]} alt="" />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
