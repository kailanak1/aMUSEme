import React from 'react'

import styled, { keyframes } from 'styled-components'

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

function blink() {
    return keyframes`
      50% {
        opacity: 0;
      }
    `;
  }

const TimesUp = styled.text`
    padding: 8px; 
    color: red;
    animation: ${blink} 1s linear infinite;
`

const Button = styled.button`
    padding: 8px; 
    margin: 8px;
`

class ChallengeForm extends React.Component{
    state={
        minutes: 5, 
        seconds: 0,
        words: '',
        analyze: false
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
          const { seconds, minutes } = this.state    
          if (seconds > 0) {
            this.setState(({ seconds }) => ({
              seconds: seconds - 1
            }))
          }
          if (seconds === 0) {
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

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    analyze = () => {
        this.setState({
            analyze: true
        })
    }

    cancel = () => {
        this.setState({
            minutes: 5, 
            seconds: 0,
            words: '',
            analyze: false
        })
    }

    countWords = () => {
        let str = this.state.words
        const matches = str.match(/[\w\d\’\'-]+/gi);
        return matches ? matches.length : 0;
    }
    

    render(){
        const { minutes, seconds } = this.state
        return(
            <div>
            <Form>
                <Title>   
                    { minutes === 0 && seconds === 0
                        ? <TimesUp>Time's Up!</TimesUp>
                        : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                    }</Title>
                <TextField
                 value={this.state.words}
                 onChange={this.handleChange}
                 placeholder="Write your story"
                 name="words" 
                />
            </Form>
            <Button onClick={this.analyze}>Analyze!</Button>
                    {this.state.analyze ? <p>{`You wrote ${this.countWords()} words and ${this.state.words.length} characters.`}</p> : null}
           {/* <Button onClick={this.cancel}>Cancel Challenge</Button>  */}
           </div>
        )
    }
}

export default ChallengeForm