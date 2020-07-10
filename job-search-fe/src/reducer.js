export const initialState = {
user:[],
users:[],
loading:false,
experiences:[],
projects:[],
jobs:[],
messages:[],
posts:[],
friends:[],
requests:[],
skills:[],
}


export const reducer = (state=initialState,action ) => {
switch(action.type){
    case "FETCH_USER_START":
        return {
            ...state,
            loading:true
        }
        case "FETCH_USER_SUCCESS":
                console.log(action.payload)

        return {
            ...state,
            
            user:action.payload.filter(e => (
                e.username === localStorage.getItem("username")
            ))[0],
            loading:false
        }
        case "FETCH_SKILLS_START":
            return {
                ...state,
                loading:true
            }
            case "FETCH_SKILLS_SUCCESS":
                    console.log(action.payload)
    
            return {
                ...state,
                skills:action.payload,
                loading:false
            }
        case "FETCH_SKILLS_ERROR":
        return {
            ...state,
            loading:false
        }
        case "FETCH_USERS_START":
            return {
                ...state,
                loading:true
            }
            case "FETCH_USERS_SUCCESS":
                    console.log(action.payload)
    
            return {
                ...state,
                users:action.payload.filter(e => (
                    Number(e.id) ===  Number(action.id)
                ))[0],
                loading:false
            }
        case "FETCH_USERS_ERROR":
        return {
            ...state,
            loading:false
        }
        case "SIGN_IN_START":
            return {
                ...state,
                loading:true
            }
            case "SIGN_IN_SUCCESS":
            return {
                ...state,
                loading:false
            }
            case "SIGN_IN_ERROR":
            return {
                ...state,
                loading:false
            }
            case "FETCH_EXPERIENCES_START":
            return {
                ...state,
                loading:true
            }
            case "FETCH_EXPERIENCES_SUCCESS":
            return {
                ...state,
                experiences:action.payload,
                loading:false
            }
            case "FETCH_EXPERIENCES_ERROR":
            return {
                ...state,
                loading:false
            }
            case "ADD_EXPERIENCES_START":
            return {
                ...state,
                loading:true
            }
            case "ADD_EXPERIENCES_SUCCESS":
            return {
                ...state,
                experiences:[...state.experiences,action.payload],
                loading:false
            }
            case "ADD_EXPERIENCES_ERROR":
            return {
                ...state,
                loading:false
            }
            case "FETCH_PROJECTS_START":
            return {
                ...state,
                loading:true
            }
            case "FETCH_PROJECTS_SUCCESS":
            return {
                ...state,
                projects:action.payload,
                loading:false
            }
            case "FETCH_PROJECTS_ERROR":
            return {
                ...state,
                loading:false
            }
            case "ADD_PROJECTS_START":
            return {
                ...state,
                loading:true
            }
            case "ADD_PROJECTS_SUCCESS":
            return {
                ...state,
                projects:[...state.projects,action.payload],
                loading:false
            }
            case "ADD_PROJECTS_ERROR":
            return {
                ...state,
                loading:false
            } 
            case "EDIT_PROFILE_START":
            return {
                ...state,
                loading:true
            }
            case "EDIT_PROFILE_SUCCESS":
            return {
                ...state,
                user:action.payload[0],
                loading:false
            }
            case "EDIT_PROFILE_ERROR":
            return {
                ...state,
                loading:false
            }
            case "EDIT_EXPERIENCES_START":
            return {
                ...state,
                loading:true
            }
            case "EDIT_EXPERIENCES_SUCCESS":
            return {
                ...state,
                experiences:action.payload.filter(e => (
                    e.users_id === state.user.id
                )),
                loading:false
            }
            case "EDIT_EXPERIENCES_ERROR":
            return {
                ...state,
                loading:false
            }
            case "DELETE_EXPERIENCES_START":
                return {
                    ...state,
                    loading:true
                }
                case "DELETE_EXPERIENCES_SUCCESS":
                return {
                    ...state,
                    experiences:action.payload.filter(e => (
                        e.users_id === state.user.id
                    )),
                    loading:false
                }
                case "DELETE_EXPERIENCES_ERROR":
                return {
                    ...state,
                    loading:false
                }
                case "EDIT_PROJECTS_START":
                    return {
                        ...state,
                        loading:true
                    }
                    case "EDIT_PROJECTS_SUCCESS":
                    return {
                        ...state,
                        projects:action.payload.filter(e => (
                            e.users_id === state.user.id
                        )),
                        loading:false
                    }
                    case "EDIT_PROJECTS_ERROR":
                    return {
                        ...state,
                        loading:false
                    }
                    case "FETCH_JOBS_START":
                    return {
                        ...state,
                        loading:true
                    }
                    case "FETCH_JOBS_SUCCESS":
                    return {
                        ...state,
                        jobs:action.payload,
                        loading:false
                    }
                    case "FETCH_JOBS_ERROR":
                    return {
                        ...state,
                        loading:false
                    }
                    case "FETCH_MESSAGES_START":
                        return {
                            ...state,
                            loading:true
                        }
                        case "FETCH_MESSAGES_SUCCESS":
                        return {
                            ...state,
                            messages:action.payload,
                            loading:false
                        }
                        case "FETCH_MESSAGES_ERROR":
                        return {
                            ...state,
                            loading:false
                        }
                        case "SEND_MESSAGES_START":
                            return {
                                ...state,
                                loading:true
                            }
                            case "SEND_MESSAGES_SUCCESS":
                            return {
                                ...state,
                                messages:[...state.messages,action.payload],
                                loading:false
                            }
                            case "SEND_MESSAGES_ERROR":
                            return {
                                ...state,
                                loading:false
                            }
            case "ADD_JOBS_START":
            return {
                ...state,
                loading:true
            }
            case "ADD_JOBS_SUCCESS":
            return {
                ...state,
                jobs:[...state.jobs,action.payload],
                loading:false
            }
            case "ADD_JOBS_ERROR":
            return {
                ...state,
                loading:false
            } 
            case "EDIT_JOBS_START":
                return {
                    ...state,
                    loading:true
                }
                case "EDIT_JOBS_SUCCESS":
                return {
                    ...state,
                    jobs:action.payload,
                    loading:false
                }
                case "EDIT_JOBS_ERROR":
                return {
                    ...state,
                    loading:false
                } 
                case "DELETE_JOBS_START":
                    return {
                        ...state,
                        loading:true
                    }
                    case "DELETE_JOBS_SUCCESS":
                    return {
                        ...state,
                        jobs:action.payload,
                        loading:false
                    }
                    case "DELETE_JOBS_ERROR":
                    return {
                        ...state,
                        loading:false
                    } 
                    case "FETCH_POSTS_START":
                        return {
                            ...state,
                            loading:true
                        }
                        case "FETCH_POSTS_SUCCESS":
                        return {
                            ...state,
                            posts:action.payload,
                            loading:false
                        }
                    case "FETCH_POSTS_ERROR":
                    return {
                        ...state,
                        loading:false
                    }
                    case "ADD_POSTS_START":
                        return {
                            ...state,
                            loading:true
                        }
                        case "ADD_POSTS_SUCCESS":
                        return {
                            ...state,
                            posts:[...state.posts,action.payload],
                            loading:false
                        }
                    case "ADD_POSTS_ERROR":
                    return {
                        ...state,
                        loading:false
                    }
                    case "FETCH_FRIENDS_START":
                        return {
                            ...state,
                            loading:true
                        }
                        case "FETCH_FRIENDS_SUCCESS":
                        return {
                            ...state,
                            friends:action.payload,
                            loading:false
                        }
                    case "FETCH_FRIENDS_ERROR":
                    return {
                        ...state,
                        loading:false
                    }
                    case "ADD_FRIENDS_START":
                        return {
                            ...state,
                            loading:true
                        }
                        case "ADD_FRIENDS_SUCCESS":
                        return {
                            ...state,
                            friends:[...state.friends,action.payload],
                            loading:false
                        }
                    case "ADD_FRIENDS_ERROR":
                    return {
                        ...state,
                        loading:false
                    }
                    case "SEND_REQUEST_START":
                        return {
                            ...state,
                            loading:true
                        }
                        case "SEND_REQUEST_SUCCESS":
                        return {
                            ...state,
                            requests:[...state.requests,action.payload],
                            loading:false
                        }
                    case "SEND_REQUEST_ERROR":
                    return {
                        ...state,
                        loading:false
                    }
                    case "FETCH_REQUESTS_START":
                        return {
                            ...state,
                            loading:true
                        }
                        case "FETCH_REQUESTS_SUCCESS":
                        return {
                            ...state,
                            requests:action.payload,
                            loading:false
                        }
                    case "FETCH_REQUESTS_ERROR":
                    return {
                        ...state,
                        loading:false
                    }
                    case "DELETE_REQUESTS_START":
                        return {
                            ...state,
                            loading:true
                        }
                        case "DELETE_REQUESTS_SUCCESS":
                        return {
                            ...state,
                            requests:state.requests.filter(e => (
                               e !==  action.payload
                            )),
                            loading:false
                        }
                        case "DELETE_REQUESTS_ERROR":
                        return {
                            ...state,
                            loading:false
                        } 
    default :
    return state
}
}