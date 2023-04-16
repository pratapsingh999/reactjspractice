import React from 'react'

export default function Alert(props) {
    const capitalize = (words) =>{
     return words.charAt(0).toUpperCase() + words.slice(1);
    }
  return (
   props.alert && <div class={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
        <strong> {capitalize(props.alert.typ)}  </strong>{props.alert.msg}
    {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
  </div>
  )
}
