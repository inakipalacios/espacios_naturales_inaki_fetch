import React from "react";

import Titulo from './Titulo';
import Nombre from './Nombre';

export default function Header(){
    return(
        <div>
            <Titulo/>
            <Nombre nombre='Iñaki' apellido='Palacios'/>
        </div>
    );
}