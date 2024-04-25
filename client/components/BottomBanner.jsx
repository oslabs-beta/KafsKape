import React from 'react'
import { Container, Grid, Box, Typography, Link } from '@material-ui/core'

export default function BottomBanner() {
  const gridItems = [
    { title: "Need Help?", link: "https://github.com/oslabs-beta/Kafmira" },
    { title: "About the Team", link: "http://kafmira.io/#clients-area" },
    { title: "Contact Us", link: "http://kafmira.io/#support-area" },
  ];

  return (
    <footer>
      {/* can add sx prop to accept all system props as well as valid CSS */}
      <Box
        p={2}
        mt={2}
        align="center"
        sx={{
          bgcolor: "info.main",
          color: "white",
          zIndex: "tooltip",
          left: "50%",
          top: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Box m={1.5} borderBottom={1}>
            <Typography variant="h6" color="" gutterBottom>
              SSHK Technology Group
            </Typography>
          </Box>
          <Grid container direction="row" spacing={6}>
            {gridItems.map((gridItem, i) => (
              <Grid item key={i} xs={12} sm={4}>
                <Link
                  key={i}
                  onClick={() => window.open(gridItem.link, "blank")}
                  color="inherit"
                >
                  {gridItem.title}
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}