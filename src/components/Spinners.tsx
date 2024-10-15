import React from 'react'
import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "100px auto",
};

type Props = {
  loading: boolean
}

const Spinners = ({loading}:Props ) : React.ReactElement => {
  
  return (
    <ClipLoader
      color='#4338ca'
      loading = {loading}
      cssOverride={override}
      size={150}
    />
  )
}

export default Spinners