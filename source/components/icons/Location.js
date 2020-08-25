import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import BoxCenter from "../box-center";
import Text from "../Text";

function SvgLocation(props) {
  return (
    <BoxCenter>
    <Svg height={256} 
    viewBox="0 0 128 128" 
    width={256}
    fill="white"
    stroke="white"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
>
      <Path d="M80.229 82.863c.231-.376.462-.745.693-1.128 10.389-17.2 15.617-32.246 15.542-44.715a32.464 32.464 0 00-64.927-.011c-.076 12.48 5.153 27.528 15.542 44.726.231.383.462.752.693 1.128C25.9 85.566 11.4 93.383 11.4 102.664c0 11.652 23.1 20.779 52.6 20.779s52.6-9.127 52.6-20.779c0-9.281-14.5-17.098-36.371-19.801zM35.037 37.02a28.964 28.964 0 1157.927.011C93.114 61.889 69.874 92.548 64 99.9c-5.874-7.352-29.115-38.012-28.963-62.88zM64 119.943c-29.371 0-49.1-8.935-49.1-17.279 0-7.4 14.629-14.285 34.934-16.518A185.3 185.3 0 0062.667 103.8a1.748 1.748 0 002.666 0 185.3 185.3 0 0012.834-17.654c20.3 2.233 34.934 9.114 34.934 16.518-.001 8.344-19.73 17.279-49.101 17.279z" />
      <Path d="M49.692 109.807c-7.766-.994-14-2.744-17.548-4.925a1.75 1.75 0 10-1.833 2.981c3.963 2.436 10.689 4.36 18.937 5.415a1.7 1.7 0 00.224.014 1.75 1.75 0 00.22-3.485zM66.939 110.643a126.38 126.38 0 01-7.458-.048 1.75 1.75 0 10-.129 3.5c1.538.056 3.1.085 4.648.085q1.527 0 3.021-.036a1.75 1.75 0 001.709-1.79 1.73 1.73 0 00-1.791-1.711zM78.777 37.02A14.778 14.778 0 1064 51.8a14.795 14.795 0 0014.777-14.78zm-26.055 0A11.278 11.278 0 1164 48.3a11.29 11.29 0 01-11.278-11.28z" />
    </Svg>
    <Text mt={20} fontWeight="bold">Siparişlerinin yerini öğrenmek için haritayı kullanabilirsin</Text>
    </BoxCenter>
  );
}

export default SvgLocation;
