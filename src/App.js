import {Component} from "react";
import './App.scss';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Hotels from "./components/Hotels/Hotels";
import LoadingIcon from "./components/UI/LoadingIcon/LoadingIcon";

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
        hotels: [],
        loading: true
    }

    searchHandler(term) {
        const hotels = [...this.hotels]
            .filter(x => x.name
                .toLowerCase()
                .includes(term.toLowerCase()))
        this.setState({hotels})
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                hotels: this.hotels,
                loading: false
            });
        }, 1500)
    }

    render() {
        return (
            <div className="App container">
                <Header onSearch={(term) => this.searchHandler(term)}/>
                <Menu/>
                {this.state.loading ? (
                    <LoadingIcon/>
                ) : (
                    <Hotels hotels={this.state.hotels}/>
                )}
            </div>
        )
    }
}

export default App;
