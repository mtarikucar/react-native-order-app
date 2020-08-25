import {TextInput as T} from "react-native";
import styled from 'styled-components'
import { compose,color, size, flexbox, space,border,typography} from 'styled-system'

const TextInput = styled(T)(
    compose(
        space,
        flexbox,
        color,
        size,
        border,
        typography,
        ),
    );

export default TextInput;