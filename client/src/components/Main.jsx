import React from "react";
import { Route, Routes } from "react-router-dom";

function Main() {

    return (
        <React.Fragment>
            <Routes>
                <Route exact path="/message-board" element />
                <Route exact path="/message-board/new" element />
            </Routes>
        </React.Fragment>
    )
}

export default Main;