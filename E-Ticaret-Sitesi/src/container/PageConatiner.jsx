import React from 'react'
import Container from '@mui/material/Container';

function PageConatiner({ children }) {
    return (
        <Container maxWidth="lg">{children}</Container>
    )
}

export default PageConatiner