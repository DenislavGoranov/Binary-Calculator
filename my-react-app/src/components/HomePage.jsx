import { useNavigate } from 'react-router-dom'

import Header from "./Header";
import useForm from "../hooks/useForm"

export default function HomePage() {
    localStorage.clear();
    const navigate = useNavigate();

    const { values, onChange, submitHandler } = useForm(
        { value1: 0, value2: 0, operation: "plus" },
        async ({ value1, value2, operation }) => {
            localStorage.setItem("value1", value1);
            localStorage.setItem("value2", value2);
            localStorage.setItem("operation", operation);
            navigate("/result")
        }
    )
    return (
        <div className="page">
            <Header />

            <h1>Binary Calculator</h1>

            <form method="get" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="value1">Value 1</label>
                    <input type="text" name="value1" autoComplete="value1" onChange={onChange} value={values.value1} />
                </div>

                <div className="operations">
                    <label htmlFor="plus">Plus</label>
                    <input type="radio" name="operation" autoComplete="plus" onChange={onChange} value={"plus"} checked={values.operation === "plus"} />
                    <label htmlFor="multiply">Multiply</label>
                    <input type="radio" name="operation" autoComplete="multiply" onChange={onChange} value={"multiply"} checked={values.operation === "multiply"} />
                    <label htmlFor="divide">Divide</label>
                    <input type="radio" name="operation" autoComplete="divide" onChange={onChange} value={"divide"} checked={values.operation === "divide"} />
                </div>

                <div>
                    <label htmlFor="value2">Value 2</label>
                    <input type="text" name="value2" autoComplete="value2" onChange={onChange} value={values.value2} />
                </div>

                <input type="submit" value="Calculate" />
            </form>
        </div>
    );
}