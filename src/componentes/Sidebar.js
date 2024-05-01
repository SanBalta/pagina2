function Sidebar(props){
    return(
        <div className="barra-lateral">
            <div className="columna-1">
            {props.registro_1}
            </div>
            <div className="columna-1">
            {props.registro_2}
            </div>
            <div className="columna-1">
            {props.registro_3}
            </div>
        </div>
    )
}

export default Sidebar;