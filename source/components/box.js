import {View} from "react-native";
import styled from 'styled-components'
import { compose,color, size, flexbox, space,border} from 'styled-system'

const Box = styled(View)(
    compose(
        space,
        flexbox,
        color,
        size,
        border
        ),
    );


export default Box;