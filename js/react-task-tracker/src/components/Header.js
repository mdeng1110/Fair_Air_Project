import PropTypes from 'prop-types'
import Button from './Buttons'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green'text='Add' onClick=
            {onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// css in js
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }
export default Header