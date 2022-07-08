import {Component} from "react";
import './App.scss';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Hotels from "./components/Hotels/Hotels";

class App extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    hotels = [
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
    ];
    state = {
        hotels: this.hotels
    }

    searchHandler(term) {
        console.log('szukaj z app', term)
        const hotels = [...this.hotels]
            .filter(x => x.name
                .toLowerCase()
                .includes(term.toLowerCase()))
        this.setState({hotels})
    }

    render() {
        return (
            <div className="App container">
                <Header onSearch={(term) => this.searchHandler(term)}/>
                <Menu/>
                <Hotels hotels={this.state.hotels}/>
            </div>
        )
    }
}

export default App;
