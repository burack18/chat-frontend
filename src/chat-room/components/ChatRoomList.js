import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import CategoryIcon from '@mui/icons-material/Category';

import '../styles/chat-room.css';
import { Divider } from '@mui/material';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function ChatRoomList() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (

        <>
            <div className='categories'>
                <div style={{display:'flex'}}>
                    <CategoryIcon />
                    <Typography sx={{
                        marginLeft:'5px'
                    }}>
                        Categories
                    </Typography>
                </div>
                
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="icon position tabs example"
                    sx={{
                        flexGrow: 2,
                        margin: 'auto',
                        maxWidth: 400,
                    }}

                >
                    <Tab icon={<PhoneIcon />} label="phone" />
                    <Tab icon={<PhoneMissedIcon />} iconPosition="top" label="start" />
                    <Tab icon={<FavoriteIcon />} iconPosition="top" label="end" />
                    <Tab icon={<PersonPinIcon />} iconPosition="top" label="bottom" />
                </Tabs>
            </div>
            <Divider />
            <Paper
                sx={{
                    p: 2,
                    margin: 'auto',
                    maxWidth: 500,
                    flexGrow: 1,
                    marginTop: '5%',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
            >
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <Img alt="complex" src="/static/images/grid/complex.jpg" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    Standard license
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ID: 1030114
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                    Remove
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                                $19.00
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}
