import React from 'react'

// @ts-ignore
const adaptFileEventToValue = (delegate) => (e) => delegate(e.target.files[0])

const renderFileInput = ({
  input: {
    // @ts-ignore
    value: onChange, onBlur,
  },
  ...props
}) => {
  return(
    <input
      onChange={adaptFileEventToValue(onChange)}
      onBlur={adaptFileEventToValue(onBlur)}
      type="file"
      {...props.input}
      {...props}
    />
  )
}

export default renderFileInput