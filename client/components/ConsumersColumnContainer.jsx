// import * as React from 'react';
// import { Container, Grid, Box, Typography, Link, Button, ButtonGroup, makeStyles } from '@material-ui/core'
// import { Card, CardActionArea, Stack } from '@mui/material'
// import { styled } from '@mui/material/styles';


// const Item = styled(Button)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   display: 'flex',
//   alignItems: 'flex-start',
//   color: theme.palette.text.secondary,
//   height: '25vh',
//   borderTop: '1px solid blue',
//   borderBottom: '1px solid blue'
// }));

// export default function ConsumerColumnContainer(){
//   return(
//   <div style = {{
//     textAlign: 'center',
//     height : '90vh', 
//     width: '100%',
//     border: '2px solid blue'}}>
//     <h3>Consumer(s)</h3>
//       <Stack direction="column">
//         <Item>Consumer 1
//         <br></br>
//         <br></br>
//         Total Records Consumed : 709 
//         <br></br>
//         Average Records Consumed / sec : 3 
//         </Item>
//         <Item>Consumer 2
//         <br></br>
//         <br></br>
//         Total Records Consumed : 653     
//         <br></br>
//         Average Records Consumed / sec : 7  
//         </Item>
//       </Stack>
//     </div>
//     // <div>
//     //   <Typography 
//     //      variant='h4' 
//     //      align='center'
//     //   >
//     //     Consumers
//     //   </Typography>
//     //   <Box border='solid'>
//     //     <Grid 
//     //       container 
//     //       direction='column'  
//     //       justifyContent='flexStart'
//     //       alignItems='center'
//     //       spacing={1}
//     //      >
//     //       <Grid item>
//     //         <Card>
//     //                  <CardActionArea>
//     //                      <Button /*onClick={}*/>
//     //                          <Typography variant='h5'>
//     //                              Consumer 1
//     //                          </Typography>
//     //                      </Button>
//     //                  </CardActionArea>
//     //              </Card>
//     //          </Grid>
//     //          <Grid item>
//     //              <Card>
//     //                  <CardActionArea>
//     //                      <Button /*onClick={}*/>
//     //                          <Typography variant='h5'>
//     //                              Consumer 2
//     //                          </Typography>
//     //                      </Button>
//     //                  </CardActionArea>
//     //              </Card>     
//     //       </Grid>
//     //     </Grid>
//     //   </Box>
//     // </div>
//   )
// }