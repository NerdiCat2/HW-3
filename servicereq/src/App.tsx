// OrderFlowers.tsx
import React, { useState } from "react";
import "./App.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
//import { useFormData } from "./useFormData";
//import {Simulate} from "react-dom/test-utils";
//import submit = Simulate.submit;

const OrderFlowers: React.FC = () => {
    const [patientName, setPatientName] = useState("");
    const [patientRoom, setPatientRoom] = useState("");

    //const { formData, setFormData } = useFormData();

    /*const handleReviewOrder = () => {
        setFormData({
          ...formData,
          orderFlowers: {
            patientName,
            patientRoom,
            customMessage,
          },
        });
        navigate("/order-flowers-result");
      };*/

    async function submit() {
        if (patientName == "" || patientRoom == "") {
            alert("Please Fill out the Patient Name and Room Number");
            return;
        }
    }


    return (
        <div className="container">
            <h2 className="title">Order Medical Equipment</h2>
            <form>
                <div className="inputRow">
                    <div className="formGroup">
                        <label className="label">Employee Name</label>
                        <input
                            className="input"
                            type="text"
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                            placeholder="Add Name Here"
                        />
                    </div>
                    <div className="formGroup">
                        <label className="label">Destination Room</label>
                        <input
                            className="input"
                            type="number"
                            value={patientRoom}
                            onKeyDown={(e) =>
                                (e.keyCode === 69 || e.keyCode === 190) && e.preventDefault()
                            }
                            onChange={(e) => setPatientRoom(e.target.value)}
                            placeholder="Room Number Here"
                        />
                    </div>
                </div>
                <div className="formGroup">
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                        <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                        <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                    </RadioGroup>
                </div>

                <div className="buttonGroup">

                    <button
                        className={`button.reviewButton`}
                        type="button"
                        onClick={submit}
                    >
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
};

export default OrderFlowers;
