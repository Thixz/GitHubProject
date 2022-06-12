import { combineReducers } from "redux";
import repositories from './repositories'
import issuesList from './issuesList'

export default combineReducers({
    repositories,
    issuesList
})