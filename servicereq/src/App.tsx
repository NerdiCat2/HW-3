// OrderFlowers.tsx
import React, { useState } from "react";
import "./App.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
//import { useFormData } from "./useFormData";
//import {Simulate} from "react-dom/test-utils";
//import submit = Simulate.submit;
const OrderEquipment: React.FC = () => {
    const [staffName, setStaffName] = useState("");
    const [patientRoom, setPatientRoom] = useState("");

    //const { formData, setFormData } = useFormData();

    /*const handleReviewOrder = () => {
        setFormData({
          ...formData,
          orderFlowers: {
            staffName,
            patientRoom,
            customMessage,
          },
        });
        navigate("/order-flowers-result");
      };*/

    async function submit() {
        const newOrder = [staffName, patientRoom, equipment, priority, assign, other];
        console.log(newOrder);
        if (staffName == "" || patientRoom == "" || equipment == "" || priority == "" || assign == "") {
            alert("Please Fill out the Patient Name and Room Number");
            return;
        }
        setOrders((currentOrders) => [...currentOrders, newOrder]);
        setPriority('');
        setAssign('');
        setPatientRoom('');
        setStaffName('');
        setOther('');
        setEquipment('');
        return;
    }
    const [priority, setPriority] = React.useState('');
    const [equipment, setEquipment] = React.useState('');
    const [other, setOther] = React.useState('');
    const [assign, setAssign] = React.useState('');
    const [orders, setOrders] = React.useState<string[][]>([]);
    const handleChange = (event: SelectChangeEvent) => {
        setEquipment(event.target.value as string);
    };
    const handlePriorityChange = (event: SelectChangeEvent) => {
        setPriority(event.target.value as string);
    }
    const handleOtherChange = (event: SelectChangeEvent) => {
        setOther(event.target.value as string);
    }
    const handleAssign = (event: SelectChangeEvent) => {
        setAssign(event.target.value as string);
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
                            value={staffName}
                            onChange={(e) => setStaffName(e.target.value)}
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
                    <label className="label">Priority</label>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="low"
                        value={priority}
                        onChange={handlePriorityChange}
                        name="radio-buttons-group"
                        row>
                        <FormControlLabel value="low" control={<Radio/>} label="Low" className="label"/>
                        <FormControlLabel value="medium" control={<Radio/>} label="Medium" className="label"/>
                        <FormControlLabel value="high" control={<Radio/>} label="High" className="label"/>
                        <FormControlLabel value="emergency" control={<Radio/>} label="Emergency" className="label"/>
                    </RadioGroup>
                </div>
                <div className="inputRow">
                    <div className="formGroup">
                        <label className="label">Equipment</label>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            className="select"
                            value={equipment}
                            onChange={handleChange}
                        >
                            <MenuItem value={"bed"}>Hospital Bed</MenuItem>
                            <MenuItem value={"iv"}>IV Pump and Stand</MenuItem>
                            <MenuItem value={"defib"}>Defibrillator</MenuItem>
                            <MenuItem value={"ip"}>Infusion Pump</MenuItem>
                            <MenuItem value={"SCD"}>Sequential Compression Device</MenuItem>
                            <MenuItem value={"osm"}>Oxygen Supply and Mask</MenuItem>
                            <MenuItem value={"sm"}>Suction Machine</MenuItem>
                            <MenuItem value={"ECG"}>Electrocardiograph</MenuItem>
                            <MenuItem value={"vent"}>Ventilator</MenuItem>
                        </Select>
                    </div>

                    {equipment === 'bed' && (
                        <div className="formGroup">
                            <label className="label">Bed Size</label>
                            <Select
                                className="select"
                                value={other}
                                onChange={handleOtherChange}>
                                <MenuItem value={"sm"}>Small</MenuItem>
                                <MenuItem value={"med"}>Medium</MenuItem>
                                <MenuItem value={"lg"}>Large</MenuItem>
                                <MenuItem value={"xl"}>Extra Large</MenuItem>
                            </Select>
                        </div>
                    )}
                    {equipment === 'iv' && (
                        <div className="formGroup">
                            <label className="label">Fluid</label>
                            <Select
                                className="select"
                                value={other}
                                onChange={handleOtherChange}>
                                <MenuItem value={"sl"}>Saline</MenuItem>
                                <MenuItem value={"dx"}>Dextrose</MenuItem>
                                <MenuItem value={"rn"}>Ringer's</MenuItem>
                                <MenuItem value={"cl"}>Colloids</MenuItem>
                                <MenuItem value={"el"}>Electrolytes</MenuItem>
                                <MenuItem value={"bf"}>Buffer</MenuItem>
                                <MenuItem value={"ab"}>Antibiotics</MenuItem>
                            </Select>
                        </div>
                    )}
                    {equipment === 'osm' && (
                        <div className="formGroup">
                            <label className="label">Tank Size</label>
                            <Select
                                className="select"
                                value={other}
                                onChange={handleOtherChange}>
                                <MenuItem value={"sm"}>Small</MenuItem>
                                <MenuItem value={"med"}>Medium</MenuItem>
                                <MenuItem value={"lg"}>Large</MenuItem>
                                <MenuItem value={"xl"}>Extra Large</MenuItem>
                            </Select>
                        </div>
                    )}
                    {equipment === 'ip' && (
                        <div className="formGroup">
                            <label className="label">Purpose</label>
                            <Select
                                className="select"
                                value={other}
                                onChange={handleOtherChange}>
                                <MenuItem value={"ma"}>Medication Administration</MenuItem>
                                <MenuItem value={"nut"}>Nutrition</MenuItem>
                                <MenuItem value={"fne"}>Fluids and Electrolytes</MenuItem>
                                <MenuItem value={"bp"}>Blood Products</MenuItem>
                                <MenuItem value={"an"}>Anesthesia</MenuItem>
                                <MenuItem value={"cm"}>Cardiac Medications</MenuItem>
                                <MenuItem value={"ac"}>Anticoagulants</MenuItem>
                                <MenuItem value={"it"}>Insulin Therapy</MenuItem>
                                <MenuItem value={"bt"}>Biologic Therapy</MenuItem>
                            </Select>
                        </div>
                    )}
                </div>
                <div className="inputRow">
                    <div className={"formGroup"}>
                        <label className="label">Status</label>
                    </div>
                    <div className={"formGroup"}>
                        <Select
                            className="select"
                            value={assign}
                            onChange={handleAssign}>
                            <MenuItem value={"un"}>Unassigned</MenuItem>
                            <MenuItem value={"ass"}>Assigned</MenuItem>
                            <MenuItem value={"inp"}>In Progress</MenuItem>
                            <MenuItem value={"cd"}>Closed</MenuItem>
                        </Select>
                    </div>
                </div>
                <div className="buttonGroup">

                    <button
                        className={`button.reviewButton`}
                        type="button"
                        onClick={submit}
                    >
                        Submit
                    </button>
                </div>
                <div className="formGroup">
                    <Table sx={{ minWidth: 300 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Staff Name</TableCell>
                                <TableCell align="center">Room Number</TableCell>
                                <TableCell align="center">Short Med Equip</TableCell>
                                <TableCell align="center">Priority</TableCell>
                                <TableCell align="center">Assignment</TableCell>
                                <TableCell align="center">Short Other</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((row) => (
                                <TableRow
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell align="center">{row[0]}</TableCell>
                                    <TableCell align="center">{row[1]}</TableCell>
                                    <TableCell align="center">{row[2]}</TableCell>
                                    <TableCell align="center">{row[3]}</TableCell>
                                    <TableCell align="center">{row[4]}</TableCell>
                                    <TableCell align="center">{row[5]}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </form>
        </div>
    );
};

export default OrderEquipment;
