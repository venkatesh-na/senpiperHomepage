import React from "react"
const Table = ({data})=>{

    return (
        <section className = "table-data">
            <h1>All Feedback</h1>
            <table>
                <thead>
                <tr>
                    <th>Form Name</th>
                    <th>Text field</th>
                    <th>phone field</th>
                    <th>Eamail Field</th>
                    <th>host</th>
                    <th>beverage</th>
                    <th>clean</th>
                    <th>dining</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {data && data.map((user)=>{
                    const {text,email,phone,host,beverage,clean,dining,name} = user
                    return (<tr key = {email}>
                        <td>{"Aromatic bar"}</td>
                        <td>{text}</td>
                        <td>{phone}</td>
                        <td>{email}</td>
                        <td>{host}</td>
                        <td>{beverage}</td>
                        <td>{clean}</td>
                        <td>{dining}</td>
                        <td>{name}</td>
                    </tr>)
                })}
                </tbody>
            </table>
        </section>
    )
}
export default Table;