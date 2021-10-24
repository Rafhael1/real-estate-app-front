/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

const adaptFileEventToValue = (delegate) => (e) => delegate(e.target.files[0])

const renderFileInput = ({
  input: {
    value: omitValue, onChange, onBlur,
  },
  meta: omitMeta,
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