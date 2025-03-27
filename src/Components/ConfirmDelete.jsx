import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

const ConfirmDelete = ({ open, onClose, onConfirm }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Are you sure you want to delete this blog?</DialogTitle>
            <DialogActions>
                <Button onClick={onClose} color="secondary">Cancel</Button>
                <Button onClick={onConfirm} color="error" variant="contained">
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDelete;
