import { Avatar, Badge, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

export default function User({ name }) {
    return (
        <ListItemButton>
            <ListItemAvatar>
                <Badge color={name==='sefa'?'default':'success'} variant="dot" overlap="circular" anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}  >
                    <Avatar
                        alt={`Avatar n° + 1}`}
                        src={`/static/images/avatar/ 1}.jpg`}
                    />
                </Badge>
            </ListItemAvatar>
            <ListItemText id={2} primary={name} />
        </ListItemButton>
    )
}
