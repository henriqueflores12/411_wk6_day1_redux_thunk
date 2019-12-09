import { connect } from 'react-redux'
import ImportTotal from '../components/ImportTotal'

const mapStateToProps = (state) => {
    return {
        makes: state.makes
    }
}

export default connect(mapStateToProps)(ImportTotal)