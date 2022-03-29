import React from "react";

const AddDeleteListItems=()=>{
    const [list, setList] = React.useState([]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        let formobj = {};
       for (var pair of formData) {
           formobj[pair[0]] = pair[1]
      }
        setList((prev)=>[...prev, {
            ...formobj
        }])
    }

    const handleDelete=(e, index)=>{
        e.preventDefault();
        const newList = list.filter((el, i)=> i !== index)
        setList([...newList])
    }

    return <div>
        <form onSubmit={handleSubmit} id="form">
            <center>
                <label for="name">Friend's name </label>
                <input type="text" id="name" name="name" required/>
                <br/>
                <label for="place">Friend's place </label>
                <input type="text" id="place" name="places" reaquired/>
                <br/>
                <button type="submit">Add friend</button>

                <h3>My friends list</h3>
                <ul>
                {
                    list.map((el,index)=>{
                        return <React.Fragment key={index+el.name}>
                                <li style={{display: 'inline-block'}}>{el.name}</li>
                                <button onClick={(e)=>handleDelete(e,index)}> X </button>
                                <br/>
                        </React.Fragment>
                    })
                }
                </ul>
            </center>
        </form>
    </div>
}

export default AddDeleteListItems