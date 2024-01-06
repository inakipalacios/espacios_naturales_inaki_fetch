import React from "react";

export default function Provincia(){
    return(
        <div>
            <p>Provincia</p>
            <input type="radio" id="araba/alava" name="provincia" value="Araba/Álava" />     
            <label for="araba/alava">Araba/Álava</label><br/>

            <input type="radio" id="bizkaia" name="provincia" value="Bizkaia"/>
            <label for="bizkaia">Bizkaia</label><br/>

            <input type="radio" id="gipuzkoa" name="provincia" value="Gipuzkoa"/>
            <label for="gipuzkoa">Gipuzkoa</label>
        </div>
    );
}