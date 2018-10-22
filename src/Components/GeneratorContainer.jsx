import React, {Component, Fragment} from 'react'
import PeopleForm from './PeopleForm'
import RoomForm from './RoomForm'
import ThemePicker from './ThemePicker'

class GeneratorContainer extends Component {
    state = {
        names: [],
        theme: "",
        rooms: {
            1: {
                name: "",
                capacity: 0
            },
            2: {
                name: "",
                capacity: 0
            },
            3: {
                name: "",
                capacity: 0
            },
            4: {
                name: "",
                capacity: 0
            },
            5: {
                name: "",
                capacity: 0
            },
            6: {
                name: "",
                capacity: 0
            }
        },
        generated: false
    }

    onPeopleChange = (names) => {
        const split = names.split(" ")
        this.setState({
            ...this.state,
            names: split
        }, console.log(this.state.names))
    }

    onRoomChange = (roomData) => {
        console.log("room value", roomData)
        this.setState({
            ...this.state,
            rooms: {
                ...this.state.rooms,
                [roomData["number"]]: {
                    ...this.state.rooms[roomData["number"]],
                    [roomData["parameter"]]: roomData["value"]
                }
            }
        }, console.log(this.state))

    }

    onThemeChange = () => {
        fetch("https://api.giphy.com/v1/gifs/random?api_key=MhELQoClJqxLiO3j5jO7kErQfF0ymHQm&tag=jungle&rating=G", {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(resp => resp.json())
        .then(resp => console.log(resp))
    }

    showLink = () => {
        if (!!this.state.generated) {
            return (<div>
                Visit this link to see the lunch invitations!
            </div>)
        }
    }

    render(){
        return (
            <Fragment>
                <div>HELLO WORLD</div>
                1. Paste names of available attendees
                <PeopleForm onPeopleChange={this.onPeopleChange}/>
                2. Enter available rooms & capacities
                <RoomForm onRoomChange={this.onRoomChange}/>
                3. Choose Theme
                <ThemePicker onThemeChange={this.onThemeChange}/>
                <button>
                    Generate Rooms!
                </button>
                {this.showLink()}
            </Fragment>
        )
    }
}

export default GeneratorContainer