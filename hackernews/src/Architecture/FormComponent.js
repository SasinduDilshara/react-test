
import React from 'react'
function FormComponent(props) {

    console.log(props.data)

    return (
        <main>
            <form>
                <input name='fname' value={props.data.fname} type="text" placeholder="FirstName" onChange={props.change} />
                <h1>{props.data.fname}</h1>
                <input name="lname" value={props.data.lname} type="text" placeholder="LastName" onChange={props.change} />
                <h1>{props.data.lname}</h1>

                <textarea
                    name='textarea'
                    value={props.data.favcolor}
                    onChange={props.change}
                />
                <label>
                    <input
                        type="checkbox"
                        name="friend1"
                        checked={props.data.isFriend}
                        onChange={props.change}
                    /> IsFriend
                    <input
                        type="checkbox"
                        name="friend2"
                        checked={props.data.isFriend}
                        onChange={props.change}
                    /> IsFriend
                    <input
                        type="checkbox"
                        name="friend3"
                        checked={props.data.isFriend}
                        onChange={props.change}
                    /> IsFriend
            </label>


                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="FeMale"
                        checked={props.data.gender == "FeMale"}
                        onChange={props.change}
                    /> Male
            </label>


                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={props.data.gender == "Male"}
                        onChange={props.change}
                    /> Female
            </label>

                <div>
                    <select
                        value={props.data.favcolor}
                        name="favcolor"
                        onChange={props.change}

                    >


                        <option value="blue">
                            blue
                    </option>
                        <option value="red">
                            red
                    </option>
                        <option value="black">
                            black
                    </option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
        </main >
    );
}

export default FormComponent;