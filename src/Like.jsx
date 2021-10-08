
import { FaThumbsUp } from 'react-icons/fa'
import React from 'react'
export function Like() {
    const [isLiked, setIsLiked] = React.useState(false)
    const [count, setCount] = React.useState(0)
    return (
        <div className="App">
            <div>
                <span className="like" onClick={() => { setCount(count => {
                        if(count === 0){
                            setIsLiked(true) 
                            return 1
                        }else{
                            setIsLiked(false) 
                            return 0
                        }
                }) }}>
                    
                    {isLiked ? <FaThumbsUp size={18} color="black" /> : <FaThumbsUp size={18} />}
                </span>
                <span>{count}</span>
            </div>
        </div>
    );
}