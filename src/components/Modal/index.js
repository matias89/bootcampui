import React from 'react';
import { NavLink } from 'react-router-dom';
import './Modal.css';

export default function Modal(props){
    return <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">{props.title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div className="modal-body">
            <ul className="listaDeItems">
                {props.orders}
            </ul>
        </div>
        <div className="modal-footer">
            <p className='total'>Total a pagar: <b>${props.total}</b></p>
            <a href='/checkout' className="btn btn-primary" onClick="$('#myModal').modal('hide')">Pagar</a>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Seguir Comprando</button>            
        </div>
        </div>
    </div>
</div>
}