import React from "react";

const FetchButtonsContext = React.createContext({
    buttons: [],
    fetchButtons: () => {}
});

export default FetchButtonsContext;
