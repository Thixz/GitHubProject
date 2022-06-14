const initialStateRepoPage = {
  repositorios: [],
  isLoading: false,
  ownerLogin: '',
  ownerAvatarUrl: 'null',
  txtRepositorioDe: '',
  txtQtdRepositorio: '',
};

const repositories = (state = [], action) => {
  if (action.type == 'REPOPAGE_ADD_REPOS') {
    return {
      ...state,
      repositorios: action.data,
      ownerLogin: action.data[0].owner.login,
      isLoading: false,
      ownerAvatarUrl: action.data[0].owner.avatar_url,
      txtRepositorioDe: `Repositórios de : ${action.data[0].owner.login}`,
      txtQtdRepositorio: `Quantidade de Repositórios : ${action.data.length}`,
    };
  }

  if (action.type == 'REPOPAGE_IS_LOADING') {
    return { ...state, isLoading: action.data };
  }

  if (action.type == 'REPOPAGE_INITIAL') {
    return initialStateRepoPage;
  }

  if (action.type == 'CHANGE_REPOPAGE_TO_DETAILS') {
    return {
      ...state,
      language: action.data.language,
      description: action.data.description,
      reposName: action.data.name,
    };
  }

  if (state.length == 0) {
    return initialStateRepoPage;
  } else {
    return state;
  }
};

export default repositories;
