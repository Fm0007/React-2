
import ResultContainer from './ResultContainer'

const Navbar = ({selected_zone,choosePH}) => {

    return (
        <div className="navbar">
            <ResultContainer selected_zone={selected_zone} choosePH={choosePH} />
        </div>
    )
}

export default Navbar
