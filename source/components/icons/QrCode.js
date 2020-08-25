import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import Text from "../Text";
import BoxCenter from "../box-center"

function SvgQrCode(props) {
  return (
    <BoxCenter>
    <Svg height={256} 
    viewBox="0 0 60 58" 
    width={256} 
    fill="none"
    stroke="white"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
      <G fill="#ebba16">
        <Path d="M15 0H1v14h6V6h8zM15 58H1V44h6v8h8zM45 0h14v14h-6V6h-8zM45 58h14V44h-6v8h-8z" />
      </G>
      <Path d="M46 13v32H14V13z" fill="#e7eced" />
      <Path d="M59 30H1a1 1 0 110-2h58a1 1 0 110 2z" fill="#dd352e" />
    </Svg>
    <Text mt={20} fontWeight="bold">Siparişleri teslim almak için QR kodu tarat</Text>
    </BoxCenter>
  );
}

export default SvgQrCode;
