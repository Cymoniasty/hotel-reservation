import {Component} from "react";
import './App.scss';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Hotels from "./components/Hotels/Hotels";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotels: [
                {
                    id: 0,
                    name: 'Pod akacjami',
                    city: 'Warszawa',
                    rating: '8.3',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat id lorem vitae accumsan.',
                    image: '',
                },
                {
                    id: 1,
                    name: 'Dębowy',
                    city: 'Lublin',
                    rating: '8.8',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat id lorem vitae accumsan.',
                    image: '',
                }
            ]
        }
    }

    render() {
        return (
            <div className="App container">
                <Header/>
                <Menu/>
                <Hotels hotels={this.state.hotels}/>
            </div>
        )
    }
}

export default App;
