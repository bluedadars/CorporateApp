import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const StaffPhoto = () => {
  return (
    <div>
        <React.Fragment>
            <Container>
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
                    fontFamily: "Georgia, serif",}}>
                
                    Our Team
                </Typography>
            </Container>
        </React.Fragment>
    </div>
  )
}

export default StaffPhoto