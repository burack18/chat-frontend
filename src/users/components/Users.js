import { Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import User from './User'

export default function Users() {
    const users = [{ name: 'omer' }, { name: 'sefa' }]
    return (
        <>
            <Typography align='center'>
                Users
            </Typography>
            <Box position='fixed' sx={{
                borderLeft: '1px solid #1A2027'
            }}>
                <List>
                    {users.map((user,index) =>
                        <ListItem key={index}>        
                            <User name={user.name} />
                        </ListItem>)}
                </List>
            </Box>
        </>
    )
}
