import React, {useState} from 'react'
import Square from './Square'
import {Iphone, Macbooks, Xiaomi} from '../products/Iphone'

const Grid = () => {
    
    const [count, setCount] = useState(0)
    console.log(count)
  
  
    return (
        <>
            <a class="prev" onClick={() => { if (count == '1' || count == '0' || count == '-1') { setCount(count - 1) } else { setCount(0) } }}>&#10094;</a>
            <a class="next" onClick={() => { if (count == '-1' || count == '0' || count == '1') { setCount(count + 1) } else { setCount(0) } }}>&#10095;</a>
            <div className="grid">
                <div className="grid-list" style={count === 0 || count === -3 ? { display: 'flex' } : { display: 'none' }}>
                    {Iphone.map((item, index) => {
                        return (
                            <>
                                <Square
                                    key={index}
                                    img={item.img}
                                    alt={item.title}
                                    title={item.title}
                                />
                            </>
                        )
                    })}
                </div>
                <div className="grid-list" style={count === 1 || count === -2 ? { display: 'flex' } : { display: 'none' }}>
                    {Macbooks.map((item, index) => {
                        return (
                            <>
                                <Square
                                    key={index}
                                    img={item.img}
                                    alt={item.title}
                                    title={item.title}
                                />
                            </>
                        )
                    })}
                </div>
                <div className="grid-list" style={count === 2 || count === -1 ? { display: 'flex' } : { display: 'none' }}>
                    {Xiaomi.map((item, index) => {
                        return (
                            <>
                                <Square
                                    key={index}
                                    img={item.img}
                                    alt={item.title}
                                    title={item.title}
                                />
                            </>
                        )
                    })}
                </div>
            </div>
        </>

  )
}

export default Grid