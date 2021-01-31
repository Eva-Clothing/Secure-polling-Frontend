import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import StorageRoundedIcon from '@material-ui/icons/StorageRounded';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import TimelineRoundedIcon from '@material-ui/icons/TimelineRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import HowToVoteRoundedIcon from '@material-ui/icons/HowToVoteRounded';
import SecurityRoundedIcon from '@material-ui/icons/SecurityRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';
import { Link } from "react-router-dom"
import React from "react"
import { signout } from '../auth/helper';
import {Redirect, useHistory} from "react-router-dom"

function DrawerTag ({classes}){
  const history = useHistory()
    return (
        <div style={{ display: 'flex' }}>
            <Drawer
              style={{ width: "22%" }}
              variant="persistent"
              anchor="left"
              open={true}
              classes={{ paper: classes.drawerPaper }}
            >
              <List>
                <Link to='/instructions' className={classes.link} >
                  <ListItem button>
                    <ListItemIcon>
                      <InfoRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Instructions" />
                  </ListItem>
                </Link>

          <Link to='/vote' className={classes.link} >
            <ListItem button>
              <ListItemIcon>
                <HowToVoteRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Vote" />
            </ListItem>
          </Link>

          <Link to='/data' className={classes.link} >
            <ListItem button>
              <ListItemIcon>
                <StorageRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Data" />
            </ListItem>
          </Link>

          <Link to='/barGraph' className={classes.link} >
            <ListItem button>
              <ListItemIcon>
                <BarChartRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="BarData" />
            </ListItem>
          </Link>

          <Link to='/lineGraph' className={classes.link} >
            <ListItem button>
              <ListItemIcon>
                <TimelineRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="LineData" />
            </ListItem>
          </Link>
          <Link to='/card' className={classes.link} >
            <ListItem button>
              <ListItemIcon>
                <BrandingWatermarkIcon />
              </ListItemIcon>
              <ListItemText primary="Card" />
            </ListItem>
          </Link>
          <Link  className={classes.link} onClick={()=>{
            signout()
            history.push("/")
          }}>
            <ListItem button>
              <ListItemIcon>
                <ExitToAppRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="logout" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  )
}
export default DrawerTag