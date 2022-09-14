export default function reducers(state, action) {
    
    switch (action.type) {
        case "ADD_JOB":
            const {favorJob} = action.payload
            return {...state, favorJobs:[...state.favorJobs,favorJob]};
        case 'DELETE_JOB':
            const {id} = action.payload
            return {...state, favorJobs:state.favorJobs.filter(x=>x.id !== id)}
        default:
            return state;
    }
}