import React from 'react' 
import styled from 'styled-components'

const Title = styled.h3`
    padding: 8px; 

`
function Landing(){
    return(
        <div>
            <Title>Creative Writing Prep</Title>
            Welcome to your one-stop shop for planning NanoWrimo or other creative writing projects!
            Note: this site is not associated with Nathional Novel Writing Month 501(c)(3). It is just a personal project of mine :)
        </div>
    )
}

export default Landing