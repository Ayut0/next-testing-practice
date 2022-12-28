import React, { useState } from 'react'

type SearchFormProps = {
    onSubmit: (value: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
    const [value, setValue] = useState<string>("")

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onClickHandler = () => {
        if (value) {
            onSubmit(value)
        } else {
            console.log("Input is empty. Make sure you put at least one letter")
        }
    }
    return (
      <>
            <h2>SearchForm</h2>
            {/* testid: Used if you want to test based on id */}
            <input type="text" onChange={onChangeHandler} value={value} data-testid="search-input" />
            <button onClick={onClickHandler} data-testid="search-button">Search</button>
      </>
  )
}

export default SearchForm