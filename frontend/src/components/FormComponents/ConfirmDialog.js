import { Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@material-ui/core'
import React from 'react'
import Controls from "./Controls"



export default function ConfirmDialog(props) {

    const {confirmDialog, setConfirmDialog} = props;


    return (
        <Dialog open={confirmDialog.isOpen}>
            <DialogTitle>

            </DialogTitle>
            <DialogContent>
                <Typography variant="h6">
                    {confirmDialog.title}
                </Typography>
                <Typography variant="subtitle2">
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Controls.Button
                    text="No"
                    color="primary"/>
                <Controls.Button
                    text="Si"
                    color="secondary"/>
            </DialogActions>
        </Dialog>
    )
}
