import { connect } from 'react-redux'
import { receiveAllDiamonds, requestAllDiamonds } from '../DiamondsActions'
import DiamondsIndex from './DiamondsIndex'

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        web3: state.web3,
        diamonds: state.diamonds 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestAllDiamonds: () => dispatch(requestAllDiamonds())
    }
}

const DiamondsIndexContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DiamondsIndex)

export default DiamondsIndexContainer; 