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

function blinkingEffect() {
    return keyframes`
      50% {
        opacity: 0;
      }
    `;
  }



const TimesUp = styled.text`
    color: red;
    animation: ${blinkingEffect} 1s linear infinite;
`

const AnalysisButton = styled.button`
    padding: 8px; 
    margin: 8px;
`

class ChallengeForm extends React.Component{
    state={
        minutes: 1, 
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
  
    countWords = () => {
        let str = this.state.words
            var matches = str.match(/[\w\d\’\'-]+/gi);
            return matches ? matches.length : 0;
    }
    

    render(){
        console.log(this.state.words)
        const { minutes, seconds } = this.state
        return(
            <div>
            <Form>
                <Title>   
                    { minutes === 0 && seconds === 0
                        ? <TimesUp>Time!</TimesUp>
                        : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                    }</Title>
                <TextField
                value={this.state.words}
                onChange={this.handleChange}
                placeholder="Write your story"
                name="words" 
                />
            </Form>
            <AnalysisButton onClick={this.analyze}>Analyze!</AnalysisButton>
                    {this.state.analyze ? <p>{`You wrote ${this.countWords()} words and ${this.state.words.length} characters in ____ minutes and ___ seconds.`}</p> : null}
           </div>
        )
    }
}

export default ChallengeForm