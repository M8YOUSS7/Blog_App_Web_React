//---------------------------------------------------------------- Composants
class TlBr extends React.Component {
        render() {
                return  <table id={this.props.name}>
                            <tbody><tr>{this.props.tab.map((e, k) => <th key={k}>{e}</th>)}</tr></tbody>
                        </table>
        }
}

class TlBrBtn extends React.Component {
        render() {
                return  <table id={this.props.name}>
                                <tbody><tr>{
                                        this.props.tab.map(([v, o], k) =>
                                                <th key={k}><button onClick={o}>{v}</button></th>
                                        )}</tr></tbody>
                        </table>
        }
}

class AffDate extends React.Component {
        constructor(props) {
                super(props)
                this.state = {
                        date : new Date()
                }
                this.timer = null
        }

        componentDidMount() {
                this.timer = window.setInterval(this.tick.bind(this), 1000)
        }

        componentWillUnmount() {
                window.clearInterval(this.timer)
        }

        tick() {
                this.setState({date: new Date()})
        }

        render() {
                return `On est le ${this.state.date.toLocaleDateString()} et il est ${this.state.date.toLocaleTimeString()}`
        }
}

//---------------------------------------------------------------- Pages

class App extends React.Component {
        constructor(props) {
                super(props)

                this.state      ={container: null}

                this.Accueil    =this.Accueil.bind(this)
                this.Test       =this.Test.bind(this)
                this.Projets    =this.Projets.bind(this)
                this.Apropos    =this.Apropos.bind(this)
        }

        componentDidMount() {
                this.Accueil()
        }

        componentWillUnmount() {
                this.setState({container: null})
        }

        Accueil() {
                this.setState({container:
                        <React.Fragment>
                                <img src='img/imgAcc.jpg' alt='immage accueil' id='imgAcc'/>
                                <div id='msgBvn'>Bienvenu sur mon blog perso</div>
                        </React.Fragment>})
        }

        Test(e) {
                this.setState({container:
                        <React.Fragment>
                                <h1>Tests</h1>
                        </React.Fragment>})
        }

        Projets(e) {
                this.setState({container:
                        <React.Fragment>
                                <h1>Projets</h1>
                        </React.Fragment>})
        }

        Apropos(e) {
                this.setState({container:
                        <React.Fragment>
                                <h1>A Propos</h1>
                        </React.Fragment>})
        }

        render() {
                const hd        = [['Accueil', this.Accueil],
                                ['Tests', this.Test],
                                ['Projets', this.Projets],
                                ['A Propos', this.Apropos]]
                const ft        = ['MAHAMAT YOUSSOUF Youssouf', <AffDate/>]

                return  <React.Fragment>
                                <header id="hdTlBr"><TlBrBtn name="tHeader" tab={hd}/></header>
                                <div id="container">{this.state.container}</div>
                                <footer id="ftTlBr"><TlBr name="tFooter" tab={ft}/></footer>
                        </React.Fragment>
        }
}


//---------------------------------------------------------------- Index
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<React.StrictMode><App/></React.StrictMode>)
//----------------------------------------------------------------