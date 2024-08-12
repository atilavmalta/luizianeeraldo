import React, {Fragment} from 'react';
import { Button, Dialog, Grid, } from '@mui/material'
import MuiDialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Image from "next/image";

const GiftModal = ({ maxWidth, button, buttonClass, item}) => {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    const copy = async () => {
        await navigator.clipboard.writeText(item.code);
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
                Presentear os noivos
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
                        <div className="container-fluid">
                            <br/>
                            <h3>Use o QR Code do Pix para pagar</h3>
                            <span>Abra o app em que vai fazer a transferência, <br/> escaneie a imagem ou cole o código do QR Code</span>
                            <br/> <br/>
                            <Image src={item.qrcode}/>
                            <br/> <br/>
                            Você também pode copiar o código: <button onClick={copy}>Copiar</button>
                        </div>
                    </Grid>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default GiftModal