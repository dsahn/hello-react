import React from 'react'

export default class NumberForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = { value: '' }
    }
    doChange (e) {
        const curValue = e.target.value
        const newValue = curValue.replace(/[^0-9]/g,'')
        this.setState({value: newValue})
    }
    doSubmit (e) {
        window.alert('submit: ' + this.state.value)
        e.preventDefault()
    }
    render () {
        const doSubmit = (e) => this.doSubmit(e)
        const doChange = (e) => this.doChange(e)
        return (
            <form onSubmit={doSubmit}>
            <input type="text" value={this.state.value} onChange={doChange}/>
            <input type="submit" value="SEND"/>
            </form>
            )
    }
}