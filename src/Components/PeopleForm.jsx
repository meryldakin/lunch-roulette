import React, {Component} from 'react'

class PeopleForm extends Component {
    state = {
        names: ''
    }

    onChange = (event) => {
        event.preventDefault()
        this.props.onPeopleChange(event.target.value)
    }
    render() {
        return (
            <form>
                <input label='names' onChange={this.onChange}></input>
            </form>
        )
    }
}

export default PeopleForm