import {Text as T} from "react-native";
import styled from 'styled-components'
import { compose,color, size, flexbox, space,border,typography} from 'styled-system'

const Text = styled(T)(
    compose(
        space,
        flexbox,
        color,
        size,
        border,
        typography,
        ),
    );

Text.defaultProps={
    color:"white"
}

export default Text;