import React, { useRef, useEffect } from 'react';
import { Dialog, DialogContent, Button, DialogTitle, DialogContentText, IconButton, CircularProgress, } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Popup = ({ open, onClose }) => {
    const [progress, setProgress] = React.useState(0);
    const timerRef = useRef(null);


    useEffect(() => {
        if (open) {
            // Start the timer and update the progress every second
            timerRef.current = setInterval(() => {
                setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 10));
            }, 1000);
        }
        return () => {
            clearInterval(timerRef.current);
            setProgress(0)
        };
    }, [open]);
    useEffect(() => {
        // Automatically close the popup after 10 seconds
        if (progress >= 100) {
            onClose();
        }
    }, [progress, onClose]);
    const handlePopupClick = () => {
        // Pause the progress when the popup is clicked
        clearInterval(timerRef.current);

    };
    const handleClose = () => {
        // Clear the timer before closing the popup
        clearInterval(timerRef.current);
        onClose();
    };
    return (
        <Dialog open={open} onClose={handleClose} onClick={handlePopupClick}>
            <DialogTitle id="responsive-dialog-title" >
                demo popup autoclose
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        // position: 'absolute',
                        left: 100,
                        // top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <IconButton
                    sx={{ left: 100, top: 8 }}
                >
                    <CircularProgress variant="determinate" value={progress} />
                </IconButton>
            </DialogTitle>

            <DialogContent>
                <DialogContentText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. mollit anim id est laborum
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );

};

export default Popup;
