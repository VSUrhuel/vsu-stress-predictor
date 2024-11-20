import React from 'react';
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";

const Notif = ({ description }) => {
  return (
    <Alert color="failure" icon={HiInformationCircle} onDismiss={() => alert("Notification Dismissed")}>
      <span className="font-medium text-white">Error!</span> {description}
    </Alert>
  );
};

export default Notif;