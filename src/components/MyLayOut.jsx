import Container from "@mui/material/Container";
import CustomTabPanel from './myTaps.jsx';
import BasicTabs from './myTaps.jsx';

import {  useAllTasks} from "../context/Alltasks.jsx";

import FormDialog from "./EditPopUp.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";

import Alert from "@mui/material/Alert";
import OutlinedAlerts from "./snakbar.jsx";





export default function MyLayOut() {
    const {sankData}=useAllTasks();
    const theme=createTheme({
        palette:{
            primary:{
                main:"#000"
            }
        }
    })
    const {wantedit} = useAllTasks()
    console.log('isClickedIs',wantedit)
    // let[zclicked]=useState(clicked);
    
    return(
        <>
        
        <ThemeProvider theme={theme}>
        <Container maxWidth="xl" style={ {marginTop: '20px',  border: '1px solid #ccc', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
        <div className="App">
        <h1>Manage Your Tasks</h1>
     <OutlinedAlerts show={sankData.show} msg={sankData.message}></OutlinedAlerts>
         <BasicTabs>
           
            </BasicTabs>
        
    
            
        </div>
        
        </Container>
      </ThemeProvider>
        </>
    )

}
