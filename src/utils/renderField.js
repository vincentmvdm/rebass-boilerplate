import React from "react";
import { Label, Input } from "rebass";

export default function renderField({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) {
    return (
        <div>
            <Label>{label}</Label>
            <div>
                <Input {...input} placeholder={label} type={type} />
                {touched &&
                    ((error && <span>{error}</span>) ||
                        (warning && <span>{warning}</span>))}
            </div>
        </div>
    );
}
