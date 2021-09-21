import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  cakePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd }) => {
  return cakePriceUsd ? (
    <Skeleton width={80} height={24} />
  ) : (
    <Skeleton width={80} height={24} />
  );
};
//   return cakePriceUsd ? (
//     <PriceLink
//       href="#"
//       target="_blank"
//     >
//       <img src="/logo.png" alt="logo" width="24px" className="mr-1"/>
//       <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
//     </PriceLink>
//   ) : (
//     <Skeleton width={80} height={24} />
//   );
// };

export default React.memo(CakePrice);