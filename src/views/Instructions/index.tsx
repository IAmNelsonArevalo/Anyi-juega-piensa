import { Button, Center, Image, Stack, Text, View } from "native-base";
import React, { FC } from "react";
import useComponents from "../../components";
import useControllers from "../../controllers";
import { IGeneralProps } from "../../models/interfaces/general";
import InstructionsStyles from './instructions.styles';

const Instructions: FC<IGeneralProps> = (props) => {
    // Components
    const { Navigation } = useComponents();

    // Controller
    const { useScreenHooks } = useControllers();
    const { useWelcome } = useScreenHooks();
    const { user, navigation } = useWelcome();

    return (
        <React.Fragment>
            <Image
                source={require('../../assets/images/politicas.png')}
                alt="Welcome's Background"
                style={{ width: "100%", flex: 1, resizeMode: 'stretch' }}
            />
            <View style={InstructionsStyles.view}>
                <Button 
                    style={InstructionsStyles.subContent} 
                    variant="unstyled"
                    onPress={() => navigation.navigate('Instructions2')}
                >
                    <Image
                        source={require('../../assets/images/subContent.png')}
                        alt="Welcome's Background"
                        style={{}}
                    />
                </Button>
            </View>
            <Navigation page="instructions" />
        </React.Fragment>
    );
}

export default Instructions;