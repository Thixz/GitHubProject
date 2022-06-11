export const addRepos = (data) => {
    return{
        type:'REPOPAGE_ADD_REPOS',
        data
    }
}

export const isLoading = (data) => {
    return{
        type:'REPOPAGE_IS_LOADING',
        data
    }
}

export const initalState = (data) => {
    return{
        type:'REPOPAGE_INITIAL',
        data
    }
}