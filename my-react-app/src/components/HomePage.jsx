import { useNavigate } from 'react-router-dom'

import Header from "./Header";
import useForm from "../hooks/useForm"

import findBits from "../utils/findBits";
export default function HomePage() {
    const navigate = useNavigate();

    const { values, onChange, submitHandler } = useForm(
        { value1: 0, value2: 0, operation: "plus" },
        async ({ value1, value2, operation }) => {
            const v1 = Number(value1);
            const v2 = Number(value2);
            const bits = findBits(v1, v2);
            const calcData = { value1: v1, value2: v2, operation, bits };
            localStorage.setItem("calcData", JSON.stringify(calcData));
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