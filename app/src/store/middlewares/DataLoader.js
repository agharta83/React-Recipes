import axios from 'axios';

const DataLoader = store => next => (action) => {
  switch (action.type) {
    case 'LOAD_DATA': {
      axios.get('https://raw.githubusercontent.com/raywenderlich/recipes/master/Recipes.json')
        // la réponse arrive… après un certain temps…
        .then((response) => {
          store.dispatch({
            type: 'DATA_RECEIVED',
            data: response.data,
          });
        });
      break;
    }

    default:
      next(action);
  }
};

export default DataLoader;
