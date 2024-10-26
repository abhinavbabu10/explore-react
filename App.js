

import React from "react"
import ReactDOM from "react-dom/client"

const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"this is namaste"),
    React.createElement("h2",{},"iam hero")
]),

React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"iam supwer tag"),
    React.createElement("h2",{},"iam here to")
])

])

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)