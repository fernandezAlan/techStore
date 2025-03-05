import React, { JSX } from "react";
import { StartEmptyIcon,StartIcon } from "../icons/Icons";

interface Props {
    numberOfStars: number;
}
const Rating:React.FC<Props> = ({numberOfStars}) => {
    const container:JSX.Element[] = [];
    for (let i = 0; i < 5; i++) {
        if(i<numberOfStars){
            container.push(<StartIcon/>);
        }
        else{
            container.push(<StartEmptyIcon/>);
        }
    }
  return <div>{container}</div>;
};

export default Rating;