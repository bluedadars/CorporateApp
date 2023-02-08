import { Container, Typography } from '@mui/material'
import React from 'react'
import Myapp from './Myapp'

const ImageSlider = () => {
  return (
    <div>
        <React.Fragment>
            <Container>
                <Typography sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    marginTop:3,
                    fontSize: {
                      xs: "20px",
                      sm: "30px",
                      md: "30px",
                      lg: "30px",
                    },
                    fontFamily: "Georgia, serif",
                  }}>Industries Served</Typography>
                  <Myapp/>
            </Container>
        </React.Fragment>
    </div>
  )
}

export default ImageSlider