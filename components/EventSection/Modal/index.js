

import React, {Fragment} from 'react';


import { Button, Dialog, Grid, } from '@mui/material'
import MuiDialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';

const LocationMap = ({ maxWidth, button, buttonClass }) => {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }


    const DialogTitle = ((props) => {
        const { onClose } = props;
        return (
          <MuiDialogTitle>
            {onClose ? (
              <IconButton className='event-close-btn' aria-label="close" onClick={onClose}>
                <i className="ti-close"></i>
              </IconButton>
            ) : null}
          </MuiDialogTitle>
        );
      });


    return (
        <Fragment>
            <Button
                className={`btn ${buttonClass}`}
                onClick={handleClickOpen}>
                {button}
                Ver Localização
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}> </DialogTitle>
                <Grid className="modalBody modal-body">
                    <Grid className="modalBody modal-body">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15806.633886991971!2d-35.013459!3d-7.9306931!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1058b2aecfdd%3A0x40b18be6a704b199!2sHotel%20Campestre%20de%20Aldeia!5e0!3m2!1spt-BR!2sbr!4v1723461734921!5m2!1spt-BR!2sbr"></iframe>
                    </Grid>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default LocationMap


