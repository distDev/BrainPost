import React from 'react'
import './loader.scss'

interface Props {
    
}

export const Loader = (props: Props) => {
    return (
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
}
