import React from 'react'

function User(props){
    return(
        <div
        onClick={() => props.handleChangeIndex(props.index)}
        className='user'
        >
            <p>{props.product.name}</p>
        </div>
    )
}

export default User