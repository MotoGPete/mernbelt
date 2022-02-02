import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom"
import axios from 'axios'
import { Link } from "react-router-dom"

const PetsEdit = () => {
    const [errors, setErrors] = useState([])
    const { id } = useParams()
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                setName(res.data.name)
                setType(res.data.type)
                setDescription(res.data.description)
                setSkill1(res.data.skill1)
                setSkill2(res.data.skill2)
                setSkill3(res.data.skill3)

            })
            .catch(err => console.log(err))

    }, [id])


    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/pets/${id}`, { name, description, type, skill1, skill2, skill3})
            .then(res => { history.push('/') })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }

                setErrors(errorArr)
            })
    }

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => history.push("/"))
            .catch(err => console.log(err))

    }

    return (
        <div>
            <h1>Edit Pet Details</h1>
            <form onSubmit={submitHandler}>
                <p>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
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
                <button onClick={deleteHandler}>Delete</button>
                <Link to="/">Go back</Link>
            </form>
        </div>
    );
};

export default PetsEdit;
