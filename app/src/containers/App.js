/**
 * NPM import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
// Composant
import App from 'src/components/App';


/**
 * Code
 */
// Données du state
// 2 paramètres (state, ownProps) sont dispo
// Si je ne veux pas renvoyer de props
// `const mapStateToProps = null;`
const mapStateToProps = (state, ownProps) => ({
  loaded: state.loaded,
  data: state.data,
});

/**
 * Container
 */
const AppContainer = connect(mapStateToProps, null)(App);


/**
 * Export
 */
export default withRouter(AppContainer);
