import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '25%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Friend(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
//   bio: null
//   birthday: null
//   college: null
//   company: null
//   current_location: null
//   email: null
//   first_name: null
//   gender: null
//   high_school: null
//   id: 1
//   last_name: null
//   online: null
//   picture: null
//   portfolio: null
//   role: null
//   username: null
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img src={props.friend.picture}/>
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={props.friend.first_name +  ` ` + props.friend.last_name}
        subheader={props.friend.role}
      />
      {/* <CardMedia
        className={classes.media}
        image={props.friend.picture}
        title="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {props.friend.bio}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
      </CardActions>
    </Card>
  );
}


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 540,
//   },
// });

// export default function Friend(props) {
//   const classes = useStyles();
//   console.log(props.friend)
//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image={props.friend.picture}
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }









// import React, { useState,useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import Button from '@material-ui/core/Button';
// import Inbox from './inbox';
// import Modal from '@material-ui/core/Modal';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Box from '@material-ui/core/Box';
// import PropTypes from 'prop-types';
// import TextField from '@material-ui/core/TextField';
// import {getJobs,addJobs,getMessages,getUsers,login,fetchRequests,AddFriend,deleteRequests} from "./action"
// import { connect } from "react-redux"
// import "./Friends.css"


// const search = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//           display: 'flex',
//       },
//     },
//   }));
  
  
  
//   function TabPanel(props) {
//     const { children, value, index, ...other } = props;
  
//     return (
//       <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`scrollable-auto-tabpanel-${index}`}
//         aria-labelledby={`scrollable-auto-tab-${index}`}
//         {...other}
//       >
//         {value === index && (
//           <Box p={3}>
//             <Typography>{children}</Typography>
//           </Box>
//         )}
//       </div>
//     );
//   }
  
//   TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
//   };
    
//     function a11yProps(index) {
//       return {
//         id: `scrollable-auto-tab-${index}`,
//         'aria-controls': `scrollable-auto-tabpanel-${index}`,
//       };
//     }
//     const tabStyles = makeStyles((theme) => ({
//       root: {
//         flexGrow: 1,
//         width: '83%',
//         marginLeft:'18%',
//         backgroundColor: theme.palette.background.paper,
//       },
//     }));
//     function LinkTab(props) {
//       return (
//         <Tab
//           component="a"
//           onClick={(event) => {
//             event.preventDefault();
//           }}
//           {...props}
//         />
//       );
//     }
//   const drawerWidth = 240;
  
//   const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//     },
//     appBar: {
//       width: `calc(100% - ${drawerWidth}px)`,
//       marginLeft: drawerWidth,
//     },
//     drawer: {
//       width: drawerWidth,
//       flexShrink: 0,
//     },
//     drawerPaper: {
//       width: drawerWidth,
//     },
//     // necessary for content to be below app bar
//     toolbar: theme.mixins.toolbar,
//     content: {
//       flexGrow: 1,
//       backgroundColor: theme.palette.background.default,
//       padding: theme.spacing(3),
//     },
//   }));
//   const buttonStyles = makeStyles((theme) => ({
//       root: {
//         '& > *': {
//           margin: theme.spacing(1),
//           width:'20%',
//           marginLeft: '60%',
//           bottom: '0',
//         },
//       },
//     }));
  
  
//   function Friends(props) {
    
//     useEffect(() => {
//       props.getJobs()
//       props.getUsers()
//       props.login()
//       props.getMessages()
//       props.fetchRequests()
      
//       console.log(props.request)
  
//     }, [])
//     const acceptFriend = e => {
//         const obJ = { 
//             users_id: props.request.users_id, 
//             friend_id: props.request.request_id
//         }
//         props.AddFriend(obJ)
//         props.deleteRequests(props.request.request_id)
//         }
//         const deleteRequest = e => {
//             props.deleteRequests(Number(props.request.request_id))
//             }

// return (
// <div class={props.request ? "request-square" : "square-2"}>
//   <div class="circle-2"></div>
//   <div class="circle-3"></div>
//   <div class="friends-card">
//   <h3>dfhbv</h3>
//   <p>dfhfdfh</p>
//   <p>dfhfdfh</p>
//   {
//       props.request ? 
//       <>
//       <button onClick={acceptFriend}>Add</button> 
//     <button onClick={deleteRequest}>Decline</button>  
//     </>
//     : 
//     <div>
//     </div>
//   }
 
// </div>
//   </div>
// )
// }
// function mapStateToProps (state){
//     return {
        
//       user:state.user,
//       jobs:state.jobs,
//       messages:state.messages,
//       users:state.users,
//       requests:state.requests,
//       }
//     }
//     const mapDispatchToProps = {
//       getJobs,
//       addJobs,
//       getMessages,
//       getUsers,
//       login,
//       fetchRequests,
//       AddFriend,
//       deleteRequests,
     
//     }
    
//     export default connect(mapStateToProps,mapDispatchToProps)(Friend)