import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            userData : {
                name:"dummy",
                location:"default"
            }
        }
    }
    async componentDidMount () {
        const data = await fetch("https://api.github.com/users/RakshThimma")
        const user = await data.json()

        this.setState({
            userData: user
        })
    }

    componentWillUnmount() {
        console.log("unmounted")
    }

    render() {
        const { name,location,id } = this.state.userData;
        return (
            <div className="text-2xl px-7 py-2 text-pink-600">
                <h1>{name}</h1>
                <h3>{location}</h3>
                <h3>{id}</h3>
            </div>
        )
    }
}
export default UserClass