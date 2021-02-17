import React,{Fragment} from 'react';
import {revistarPresupuesto} from "../helpers";

const ControlPresupuesto = ({presupuesto, restante}) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={revistarPresupuesto(presupuesto,restante)}>
                Restante: ${restante}
            </div>
        </Fragment>
      );
}
 
export default ControlPresupuesto;