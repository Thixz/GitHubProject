export const addRepos = (data) => {
    return{
        type:'REPOPAGE_ADD_REPOS',
        data
    }
}

export const changeRepoPageToDetails = (data) => {
    return{
        type:'CHANGE_REPOPAGE_TO_DETAILS',
        data
    }
}

export const isLoading = (data) => {
    return{
        type:'REPOPAGE_IS_LOADING',
        data
    }
}

export const initalState = () => {
    return{
        type:'REPOPAGE_INITIAL',
    }
}

export const addIssues = (data) => {
    return{
        type:'ADD_ISSUES',
        data
    }
}