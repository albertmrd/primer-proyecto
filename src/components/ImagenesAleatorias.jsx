import React, {useState} from 'react';
import "./ImagenesAleatorias.css";


const ImagenesAleatorias = (props) => {
    //parte funcional
    const [enable, setEnable] = useState(true);
    let classNameImg = enable ? "" : "disabled"
    let classNamePicture = "";
    const cambiar = () => {setEnable(!enable)};
    const src = props.img ? `https://randomuser.me/api/portraits/women/${props.img}.jpg` : `https://randomuser.me/api/portraits/lego/1.jpg`;


    if(props.size === "small"){
        classNamePicture = "is-small";
    }else if(props.size === "large"){
        classNamePicture = "is-large";
    }
    //parte de pintado
    return (
        <picture className={classNamePicture}>
            <img className="img"
                src={src}
                alt="women"
                className = {classNameImg + " img"}
                onClick = {cambiar}
            />
            <h3>{props.nombre}</h3>
        </picture>
    )
};

export default ImagenesAleatorias;