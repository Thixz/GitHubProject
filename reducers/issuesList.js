const issuesList = (state = [], action) => {
  if (action.type == 'ADD_ISSUES') {
    return {
      lista: action.data,
    };
  } else {
    return state;
  }
};

export default issuesList;
