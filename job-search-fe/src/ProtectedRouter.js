import React from "react"
import { Route,Redirect } from 'react-router-dom'
const ProtectedRouter = props => {
    const {
        component:Component,...rest} = props
    
    return (
<Route {...rest} render={(renderProps) => {
if (2 === 2 ){
    return <Component {...renderProps}/>
}else{
    return  <Redirect to="/"/>
}
}}/>
    )
}
export default ProtectedRouter