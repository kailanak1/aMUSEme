import React from 'react'

import styled from 'styled-components'

const Form = styled.form`
    width: 100%;
`
const Title = styled.h3`
    padding: 8px; 

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
    state={
        minutes: 5, 
        seconds: 0
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
          const { seconds, minutes } = this.state    
          if (seconds > 0) {
            this.setState(({ seconds }) => ({
              seconds: seconds - 1
            }))
          }    if (seconds === 0) {
            if (minutes === 0) {
              clearInterval(this.myInterval)
            } else {
              this.setState(({ minutes }) => ({
                minutes: minutes - 1,
                seconds: 59
              }))
            }
          }
        }, 1000)
      }

      componentWillUnmount() {
        clearInterval(this.myInterval)
    }
  

    render(){
        const { minutes, seconds } = this.state
        return(
           <Form>
               <Title>   
                   { minutes === 0 && seconds === 0
                    ? <h1>Time!</h1>
                    : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }</Title>
               <TextField/>
           </Form>
        )
    }
}

export default ChallengeForm