import React from 'react'

export class SimpleForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {value: ''}
    }
    // onChange 의 핸들러로 등록되므로 바뀔때마다 console.log 가 찍힘
    doChange (e) {
        const newValue = e.target.value
        this.setState({value: newValue})
        // console.log('doChange')
    }
    doSubmit (e) {
        window.alert('send: ' + this.state.value)
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
export default SimpleForm
