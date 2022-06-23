const initialStateRepoPage = {
  repositorios: [],
  isLoading: false,
  ownerLogin: '',
  ownerAvatarUrl: null,
  txtRepositorioDe: '',
  txtQtdRepositorio: '',
};

const repositories = (state = [], action) => {
  switch (action.type) {
    case 'REPOPAGE_ADD_REPOS':
      console.log(action.data);
      return {
        ...state,
        repositorios: action.data,
        ownerLogin: action.data[0].owner.login,
        isLoading: false,
        ownerAvatarUrl: action.data[0].owner.avatar_url,
        txtRepositorioDe: `Repositórios de : ${action.data[0].owner.login}`,
        txtQtdRepositorio: `Quantidade de Repositórios : ${action.data.length}`,
      };
    case 'REPOPAGE_IS_LOADING':
      return { ...state, isLoading: action.data };
    case 'REPOPAGE_INITIAL':
      return initialStateRepoPage;
    case 'CHANGE_REPOPAGE_TO_DETAILS':
      return {
        ...state,
        reposName: action.data.name,
        language: action.data.language,
        description: action.data.description
      };
    default:
      return { ...state, isLoading: false };
  }
};

export default repositories;
