import React from 'react'
import { useState } from 'react'
import axios from "axios"
import {useHistory} from "react-router-dom" 


const PetsForm = () => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/pets`,{name, description, type, skill1, skill2, skill3})
            .then(res =>history.push("/"))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)}
                setErrors(errorArr);})}

        return (
            <form onSubmit={submitHandler}>
                <h1>New Pet Form</h1>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Name:</label>
                    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                </p>
                <p>
                    <label>Type:</label>
                    <input type="text" name="type" value={type} onChange={e => setType(e.target.value)} />
                </p>
                <p>
                    <label>Description:</label>
                    <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)} />
                </p>
                <p>
                    <label>Skill 1:</label>
                    <input type="text" name="skill1" value={skill1} onChange={e => setSkill1(e.target.value)} />
                </p>
                <p>
                    <label>Skill 2:</label>
                    <input type="text" name="skill2" value={skill2} onChange={e => setSkill2(e.target.value)} />
                </p>
                <p>
                    <label>Skill 3:</label>
                    <input type="text" name="skill3" value={skill3} onChange={e => setSkill3(e.target.value)} />
                </p>
                <button>submit</button>
            </form>
        )
    };

    export default PetsForm;