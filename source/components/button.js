import {TouchableOpacity} from "react-native";
import styled from 'styled-components'
import { compose,color, size, flexbox, space, layout, borderRadius} from 'styled-system'

const Button = styled(TouchableOpacity)(
    compose(
        space,
        flexbox,
        color,
        size,
        layout,
        borderRadius,
        ),
    );

Button.defaultProps = {
    flexDirection : "row",
    aliginItems: "center",
    justifyContent: "center"
};

export default Button;