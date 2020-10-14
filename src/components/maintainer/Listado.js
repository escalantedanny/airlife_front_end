import React, {useContext, useState} from 'react';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import {
    Input
  } from "reactstrap";

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    paper: {
      position: 'absolute',
      width: 600,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    button: {
        margin: theme.spacing(1),
    },
}));

const Listado = ({cli}) => {

    const [clie, guardarUsuario] = useState({
        cliente : '',
        direccion: '',
        marca: '',
        ciudad: '',
        poblacion: '',
        website: '',
        latitud: '',
        longitud: ''
    });

    const { cliente, direccion, marca, ciudad, poblacion, website, latitud, longitud } = cli;

    // para crear clases a material
    const classes = useStyles();

    //configuracion del modal de material ui
    const [ modalStyle ] = useState(getModalStyle);
    const [ open, setOpen ] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const verificar = e => {
        guardarUsuario({
            ...clie,
            [e.target.name] : e.target.value
        })
    }

    const validarUsuario = e => {
        console.log(e);
    }

    return ( 
        <>
            <tr>
                <td>{cliente}</td>
                <td>{marca}</td>
                <td>{direccion}</td>
                <td>{ciudad}</td>
                <td>{poblacion}</td>
                <td>{latitud}</td>
                <td>{longitud}</td>
                <td>
                    <Button 
                    className="btn btn-block btn-primary"
                    type="button"
                    onClick={ () => {
                        handleOpen();
                    }}
                    >View</Button>
                </td>
                <Modal
                    open={open}
                    onClose={ () => {
                        handleClose();
                    }}
                >
                    <div style={modalStyle} className={classes.paper}>
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">{cliente}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{direccion}</h6>
                            </div>
                            <div className="card-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col col-md-12 input-group input-group-sm mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroup-sizing-sm">Direcci&oacute;n</span>
                                            </div>
                                            <Input 
                                                type="text"
                                                name="direccion" 
                                                id="direccion" 
                                                className="form-control" 
                                                aria-label="Small" 
                                                aria-describedby="inputGroup-sizing-sm"
                                                value={direccion}
                                                onChange={verificar}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className=" col col-md-6 input-group input-group-sm mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroup-sizing-sm">Ciudad</span>
                                            </div>
                                            <Input 
                                                type="text"
                                                name="ciudad" 
                                                id="ciudad" 
                                                className="form-control" 
                                                aria-label="Small" 
                                                aria-describedby="inputGroup-sizing-sm"
                                                value={ciudad}
                                                onChange={verificar}
                                            />
                                        </div>
                                        <div className="col col-md-6 input-group input-group-sm mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroup-sizing-sm">Poblaci&oacute;n</span>
                                            </div>
                                            <Input 
                                                type="text"
                                                name="poblacion" 
                                                id="poblacion" 
                                                className="form-control" 
                                                aria-label="Small" 
                                                aria-describedby="inputGroup-sizing-sm"
                                                value={poblacion}
                                                onChange={verificar}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className=" col col-md-6 input-group input-group-sm mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroup-sizing-sm">Marca</span>
                                            </div>
                                            <Input 
                                                type="text"
                                                name="marca" 
                                                id="marca" 
                                                className="form-control" 
                                                aria-label="Small" 
                                                aria-describedby="inputGroup-sizing-sm"
                                                value={marca}
                                                onChange={verificar}
                                            />
                                        </div>
                                        <div className="col col-md-6 input-group input-group-sm mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroup-sizing-sm">Website</span>
                                            </div>
                                            <Input 
                                                type="text"
                                                name="website" 
                                                id="website" 
                                                className="form-control" 
                                                aria-label="Small" 
                                                aria-describedby="inputGroup-sizing-sm"
                                                value={website}
                                                onChange={verificar}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className=" col col-md-6 input-group input-group-sm mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroup-sizing-sm">Latitud</span>
                                            </div>
                                            <Input 
                                                type="text"
                                                name="latitud" 
                                                id="latitud" 
                                                className="form-control" 
                                                aria-label="Small" 
                                                aria-describedby="inputGroup-sizing-sm"
                                                value={latitud}
                                                onChange={verificar}
                                            />
                                        </div>
                                        <div className="col col-md-6 input-group input-group-sm mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroup-sizing-sm">Longitud</span>
                                            </div>
                                            <Input 
                                                type="text"
                                                name="longitud" 
                                                id="longitud" 
                                                className="form-control" 
                                                aria-label="Small" 
                                                aria-describedby="inputGroup-sizing-sm"
                                                value={longitud}
                                                onChange={verificar}
                                            />
                                        </div>
                                    </div>
                                    <div className=" row card-footer">
                                        <Button 
                                            className="btn btn-block btn-secondary"
                                            type="button" 
                                            onClick={validarUsuario}
                                            startIcon={<SaveIcon />}
                                        >
                                            Guardar
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </tr>
        </>
     );
}
 
export default Listado;