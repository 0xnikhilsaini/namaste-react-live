const headingOne = React.createElement(
    "h1",
    { className: "title" },
    "Namaste React Live"
);

const headingTwo = React.createElement(
    "h3",
    { className: "title2" },
    "Namaste React Live 2"
);

const div1 = React.createElement("div", { className: "head1" }, [headingOne]);
const div2 = React.createElement("div", { className: "head1" }, [headingTwo]);
const container = React.createElement("div", { className: "container" }, [
    div1,
    div2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);