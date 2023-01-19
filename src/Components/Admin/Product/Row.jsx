import { Image, Td, Tr } from "@chakra-ui/react";
import React from "react";

const Row = ({ id, image, brand, desc, price }) => {
  let dollarIndianLocale = Intl.NumberFormat("en-IN");
  return (
    <Tr>
      <Td>{id}</Td>
      <Td>
        <Image src={image} h={"50px"} />
      </Td>

      <Td>{brand}</Td>
      {/* <Td>{desc}</Td> */}
      <Td isNumeric>₹{dollarIndianLocale.format(price)}</Td>
    </Tr>
  );
};

export default Row;
