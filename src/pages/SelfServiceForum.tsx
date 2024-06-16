import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './SelfServiceForum.module.css'



function Transcript() {
    return (<div className={styles.transcript}>



        <div className={styles.column1}>
            <h2 className={styles.dt}>Download or Request Transcript</h2>
            <h3 className={styles.pt}>To request a transcript from Beteseb Academy, kindly proceed with the following information. Please note that there is a charge of 250 ETB for each transcript request. Payments are to be made physically at the office of Beteseb Academy.</h3>
            <button className={styles.buttonT}>
                <div className={styles.textWrapper}>Send Request</div>
            </button>
        </div>
        <div className={styles.column2}>

            <div className={styles.imageT} />;
        </div>




    </div>)
}
function ProofOfEntrollment() {
    return (<div className={styles.ProofOfEntrollment}>



        <div className={styles.column1}>
            <h2 className={styles.dt}>Download or Request Transcript</h2>
            <h3 className={styles.pt}>To request an ID card from Beteseb Academy, kindly proceed with the following information. There is a charge of 50 ETB for each ID card request. Payments are to be made physically at the office of Beteseb Academy.</h3>
            <button className={styles.buttonT}>
                <div className={styles.textWrapper}>Send Request</div>
            </button>
        </div>
        <div className={styles.column2}>

            <div className={styles.imageT} />;
        </div>




    </div>)
}
function ID() {
    return (<div className={styles.id}>



        <div className={styles.column1}>
            <h2 className={styles.dt}>Download or Request Transcript</h2>
            <h3 className={styles.pt}>To request proof of enrollment from Beteseb Academy, kindly proceed with the following information. There is a charge of 50 ETB for each proof of enrollment request. Payments are to be made physically at the office of Beteseb Academy.</h3>
            <button className={styles.buttonT}>
                <div className={styles.textWrapper}>Send Request</div>
            </button>
        </div>
        <div className={styles.column2}>

            <div className={styles.imageT} />;
        </div>




    </div>)
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3, width: '100%' }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function SelfServiceForum() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={styles.root}>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Transcript" {...a11yProps(0)} />
                        <Tab label="PoE" {...a11yProps(1)} />
                        <Tab label="ID" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Transcript />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <ProofOfEntrollment />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <ID />
                </CustomTabPanel>
            </Box>
        </div>

    );
}
