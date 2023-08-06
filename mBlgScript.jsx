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

class SlcPjt extends React.Component {
        constructor(props) {
                super(props)
        
                this.state = {
                        typeProjet: 'ts'
                }

                this.handleOptionChange    =this.handleOptionChange.bind(this)
        }
        
        handleOptionChange(e) {
                this.setState({
                        typeProjet: e.target.value
                })
        }

        afficheSelection(typeProjet) {
                switch(typeProjet) { 
                        case 'stj' :
                                return <p>Realisations dans le cadre des stages</p>;
                        case 'scl' :
                                return <p>Realisations Scolaires</p>;
                        case 'prs' :
                                return <p>Realisations Personnels</p>;
                        default:
                                return <p>Tous les type de realisations</p>;
                }
        }

        render() {
                return <React.Fragment>
                        <label htmlFor="sltPjt" id="prjLab">Projets :</label>
                        <select name="slcPjt" id="slcPjt" value={this.state.typeProjet} onChange={this.handleOptionChange}>
                                <option value="tou">Tous</option>
                                <option value="stj">Stage</option>
                                <option value="scl">Scolaire</option>
                                <option value="prs">Personnel</option>
                        </select>
                        <div id="affSel">{this.afficheSelection(this.state.typeProjet)}</div>
                </React.Fragment>
        }
}

//---------------------------------------------------------------- Pages

class App extends React.Component {
        constructor(props) {
                super(props)

                this.state      ={
                        container: undefined
                }

                this.Accueil    =this.Accueil.bind(this)
                this.Passions       =this.Passions.bind(this)
                this.Projets    =this.Projets.bind(this)
                this.Apropos    =this.Apropos.bind(this)
        }

        componentDidMount() {
                this.Accueil()
        }

        componentWillUnmount() {
                
        }

        Accueil() {
                document.title ="Bienvenu Sur Mon Blog"
                this.setState({container:
                        <React.Fragment>
                                <img src='img/imgAcc.jpg' alt='immage accueil' id='imgAcc'/>
                                <div id='msgBvn'>Bienvenu sur mon blog perso</div>
                        </React.Fragment>})
        }

        Passions(e) {
                document.title ="Passions"
                this.setState({container:
                        <React.Fragment>
                                <h1>Passions</h1>
                        </React.Fragment>})
        }

        Projets(e) {
                document.title ="Projets"
                this.setState({container:
                        <React.Fragment>
                                <SlcPjt/>
                        </React.Fragment>})
        }

        Apropos(e) {
                document.title ="A Propos"
                this.setState({container:
                        <React.Fragment>
                                <h1>A Propos</h1>
                        </React.Fragment>})
        }

        render() {
                const hd =     [['Accueil', this.Accueil],
                                ['Projets', this.Projets],
                                ['Passions', this.Passions],
                                ['A Propos', this.Apropos]]
                const ft        = ['MAHAMAT YOUSSOUF Youssouf', <AffDate/>]

                return  <React.Fragment>
                                <header id="hdTlBr"><TlBrBtn name="tHeader" tab={hd} onChange={this.handlePageChange}/></header>
                                <div id="container">{this.state.container}</div>
                                <footer id="ftTlBr"><TlBr name="tFooter" tab={ft}/></footer>
                        </React.Fragment>
        }
}


//---------------------------------------------------------------- Index
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<React.StrictMode><App/></React.StrictMode>)
//----------------------------------------------------------------