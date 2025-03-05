import React from "react";

const PaginationButtons: React.FC = () => {
    return (
        <div style={{width:"100%",display:"flex",justifyContent:"end",alignItems:"center",columnGap:"10px",marginBottom:"20px"}}>
           <img src="Chevron.png" alt="" width={16}/>
           <img src="Chevron.png" alt="" width={16} style={{rotate:"180deg"}}/>
        </div>
    )
}

export default PaginationButtons;