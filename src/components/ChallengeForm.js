import React from 'react'

import styled from 'styled-components'

const Form = styled.form`
    width: 100%;
`

const TextField = styled.textarea`
    display: block;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 750px;
    height: 500px;
    padding: 8px;
    margin: 8px;
`

class ChallengeForm extends React.Component{
  
  

    render(){
        return(
           <Form>
               <TextField/>
           </Form>
        )
    }
}

export default ChallengeForm