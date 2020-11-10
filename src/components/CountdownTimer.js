import React from 'react';
import styled, {keyframes} from 'styled-components'

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

const Title = styled.h3`
    padding: 8px; 
`

const CountdownTimer = () => {

    const [counter, setCounter] = React.useState(300)

    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter -1), 1000);
    }, [counter])

    let convertCounter = () => {
        let minutes = Math.floor(counter / 60)
        let seconds = counter - minutes * 60
        if(seconds < 10){
             seconds = `0${seconds}`
        }
        return `${minutes}:${seconds}`
    }
    
    return (
        <React.Fragment>
            <Title> 
                {counter === 0 ? <TimesUp>Time's Up </TimesUp> : convertCounter()}
            </Title>
        </React.Fragment>
    )
}

export default CountdownTimer