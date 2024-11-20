import React from 'react'
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";

function Notif(params) {
  return (
    <Alert color="failure" icon={HiInformationCircle} onDismiss={() => alert("Notification Dismissed")}>
        <span className="font-medium">Error!</span> {params.description}.
    </Alert>
  )
}

export default Notif