import React from 'react'
import clsx from 'clsx'

const FormInput = ({ type, name, placeholder, required = true, className = '' }) => {
    return (
        <input type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            className={clsx(className, "p-4 bg-greyShade rounded lg:text-base text-sm text-greyDark w-full placeholder:text-greyDark focus:outline-none")} />
    )
}

export default FormInput
