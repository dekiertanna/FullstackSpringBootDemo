import React, {useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AddCar = (props) => {
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
        brand: '', model: '', color: '', year: '', fuel:'', price: ''
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setCar({...car, [event.target.name]: event.target.value});
    }
    const handleSave =() =>
    {
        props.addCar(car);
        handleClose();
    }
    return (
        <div>
            <button style={{margin: 10}} onClick={handleClickOpen}>New Car</button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New car</DialogTitle>
                <DialogContent>
                    <input type="text" placeholder="Brand" name="brand"
                    value={car.brand} onChange={handleChange}></input><br></br>

                    <input type="text" placeholder="Model" name="model"
                    value={car.model} onChange={handleChange}></input><br></br>

                    <input type="text" placeholder="Color" name="color"
                    value={car.color} onChange={handleChange}></input><br></br>

                    <input type="text" placeholder="Year" name="year"
                    value={car.year} onChange={handleChange}></input><br></br>

                    <input type="text" placeholder="Price" name="price"
                    value={car.price} onChange={handleChange}></input><br></br>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose}>Cancel</button>
                    <button onClick={handleSave}>Save</button>
                </DialogActions>
                </Dialog>
        </div>
    );
};

export default AddCar;