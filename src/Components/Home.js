import {
  AppBar,
  Button,
  Box,
  Grid,
  Icon,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Avatar,
  Stack,
  TextareaAutosize,
} from "@mui/material";
import React, { useState } from "react";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import { Container } from "@mui/system";
import { BannerContainer, BannerContent, BannerImage } from "./style";
import ImageSlider from "./ImageSlider/ImageSlider";
import StaffPhoto from "./StaffPhoto";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { deepOrange } from "@mui/material/colors";
import Footer from "./Footer";
import CalculateIcon from '@mui/icons-material/Calculate';
const Home = () => {
  const [value, setvalue] = useState();
  return (
    <div>
      <React.Fragment>
        <Grid container placeItems="center">
          <AppBar>
            <Toolbar sx={{ background: "white" }}>
              <Grid item sm={0.5} lg={0.3}>
                <CorporateFareIcon
                  sx={{ color: "black", fontWeight: "bold" }}
                />
              </Grid>
              <Grid item sm={2} xs={3} md={12} lg={1}>
                <Typography color="black" fontWeight="bold">
                  Corporate
                </Typography>
              </Grid>
              <Grid item xs={3} sm={7.3} md={12} lg={12}>
                <Tabs
                sx={{marginLeft:{xs:0,sm:0,md:0, lg:20} ,align:'center',justifyContent:'center'}}
          
                  indicatorColor="secondary"
                  value={value}
                  onChange={(e, val) => setvalue(val)}
                >
                  <Tab label="Home"></Tab>
                  <Tab label="Why choose SD"></Tab>
                  <Tab label="Services"></Tab>
                  <Tab label="Tax Center"></Tab>
                  <Tab label="Resources"></Tab>
                </Tabs>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3} marginLeft="auto">
                <Box display="flex">
                  <Button
                    variant={"contained"}
                    sx={{ marginLeft: "auto", backgroundColor: "black" }}
                  >
                    Contact Us
                  </Button>
                </Box>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
        <Container>
          <Grid container marginTop={"10%"} spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box
                sx={{
                  backgroundImage: `url('/Images/corporate.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "30px",
                  width: { xs: "100%" },
                  height: "500px",
                  // display:'flex'
                }}
              >
                <Grid item xs={12} sm={12} md={10} lg={12}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "30px",
                        lg: "70px",
                        md: "60px",
                        sm: "60px",
                      },
                      fontWeight: "bold",
                      fontFamily: "Georgia, serif",
                      textAlign: "center",
                      paddingTop: { xs: 15, sm: 10, md: 10, lg: 8 },
                    }}
                  >
                    Trust us with
                    <br /> your bussiness
                  </Typography>
                </Grid>
                <Box
                  sx={{
                    display: "flex",
                    marginTop: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button sx={{ background: "darkred" }} variant="contained">
                    Customer Center
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={12}>
              <Box marginTop={5}>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: {
                      xs: "20px",
                      sm: "30px",
                      md: "30px",
                      lg: "30px",
                    },
                    fontFamily: "Georgia, serif",
                  }}
                >
                  How Can WE Help?
                </Typography>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Box marginTop={5} display={"flex"} justifyContent="center">
                    <Button
                      sx={{
                        "&:hover": { background: "darkred", color: "white" },
                        fontSize: {
                          xs: "8px",
                          sm: "12px",
                          md: "12px",
                          lg: "15px",
                        },
                        background: "darkred",
                        color: "white",
                        m: 1,
                        width: "25%",
                      }}
                      variant="outlined"
                    >
                      I'm an existing Bussiness
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        "&:hover": { background: "darkred", color: "white" },
                        fontSize: {
                          xs: "8px",
                          sm: "12px",
                          md: "12px",
                          lg: "15px",
                        },
                        color: "black",
                        m: 1,
                        width: "25%",
                      }}
                    >
                      I'm a New Bussiness
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        "&:hover": { background: "darkred", color: "white" },
                        fontSize: {
                          xs: "8px",
                          sm: "12px",
                          md: "12px",
                          lg: "15px",
                        },

                        color: "black",
                        m: 1,
                        width: "25%",
                      }}
                    >
                      I'm a New existing Bussiness
                    </Button>
                  </Box>
                </Grid>
              </Box>
            </Grid>
            <Grid container spacing={2} marginTop={5}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    maxWidth: 350,
                    marginBottom: 3,
                    borderRadius: 3,
                    border: "1px solid grey",
                    justifyItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      sx={{
                        marginTop: 3,
                        marginLeft: { xs: 3.8, sm: 9, md: 5, lg: 4.5 },
                        borderRadius: 3,
                        border: "1px solid grey",
                        justifyContent: "center",
                        width: "200px",
                      }}
                      height="140"
                      image="/Images/services.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography>Bussiness Services</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    background: "black",
                    color: "white",
                    maxWidth: 350,
                    height: 224,
                    marginBottom: 3,
                    borderRadius: 3,
                    border: "1px solid grey",
                    justifyItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="h5">Tax Services</Typography>
                      <Typography sx={{ textAlign: "left", marginTop: 3 }}>
                        -Bussiness Returns
                      </Typography>
                      <Typography sx={{ textAlign: "left" }}>
                        -Partnerships Returns
                      </Typography>
                      <Typography sx={{ textAlign: "left" }}>
                        -Tax disputes
                      </Typography>
                      <Typography sx={{ textAlign: "left" }}>
                        -Employee Retention
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} spacing={3}>
                <Card
                  sx={{
                    maxWidth: 350,
                    marginBottom: 3,
                    borderRadius: 3,
                    border: "1px solid grey",
                    justifyItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      sx={{
                        marginTop: 3,
                        marginLeft: { xs: 3.8, sm: 9, md: 5, lg: 4.5 },
                        borderRadius: 3,
                        border: "1px solid grey",
                        justifyContent: "center",
                        width: "200px",
                      }}
                      height="140"
                      image="/Images/accounting.png"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography>Bussiness Services</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={3} spacing={3}>
                <Card
                  sx={{
                    maxWidth: 350,
                    marginBottom: 3,
                    borderRadius: 3,
                    border: "1px solid grey",
                    justifyItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      sx={{
                        marginTop: 3,
                        marginLeft: { xs: 3.8, sm: 9, md: 5, lg: 4.5 },
                        borderRadius: 3,
                        border: "1px solid grey",
                        justifyContent: "center",
                        width: "200px",
                      }}
                      height="140"
                      image="/Images/tax-planning.png"
                      backgroundSize='cover'
                      backgroundPosition='center'
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography>Bussiness Services</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <ImageSlider />
        {/* <StaffPhoto /> */}

        <Container>
          <Grid container marginTop="10%">
            <BannerContainer>
              <BannerImage src="/Images/sd.jpg" />
              <BannerContent>
                <Typography
                  variant="h4"
                  fontWeight={"bold"}
                  fontFamily="fantasy"
                  textAlign={"left"}
                  // color={"whitesmoke"}
                >
                  Reasons To Choose SD Associates
                </Typography>
                <Typography
                  variant="subtitle"
                  sx={{
                    justifyContent: "center",
                    textAlign: "left",
                    alignItems: "center",
                  }}
                >
                  Lorem ipsum dolor sit amet . The graphic and typographic
                  operators know this well, in reality all the professions
                  dealing with the universe of communication have a stable
                  relationship with these words, but what is it? Lorem ipsum is
                  a dummy text without any sense.
                </Typography>
              </BannerContent>
            </BannerContainer>
          </Grid>
        </Container>
        <Container>
          <Grid container marginTop={5} spacing={3}>
            <Grid item xs={6} sm={4} md={4} lg={2}>
              <Card
                sx={{
                  maxWidth: 200,
                  height: 200,
                  marginBottom: 3,
                  borderRadius: 3,
                  // border: "1px solid grey",
                  justifyItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{
                      marginTop: 3,
                      marginLeft: { xs: 1, sm: 6, md: 6, lg: 4.3 },
                      borderRadius: 3,
                      border: "1px solid grey",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100px",
                      height: "100px",
                      color: "red",
                    }}
                    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogodix.com%2Flogo%2F28434.png&f=1&nofb=1&ipt=c435ad673e11438deb3119001edd35e64391c1177db8743ab88fdddd8d689854&ipo=images"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: { xs: "8px", lg: "14px" },
                        fontWeight: "bold",
                      }}
                    >
                      Always available for phone calls
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={2} spacing={3}>
              <Card
                sx={{
                  maxWidth: 200,
                  height: 200,
                  marginBottom: 3,
                  borderRadius: 3,
                  // border: "1px solid grey",
                  justifyItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{
                      marginTop: 3,
                      marginLeft: { xs: 1, sm: 6, md: 6, lg: 4.3 },
                      borderRadius: 3,
                      border: "1px solid grey",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100px",
                      height: "100px",
                      color: "red",
                    }}
                    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fmodern-red-number-design-vector-illustration-numeral-vector-trendy-flat-line-style-vector-elements-illustration-template-web-179096314.jpg&f=1&nofb=1&ipt=9d9cf774a582282b2a936dfd2739bd28d286065dc6086a1ad3f678773c23bab9&ipo=images"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: { xs: "8px", lg: "14px" },
                        fontWeight: "bold",
                      }}
                    >
                      Years in bussiness
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={2} spacing={3}>
              <Card
                sx={{
                  maxWidth: 200,
                  height: 200,
                  marginBottom: 3,
                  borderRadius: 3,
                  // border: "1px solid grey",
                  justifyItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{
                      marginTop: 3,
                      marginLeft: { xs: 1, sm: 6, md: 6, lg: 4.3 },
                      borderRadius: 3,
                      border: "1px solid grey",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100px",
                      height: "100px",
                      color: "red",
                    }}
                    image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.cof.org%2Fsites%2Fdefault%2Ffiles%2Fdocuments%2Ffiles%2F2015-annual-corporate-icon.png&f=1&nofb=1&ipt=ff841bb397800cf91b822811fd9a8cc073803f53250e09b0302a4971f1270217&ipo=images"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: { xs: "8px", lg: "14px" },
                        fontWeight: "bold",
                      }}
                    >
                      Professional and friendly staff
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={2} spacing={3}>
              <Card
                sx={{
                  maxWidth: 200,
                  height: 200,
                  marginBottom: 3,
                  borderRadius: 3,
                  // border: "1px solid grey",
                  justifyItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{
                      marginTop: 3,
                      marginLeft: { xs: 1, sm: 6, md: 6, lg: 4.3 },
                      borderRadius: 3,
                      border: "1px solid grey",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100px",
                      height: "100px",
                      color: "red",
                    }}
                    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fred%2Fplanner-xxl.png&f=1&nofb=1&ipt=a18087912aa5411f28430675fafbf4b38741af52cd1ed7afc04ca4d3c2a0f713&ipo=images"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: { xs: "8px", lg: "14px" },
                        fontWeight: "bold",
                      }}
                    >
                      Always available
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={2} spacing={3}>
              <Card
                sx={{
                  maxWidth: 200,
                  height: 200,
                  marginBottom: 3,
                  borderRadius: 3,
                  // border: "1px solid grey",
                  justifyItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{
                      marginTop: 3,
                      marginLeft: { xs: 1, sm: 6, md: 6, lg: 4.3 },
                      borderRadius: 3,
                      border: "1px solid grey",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100px",
                      height: "100px",
                      color: "red",
                    }}
                    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpluspng.com%2Fimg-png%2Fbrain-png-human-brain-image-2526-420.png&f=1&nofb=1&ipt=4c06682da2243bf29da2af2693e33bcc54fa1cd8e86d47fdc81d8fdb69094b94&ipo=images"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: { xs: "8px", lg: "14px" },
                        fontWeight: "bold",
                      }}
                    >
                      Having enough knowledge{" "}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={2} spacing={3}>
              <Card
                sx={{
                  maxWidth: 200,
                  height: 200,
                  marginBottom: 3,
                  borderRadius: 3,
                  // border: "1px solid grey",
                  justifyItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{
                      marginTop: 3,
                      marginLeft: { xs: 1, sm: 6, md: 6, lg: 4.3 },
                      borderRadius: 3,
                      border: "1px solid grey",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100px",
                      height: "100px",
                      color: "red",
                    }}
                    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fred%2Femail-11-xxl.png&f=1&nofb=1&ipt=d571c7fc498c1742954e7e65778e8730880a17b3c3f88f01411c1266c9c9787a&ipo=images"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: { xs: "8px", lg: "14px" },
                        fontWeight: "bold",
                      }}
                    >
                      Responds always to emails
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid container marginTop="10%">
            <BannerContainer>
              <BannerContent>
                <Typography
                  variant="h4"
                  fontWeight={"bold"}
                  fontFamily="fantasy"
                  textAlign={"left"}
                  // color={"whitesmoke"}
                >
                  Our Mission
                </Typography>
                <Typography
                  variant="subtitle"
                  sx={{
                    justifyContent: "flex-start",
                    textAlign: "left",
                    alignItems: "center",
                  }}
                >
                  Lorem ipsum dolor sit amet . The graphic and typographic
                  operators know this well, in reality all the professions
                  dealing with the universe of communication have a stable
                  relationship with these words, but what is it? Lorem ipsum is
                  a dummy text without any sense.
                </Typography>
                <Grid container marginTop={4} spacing={6}>
                  <Grid item xs={3} sm={4} md={4} lg={4} >
                  <Box
                    display={"flex"}
                    
                    border="1px solid grey"
                    sx={{ backgroundImage: `url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.cpapracticeadvisor.com%2Ffiles%2Fbase%2Fcygnus%2Fcpa%2Fimage%2F2017%2F05%2F960w%2FAICPA_logo_1600x1000_1_.59089d1f730d2.jpg&f=1&nofb=1&ipt=b712f27d3af22ae3f01ff7584dccd08f072bceb166768fccec95e31ade93af7c&ipo=images')`, 
                      backgroundSize:'cover',
                      backgroundPosition:'center',
                      borderRadius:'8%',  
                      width:{xs:'40px',lg:"150px"},
                      height:{xs:'30px',lg:"70px"}                 
                  }}
                  ></Box>
                  </Grid>
                  <Grid item xs={3} sm={4} md={4} lg={4} >
                  <Box
                    display={"flex"}
                   
                    border="1px solid grey"
                    sx={{ backgroundImage: `url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgtmtax.com%2Fwp-content%2Fuploads%2F2020%2F09%2FPICPA-online-and-social-1.png&f=1&nofb=1&ipt=bffefb607b3a326c253b4f3a5d43fb1dcfb54d5d3bbc9d0eea468c85aa5abcca&ipo=images')`, 
                      backgroundSize:'cover',
                      backgroundPosition:'center',
                      borderRadius:'8%',   
                      width:{xs:'40px',lg:"150px"},
                      height:{xs:'30px',lg:"70px"}                
                  }}
                  ></Box>
                  </Grid>
                  <Grid item xs={3} sm={4} md={4} lg={4} >
                  <Box
                    display={"flex"}
                    
                    border="1px solid grey"
                    sx={{ backgroundImage: `url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fst2.depositphotos.com%2F3800167%2F8176%2Fv%2F600%2Fdepositphotos_81762352-stock-illustration-100-anniversary-color-logo.jpg&f=1&nofb=1&ipt=199ff97fd173a3c58d125b08f9ea5fc2d9b3428a35958d7e2d1f117dc1c834d5&ipo=images')`, 
                      backgroundSize:'contain',
                      backgroundRepeat:'no-repeat',
                      backgroundPosition:'center',
                      borderRadius:'8%',
                      width:{xs:'40px',lg:"150px"},
                    height:{xs:'30px',lg:"70px"}                  
                  }}
                  ></Box>
                  </Grid>
                </Grid>
                <Button variant='contained' sx={{marginRight:'auto',marginTop:4,background:'red'}}>Customer Center</Button>
              </BannerContent>
              <BannerImage src="/Images/our mission.png" />
            </BannerContainer>
          </Grid>
        </Container>
        <Container>
        <Typography sx={{
                    textAlign: "center",
                    justifyContent:'center',
                    aignItems:'center',
                    justifyItems:'center',
                    fontWeight: "bold",
                    fontSize: {
                      xs: "20px",
                      sm: "30px",
                      md: "30px",
                      lg: "30px",
                    },
                    fontFamily: "Georgia, serif",
                  }}>What Our Clients Are Saying</Typography>
          <Grid container marginTop={"2%"} spacing={2}>
            
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box
                sx={{
                  background:'black',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "4%",
                  width: { xs: "100%" },
                  height: "500px",
                  // display:'flex'
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                  alt="Remy Sharp"
                  src="/Images/avatar.jpg"

                  sx={{ justifyItems: "center", alignItems: "center", width:'100px', height:'100px',marginTop:10}}
                />                    
                  
                </Box>
                <Grid item xs={12} sm={12} md={10} lg={12}>
                  <Box sx={{
                    display: "flex",
                    // border:'1px solid grey',
                    width:{xs:'100px',sm:'300px',md:'700px',lg:'700px'},
                    justifyItems:'center',
                    marginLeft:{xs:'30%', sm:"30%", md:'30%',lg:'20%'},
                    justifyContent: "center",
                    
                  }}>
                  <Typography
                  variant='body2'
                    sx={{
                      fontSize: {
                        xs: "10px",
                        lg: "16px",
                        md: "16px",
                        sm: "16px",
                      },
                      fontWeight: "bold",
                      fontFamily: "Georgia, serif",
                      textAlign: "left",
                      justifyContent:'center',
                      color:'whitesmoke',
                       paddingTop: { xs: 5, sm: 5, md: 5, lg: 8 },
                    }}
                  >
                    I've been using SD Associates now for two Years.They are very thorough in their work
                    and I have confidence that they have my best interest in mind.I would definitly recommended them
                    if you are looking for an accounting them for your bussiness.
                  </Typography>
                  </Box>
                </Grid>
                <Typography color='whitesmoke' sx={{fontWeight:'bold', fontSize:'18px',marginTop:1}}>"Avil Lazar"</Typography>
                <Stack direction="row" justifyContent={'center'} spacing={2}>
                 <Avatar sx={{width:{xs:'20px',lg:'40px',},height:{xs:'20px',lg:'40px'}}} src="/Images/star.png" variant="square"/>
                        
                <Avatar  sx={{width:{xs:'20px',lg:'40px',},height:{xs:'20px',lg:'40px'}}} src="/Images/star.png" variant="square"/>
                        
                <Avatar  sx={{width:{xs:'20px',lg:'40px',},height:{xs:'20px',lg:'40px'}}} src="/Images/star.png" variant="square"/>
                <Avatar  sx={{width:{xs:'20px',lg:'40px',},height:{xs:'20px',lg:'40px'}}} src="/Images/star.png" variant="square"/>
                <Avatar  sx={{width:{xs:'20px',lg:'40px',},height:{xs:'20px',lg:'40px'}}} src="/Images/star.png" variant="square"/>  
                
                </Stack>
                
              </Box>
            </Grid>
            </Grid>
            </Container>

            
        <Container>
          <Grid container marginTop="10%">
            <BannerContainer>
              <BannerImage src="/Images/sd.jpg" />
              <BannerContent>
                <Typography
                  variant="h4"
                  fontWeight={"bold"}
                  fontFamily="fantasy"
                  textAlign={"left"}
                  // color={"whitesmoke"}
                >
Do you have any questions?               
 </Typography>
                <Stack direction={'column'}
                justifyContent='center'
                alignItems={'stretch'}
                spacing={4}
                width='100%'
                marginTop={4}
                >
                <TextareaAutosize aria-label="minimum height"
              minRows={8}
              maxRows={20}
              placeholder="Type your question....."
              style={{ width: '100%' }} />
                </Stack>
                <Stack
  m={1} //margin
  spacing={2}
  direction='row'
 
>
  <Button variant="contained" color="primary" sx={{ height: 40,background:'red' }}>
    Send
  </Button>
  <Avatar variant="contained" color="primary"   sx={{ width: 40, height: 40 }}
 src='/Images/calculator.png'>
  </Avatar>
  <Typography sx={{p:1}}>Calculators</Typography>
</Stack>              
</BannerContent>
            </BannerContainer>
          </Grid>
        </Container>
        <Footer/>

      </React.Fragment>
    </div>
  );
};

export default Home;
