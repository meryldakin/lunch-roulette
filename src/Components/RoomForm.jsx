import React, { Component } from 'react'

const RoomForm = (props) => {
    const onChange = (event, number, parameter) => {
        props.onRoomChange({
            number: number,
            parameter: parameter,
            value: event.target.value            
        })
    }
    return (
        <form>
            <table>
                <tbody>
                    <tr>
                        <th>
                            room name
                        </th>
                        <th>
                            room capacity
                        </th>
                    </tr>
                    <tr>
                        <td><input onChange={(event) => onChange(event, 1, "name")} type="text"/> </td>
                        <td><input onChange={(event) => onChange(event, 1, "capacity")} type="text"/></td>
                    </tr>
                    <tr>
                        <td><input onChange={(event) => onChange(event, 2, "name")} type="text"/></td>
                        <td><input onChange={(event) => onChange(event, 2, "capacity")} type="text"/></td>
                    </tr>
                    <tr>
                        <td><input onChange={(event) => onChange(event, 3, "name")} type="text"/></td>
                        <td><input onChange={(event) => onChange(event, 3, "capacity")} type="text"/></td>
                    </tr>
                    <tr>
                        <td><input onChange={(event) => onChange(event, 4, "name")} type="text"/></td>
                        <td><input onChange={(event) => onChange(event, 4, "capacity")} type="text"/></td>
                    </tr>
                    <tr>
                        <td><input onChange={(event) => onChange(event, 5, "name")} type="text"/></td>
                        <td><input onChange={(event) => onChange(event, 5, "capacity")} type="text"/></td>
                    </tr>
                    <tr>
                        <td><input onChange={(event) => onChange(event, 6, "name")} type="text"/></td>
                        <td><input onChange={(event) => onChange(event, 6, "capacity")} type="text"/></td>
                    </tr> 
                </tbody>               
            </table>
        </form>
    )
}

export default RoomForm