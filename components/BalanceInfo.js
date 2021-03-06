import React from 'react';
import {
    View,
    Text,
    Image
} from "react-native";

import { SIZES, COLORS, FONTS, icons } from "../constants";

function BalanceInfo({ text, displayAmount, changePct, containerStyle }) {
    return (
        <View style={{ ...containerStyle }}>
            <Text style={{ ...FONTS.h3, color: COLORS.lightGray3 }}>
                {text}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                <Text style={{ ...FONTS.h3, color: COLORS.lightGray3 }}>$</Text>
                <Text style={{ ...FONTS.h2, color: COLORS.white }}>
                    {displayAmount.toLocaleString()}
                </Text>
                <Text style={{ color: COLORS.lightGray3, ...FONTS.h3 }}>USD</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                {changePct != 0 &&
                    <Image
                        source={icons.upArrow}
                        style={{
                            width: 10,
                            height: 10,
                            alignSelf: "center",
                            tintColor: (changePct > 0) ? COLORS.lightGreen : COLORS.red
                        }}
                    />
                }
            </View>
        </View>
    )
}

export default BalanceInfo
