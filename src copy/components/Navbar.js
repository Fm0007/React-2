import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/medical-bag'

const Navbar = () => {
    return (
        <header className="navbar">
            <h1><Icon icon={locationIcon} /> Pharmacy Locator build 0.0</h1>
        </header>
    )
}

export default Navbar
