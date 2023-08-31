import React from "react";
import { Select } from "@chakra-ui/react";
const AvailableTimes = (props) => {
  return (
    <>
      <Select
        isDisabled={props.isDisabled}
        focusBorderColor="blue.200"
        id="res-time"
        mb={2}
        w="80"
      >
        {props.timeData.map((e) => (
          <option key={e}>{e}</option>
        ))}
      </Select>
    </>
  );
};
export default AvailableTimes;
