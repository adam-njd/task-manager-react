import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import UnDoneTasks from './DoneTasks.jsx';
import TaskComponent from './TaskComponent.jsx';
import { AllTasksProvider } from '../context/Alltasks.jsx';
import DoneTaskComponent from './DoneTasks.jsx';
import All from './All.jsx';
import AddTask from './AddTask.jsx';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (

    <div
        style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>

  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({children}) {
  const [value, setValue] = React.useState(0);
  const [tapID,setTapId] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log('the value is ' ,value)
    
  };
    
  return (
    // <AllTasksProvider>
    <>
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' , backgroundColor:'#fff'}} >
      <Box sx={{ borderBottom: '1px #000 solid', borderColor: 'divider', boxShadow:'inner' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Undone" onClick={()=>setTapId(0)} {...a11yProps(0)}/>
          <Tab label="Done" onClick={()=>setTapId(1)} {...a11yProps(1)} />
          <Tab label="All" onClick={()=>setTapId(2)} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} style={{overflowY:'scroll', maxHeight:'80vh',border:'solid 1px #00000042' , borderRadius:'8px' , marginTop:'20px'}}>
        
                <TaskComponent/>

      </CustomTabPanel>

      <CustomTabPanel value={value} index={1} style={{overflowY:'scroll', maxHeight:'80vh', marginTop:'20px'}}>

            <DoneTaskComponent/>

      </CustomTabPanel>
      <CustomTabPanel value={value} index={2} style={{overflowY:'scroll', maxHeight:'80vh', marginTop:'20px'}}>
       <All/>
      </CustomTabPanel>
      
    </Box>
    <AddTask tapID={tapID} />
    </>
    // </AllTasksProvider>
  );
}