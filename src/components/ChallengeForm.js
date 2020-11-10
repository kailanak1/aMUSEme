import React  from 'react'

import CountdownTimer from './CountdownTimer'

import styled from 'styled-components'

const Form = styled.form`
    width: 100%;
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

const Button = styled.button`
    padding: 8px; 
    margin: 8px;
    cursor: pointer;
`



class ChallengeForm extends React.Component {
    state={
        words: '',
        analyze: false
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
        const matches = str.match(/[\w\d\’\'-]+/gi);
        return matches ? matches.length : 0;
    }
    

    render(){

        return(
            <div>
            <Form>
            
                <CountdownTimer/>
                
                <TextField
                 value={this.state.words}
                 onChange={this.handleChange}
                 placeholder="Write your story"
                 name="words" 
                />
            </Form>
            <Button onClick={this.analyze}>Analyze!</Button>
                    {this.state.analyze ? <p>{`You wrote ${this.countWords()} words and ${this.state.words.length} characters.`}</p> : null}
           </div>
        )
    }
}

export default ChallengeForm