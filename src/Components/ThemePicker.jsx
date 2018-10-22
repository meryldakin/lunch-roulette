import React, { Component } from 'react'

class ThemePicker extends Component {
    render() {
        return (
            <div>
                <form>
                    <select onChange={this.props.onThemeChange}>
                        <option value="jungle">Jungle</option>
                        <option value="space">Space</option>
                        <option value="cat party">Cat Party</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default ThemePicker