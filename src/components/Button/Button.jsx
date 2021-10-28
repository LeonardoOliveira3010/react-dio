const Button = ( {children, className, onClick} ) =>{
    return(
        <>
            <button 
                type="button" 
                className={className} 
                style={{margin:"10px", width:'100px'}} onClick={onClick}> {children} 
            </button>
        </>
    )
}

export default Button