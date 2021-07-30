import React, { useState } from 'react';
import DisplayLists from './DisplayLists'

const App = () => {
    const [getItem, setItem] = useState("");
    const [getItems, setItems] = useState([]);

    const inputItemList = (event) => {
        setItem(event.target.value);
    }
    const addItemList = () => {
        setItems((itemList) => {
            return [...itemList, getItem];
        })
        setItem("");
    }


    const deleteItem = (id) => {
        //alert(id)
        setItems((itemList) => {
            return itemList.filter((data, index) => {
                return index !== id;
            })
        })
    }

    return (<>
        <div className="w3-container">
            <div className="w3-red w3-center w3-panel w3-round">
                <h2>My To Do List</h2>
                <input type="text" name="" id="" placeholder="Add To Do List ..."
                    className="w3-input w3-section" onChange={inputItemList}
                    value={getItem} />
                <button className="w3-button  w3-section w3-circle w3-teal w3-xlarge w3-hover-green"
                    onClick={addItemList}>+</button>
            </div>
            <ul className="w3-ul w3-border w3-card w3-hoverable w3-round">
                {
                    getItems.map((data, index) => {
                        return <DisplayLists key={index} id={index} text={data}
                            onSelectForDelete={deleteItem} />
                    })
                }
            </ul>
        </div>
    </>)
}

export default App;