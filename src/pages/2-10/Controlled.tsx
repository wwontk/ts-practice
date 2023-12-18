import React from "react";

export default function Controlled():React.ReactElement {
    const [name, setName] = React.useState('');
    const [essay, setEssay] = React.useState('');
    const [flavor, setFlavor] = React.useState('');
    const flavorOptions = [{key:0, value:'grapefruit'},{key:1, value:'lime'},{key:2, value:'coconut'},{key:3, value:'mango'}]

    const handleChange = (event: React.ChangeEvent) => {
        if (event.target instanceof HTMLInputElement) {
            setName(event.target.value);
        } else if (event.target instanceof HTMLTextAreaElement) {
            setEssay(event.target.value)
        } else if (event.target instanceof HTMLSelectElement) {
            setFlavor(event.target.value);
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        alert(`name: ${name}, essay: ${essay}, flavor: ${flavor}`);
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <label>
                Essay:
                <textarea value={essay} onChange={handleChange} />
            </label>
            <label>
            Pick your favorite flavor:
                <select value={flavor} onChange={handleChange}>
                    {flavorOptions.map((option)=>(
                        <option key={option.key} value={option.value}>{option.value}</option>
                    ))}
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}