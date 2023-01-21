function app() {
    return[
        React.createElement(h1),
        React.createElement(h2),
        React.createElement(h3),
        React.createElement(h4),
        React.createElement(h5),
        React.createElement(h6),
        React.createElement(list)
    ]
};
function h1() {
    return React.createElement("h1",{class:"main"},"this is my first element in react")
}
function h2(){
    return React.createElement("h2",{id:"h2"},"this is h2")
}
function h3(){
    return React.createElement("h3",{id:"h3"},"this is h3")
}
function h4(){
    return React.createElement("h4",{id:"h4"},"this is h4")
}
function h5(){
    return React.createElement("h5",{id:"h5"},"this is h5")
}
function h6(){
    return React.createElement("h6",{id:"h6"},"this is h6")
}
function list(){
    return React.createElement("ul",{},
    React.createElement("li",{},"mango"),
    React.createElement("li",{},"apple"),
    React.createElement("li",{},"banana"),
    ) 
}


ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(app))