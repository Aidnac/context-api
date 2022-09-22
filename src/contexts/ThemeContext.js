import React , { createContext }from "react";

export const ThemeContext = createContext()

class ThemeContextProvider extends React.Component {

    state = {
        isDarkTheme: true,
        lightTheme:{
            text:'#222',
            background:'#d8ddf1'
        },
        darkTheme:{
            text:'#fff',
            background:'#5c5c5c'
        }
    }

    changeTheme = () =>{
        this.setState({isDarkTheme:!this.state.isDarkTheme})        
    }

    render(){
        return(
            //We are giving the Provider all state value pairs
            <ThemeContext.Provider value={{ ...this.state , changeTheme: this.changeTheme}}>
                {/* This refers to the other components it raps */}
                {this.props.children}
            </ThemeContext.Provider>
        )
    }

}

export default ThemeContextProvider