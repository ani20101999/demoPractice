import React from "react"

// export default function Child({title,children}){
// return <>
// <div>
//     <h1>{title}</h1>
//     </div>
//     <div className="children">
//     {children} 
// </div>
// </>
// }

export default function CardWithName({title,children}){
    return <div>
       {title}
       <div>
        {children}
       </div>
    </div>

}