import React, {useState} from 'react'
import Square from './Square'
import {Iphone, Macbooks, Xiaomi} from '../products/Iphone'

const Grid = () => {
    
    const [count, setCount] = useState(0)
    console.log(count)

    function result() {
        switch(count){
            case 0: return '1'
            break
            case -3: return '1'
            break
            case 1: return '2'
            break
            case -2: return '2'
            break
            case 2: return '3'
            break
            case -1: return '3'
            break
        }
        
    }
  
  
    return (
        <>
            <a class="prev" onClick={() => { if (count == '1' || count == '0' || count == '-1') { setCount(count - 1) } else { setCount(0) } }}>&#10094;</a>
            <a class="next" onClick={() => { if (count == '-1' || count == '0' || count == '1') { setCount(count + 1) } else { setCount(0) } }}>&#10095;</a>
            <div className="grid">
                <h2 className='grid-title'>Productos {result()}</h2>
                <div className="grid-list" style={count === 0 || count === -3 ? { display: 'flex' } : { display: 'none' }}>
                    {Iphone.map((item, index) => {
                        return (
                            <>
                                <Square
                                    key={index}
                                    img={item.img}
                                    alt={item.title}
                                    title={item.title}
                                    id={item.id}
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