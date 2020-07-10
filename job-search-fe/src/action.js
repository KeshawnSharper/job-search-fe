import axios from "axios"
import { Route,Redirect } from 'react-router-dom'

export function login (input,props) {
    
    return (dispatch) => {
        dispatch({type:"FETCH_USER_START"})
        console.log(input)
        axios.get("http://127.0.0.1:8000",input
        ,{
            headers:{
                "Authorization": `Token ${localStorage.getItem("token")}`,
                "Content-Type":"application/json"           
            },   
        },
        )
  .then(res => {
      console.log(res.data)
      dispatch({type:"FETCH_USER_SUCCESS",payload:res.data})
      
    })
  .catch(err => {
      console.log(err)
    dispatch({type:"FETCH_USER_ERROR",payload:err})}
    )
    }
}
export function getUsers (input) {
    
    return (dispatch) => {
        dispatch({type:"FETCH_USERS_START"})
        console.log(input)
        axios.get("http://127.0.0.1:8000",input
        ,{
            headers:{
                "Authorization": `Token ${localStorage.getItem("token")}`,
                "Content-Type":"application/json"           
            },   
        },
        )
  .then(res => {
      console.log(res.data)
      dispatch({type:"FETCH_USERS_SUCCESS",payload:res.data,id:input})
      
    })
  .catch(err => {
      console.log(err)
    dispatch({type:"FETCH_USERS_ERROR",payload:err})}
    )
    }
}
export function signin (input,props) {
    return (dispatch) => {
        dispatch({type:"SIGN_IN_START"})
        console.log(input)
    axios.post("http://127.0.0.1:8000/auth/token/login/",input
    // ,

    // {
        // headers: {
        //     'Access-Control-Allow-Origin': '*',
        //     'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
        //     Access-Control-Allow-Headers: Content-Type
        // }}
        )
    
   .then(res => {
    //  localStorage.setItem("name",loginForm.userName)
    dispatch({type:"SIGN_IN_SUCCESS"})
    localStorage.setItem("token",res.data.auth_token)
    localStorage.setItem("username",input.username)
    localStorage.setItem("password",input.password)
    localStorage.setItem("email",input.username)
    props.history.push(`/profile`)
    console.log(res.data)
   })
   .catch(err => 
    {
        console.log(err)
        dispatch({type:"SIGN_IN_ERROR",payload:err})

    })

}}
export function getExperiences (input,props) {
    
    return (dispatch) => {
        dispatch({type:"FETCH_EXPERIENCES_START"})
        console.log(input)
        axios.get(`http://127.0.0.1:8000/experience/${Number(input)}`
        ,{
            headers:{
                "Authorization": `Token ${localStorage.getItem("token")}`,
                "Content-Type":"application/json"           
            },   
        },
        )
  .then(res => {
    console.log(localStorage.getItem("username"))
      dispatch({type:"FETCH_EXPERIENCES_SUCCESS",payload:res.data,id:input})
      
    })
  .catch(err => {
      console.log(err)
    dispatch({type:"FETCH_EXPERIENCES_ERROR",payload:err})}
    )
    }
}
export function getProjects (input,props) {
    
    return (dispatch) => {
        dispatch({type:"FETCH_PROJECTS_START"})
        console.log(input)
        axios.get(`http://127.0.0.1:8000/projects/${Number(input)}`
        ,{
            headers:{
                "Authorization": `Token ${localStorage.getItem("token")}`,
                "Content-Type":"application/json"           
            },   
        },
        )
  .then(res => {
      console.log(res.data)
      dispatch({type:"FETCH_PROJECTS_SUCCESS",payload:res.data,id:input})
      
    })
  .catch(err => {
      console.log(err)
    dispatch({type:"FETCH_PROJECTS_ERROR",payload:err})}
    )
    }
}
export function getSkills (input) {
    
    return (dispatch) => {
        dispatch({type:"FETCH_SKILLS_START"})
        console.log(input)
        axios.get(`http://127.0.0.1:8000/skills/${Number(input)}`
        ,{
            headers:{
                "Authorization": `Token ${localStorage.getItem("token")}`,
                "Content-Type":"application/json"           
            },   
        },
        )
  .then(res => {
      console.log(res.data)
      dispatch({type:"FETCH_SKILLS_SUCCESS",payload:res.data,id:input})
      
    })
  .catch(err => {
      console.log(err)
    dispatch({type:"FETCH_SKILLS_ERROR",payload:err})}
    )
    }
}
export function addExperiences (input,props) {
    
    return (dispatch) => {
        dispatch({type:"ADD_EXPERIENCES_START"})
        console.log(input)
        axios.post("http://127.0.0.1:8000/experience",input
        )
  .then(res => {
      console.log(res.data)
      dispatch({type:"ADD_EXPERIENCES_SUCCESS",payload:res.data})
      
    })
  .catch(err => {
      console.log(err)
    dispatch({type:"ADD_EXPERIENCES_ERROR",payload:err})}
    )
    }
}
export function addProjects (input,props) {
    
    return (dispatch) => {
        dispatch({type:"ADD_PROJECTS_START"})
        console.log(input)
        axios.post("http://127.0.0.1:8000/projects",input
        )
  .then(res => {
      console.log(res.data)
      dispatch({type:"ADD_PROJECTS_SUCCESS",payload:res.data})
      
    })
  .catch(err => {
      console.log(err)
    dispatch({type:"ADD_PROJECTS_ERROR",payload:err})}
    )
    }
}
export function editProfile (input,props) {
    
    return (dispatch) => {
        dispatch({type:"EDIT_PROFILE_START"})
        console.log(input)
        axios.put("http://127.0.0.1:8000/",input
        )
  .then(res => {
      console.log(res.data)
      dispatch({type:"EDIT_PROFILE_SUCCESS",payload:res.data})
      
    })
  .catch(err => {
      console.log(err)
    dispatch({type:"EDIT_PROFILE_ERROR",payload:err})}
    )
    }
}
export function editExperience (input,props) {
    
    return (dispatch) => {
        dispatch({type:"EDIT_EXPERIENCES_START"})
        console.log(input)
        axios.put("http://127.0.0.1:8000/experience",input
        )
  .then(res => {
      console.log(res.data)
      dispatch({type:"EDIT_EXPERIENCES_SUCCESS",payload:res.data})
      
    })
  .catch(err => {
      console.log(err)
    dispatch({type:"EDIT_EXPERIENCES_ERROR",payload:err})}
    )
    }
}
export function deleteExperience (input,props) {
    
    return (dispatch) => {
        dispatch({type:"DELETE_EXPERIENCES_START"})
        console.log(input)
        axios.post("http://127.0.0.1:8000/experience/delete",input
        )
  .then(res => {
      console.log(res.data)
      dispatch({type:"DELETE_EXPERIENCES_SUCCESS",payload:res.data})
      
    })
  .catch(err => {
      console.log(err)
    dispatch({type:"DELETE_EXPERIENCES_ERROR",payload:err})}
    )
    }
}
export function editProjects (input,props) {
    
    return (dispatch) => {
        dispatch({type:"EDIT_PROJECTS_START"})
        console.log(input)
        axios.put("http://127.0.0.1:8000/projects",input
        )
  .then(res => {
      console.log(res.data)
      dispatch({type:"EDIT_PROJECTS_SUCCESS",payload:res.data})
      
    })
  .catch(err => {
      console.log(err)
    dispatch({type:"EDIT_PROJECTS_ERROR",payload:err})}
    )
    }
}
export function getJobs (input,props) {
    
    return (dispatch) => {
        dispatch({type:"FETCH_JOBS_START"})
        console.log(input)
        axios.get("http://127.0.0.1:8000/jobs",input
        )
  .then(res => {
      console.log(res.data)
      dispatch({type:"FETCH_JOBS_SUCCESS",payload:res.data})
      
    })
  .catch(err => {
      console.log(err)
    dispatch({type:"FETCH_JOBS_ERROR",payload:err})}
    )
    }
}
export function addJobs (input,props) {
    
    return (dispatch) => {
        dispatch({type:"ADD_JOBS_START"})
        console.log(input)
        axios.post("http://127.0.0.1:8000/jobs",input
        )
  .then(res => {
      console.log(res.data)
      dispatch({type:"ADD_JOBS_SUCCESS",payload:res.data})
      
    })
  .catch(err => {
      console.log(err)
    dispatch({type:"ADD_JOBS_ERROR",payload:err})}
    )
    }
}
export function getMessages (input,props) {
    
    return (dispatch) => {
        dispatch({type:"FETCH_MESSAGES_START"})
        console.log(input)
        axios.get(`http://127.0.0.1:8000/messages/${localStorage.getItem("id")}`,input
        )
  .then(res => {
      console.log(res.data)
      dispatch({type:"FETCH_MESSAGES_SUCCESS",payload:res.data})
      
    })
  .catch(err => {
      console.log(err)
    dispatch({type:"FETCH_MESSAGES_ERROR",payload:err})}
    )
    }
}
export function sendMessages (input) {
    
    return (dispatch) => {
        dispatch({type:"SEND_MESSAGES_START"})
        console.log(input)
        axios.post(`http://127.0.0.1:8000/messages`,input
        )
  .then(res => {
      console.log(res.data)
      dispatch({type:"SEND_MESSAGES_SUCCESS",payload:res.data})
      
    })
  .catch(err => {
      console.log(err)
    dispatch({type:"SEND_MESSAGES_ERROR",payload:err})}
    )
    }
}
export function fetchPosts (input) {
    
    return (dispatch) => {
        dispatch({type:"FETCH_POSTS_START"})
        console.log(input)
        axios.get(`http://127.0.0.1:8000/posts`)
  .then(res => {
      console.log(res.data)
      dispatch({type:"FETCH_POSTS_SUCCESS",payload:res.data})
      
    })
  .catch(err => {
      console.log(err)
    dispatch({type:"FETCH_POSTS_ERROR",payload:err})}
    )
    }
}
export function post (input) {
    
    return (dispatch) => {
        dispatch({type:"ADD_POSTS_START"})
        console.log(input)
        axios.post(`http://127.0.0.1:8000/posts`,input)
  .then(res => {
      console.log(res.data)
      dispatch({type:"ADD_POSTS_SUCCESS",payload:res.data})
      
    })
  .catch(err => {
      console.log(err)
    dispatch({type:"ADD_POSTS_ERROR",payload:err})}
    )
    }
}
export function fetchRequests (input) {
    
    return (dispatch) => {
        dispatch({type:"FETCH_REQUESTS_START"})
        console.log(input)
        axios.get(`http://127.0.0.1:8000/requests/${localStorage.getItem("id")}`,input)
  .then(res => {
      console.log(res.data)
      dispatch({type:"FETCH_REQUESTS_SUCCESS",payload:res.data})
      
    })
  .catch(err => {
      console.log(err)
    dispatch({type:"FETCH_REQUESTS_ERROR",payload:err})}
    )
    }
}
export function deleteRequests (input) {
    
    return (dispatch) => {
        dispatch({type:"FETCH_REQUESTS_START"})
        console.log(input)
        axios.delete(`http://127.0.0.1:8000/requests/${Number(localStorage.getItem("id"))}/${input}`)
  .then(res => {
      console.log(res.data)
      dispatch({type:"FETCH_REQUESTS_SUCCESS",payload:res.data})
      
    })
  .catch(err => {
      console.log(err)
    dispatch({type:"FETCH_REQUESTS_ERROR",payload:err})}
    )
    }
}
export function sendRequest (input) {
    
    return (dispatch) => {
        dispatch({type:"SEND_REQUEST_START"})
        console.log(input)
        axios.post(`http://127.0.0.1:8000/requests/${localStorage.getItem("id")}`,input)
  .then(res => {
      console.log(res.data)
      dispatch({type:"SEND_REQUEST_SUCCESS",payload:res.data})
      
    })
  .catch(err => {
      console.log(err)
    dispatch({type:"SEND_REQUEST_ERROR",payload:err})}
    )
    }
}
export function fetchFriends (input) {
    
    return (dispatch) => {
        dispatch({type:"FETCH_FRIENDS_START"})
        console.log(input)
        axios.get(`http://127.0.0.1:8000/friends/${localStorage.getItem("id")}`)
  .then(res => {
      console.log(res.data)
      dispatch({type:"FETCH_FRIENDS_SUCCESS",payload:res.data})
      
    })
  .catch(err => {
      console.log(err)
    dispatch({type:"FETCH_FRIENDS_ERROR",payload:err})}
    )
    }
}
export function AddFriend (input) {
    
    return (dispatch) => {
        dispatch({type:"ADD_FRIENDS_START_START"})
        console.log(input)
        axios.post(`http://127.0.0.1:8000/friends/${localStorage.getItem("id")}`,input)
  .then(res => {
      console.log(res.data)
      dispatch({type:"ADD_FRIENDS_START_SUCCESS",payload:res.data})
      
    })
  .catch(err => {
      console.log(err)
    dispatch({type:"ADD_FRIENDS_START_ERROR",payload:err})}
    )
    }
}
// export function addJobs (input,props) {
    
//     return (dispatch) => {
//         dispatch({type:"ADD_JOBS_START"})
//         console.log(input)
//         axios.post("http://127.0.0.1:8000/jobs",input
//         )
//   .then(res => {
//       console.log(res.data)
//       dispatch({type:"ADD_JOBS_SUCCESS",payload:res.data})
      
//     })
//   .catch(err => {
//       console.log(err)
//     dispatch({type:"ADD_JOBS_ERROR",payload:err})}
//     )
//     }
// }