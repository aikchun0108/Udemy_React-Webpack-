import React from 'react'
import Option from './Option'
const Options = (props)=>(
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button
                className="button button--link"
                onClick={props.handleDeleteOptions}>
            RemoveAll
            </button>
        </div>
        {props.options.length===0 && <p className="widget-message">Currently no option available</p>}
        {
            props.options.map((option,index)=>(
                <Option 
                    key={option} 
                    optiontext={option}
                    count = {index+1}
                    handleDeleteSingular={props.handleDeleteSingular}
                />
            ))
        }
    </div>
)


export default Options