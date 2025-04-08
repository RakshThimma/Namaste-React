import UserClass from "./UserClass";
import React from "react";


class About extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {

    }
    render() {
        return (
            <div className="m-5 border-gray-500 border-2 border-solid p-2">
                <h1 className="text-6xl px-7 py-2">About</h1>
                <h2 className="text-3xl px-7 py-2 text-blue-600">Welcome to Namaste React Web Series !!!</h2>
                <UserClass name={"Rakshitha(class)"} location={"Raksh (loc)"}/>
            </div>
        )
    }
}

export default About