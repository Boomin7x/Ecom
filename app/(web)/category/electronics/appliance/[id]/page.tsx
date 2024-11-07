import React from "react";
export interface IDetailsPage {
  params: {
    id: string;
  };
}
const Appliance = ({ params }: IDetailsPage) => {
  const id = decodeURIComponent(params.id);
  return <div>{id}</div>;
};

export default Appliance;
