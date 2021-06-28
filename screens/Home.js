import React, { useCallback } from 'react';
import {
    View,
    Text
} from 'react-native';
import MainLayout from './MainLayout';
import { connect } from 'react-redux';
import { getHoldings, getCoinMarket } from '../stores/market/marketActions';
import { useFocusEffect } from '@react-navigation/native';
import { SIZES, COLORS, FONTS, dummyData, icons } from "../constants";
import BalanceInfo from '../components/BalanceInfo';

const Home = ({ getHoldings, getCoinMarket, myHoldings, coins }) => {

    useFocusEffect(
        useCallback(() => {
            getHoldings(holdings = dummyData.holdings)
            getCoinMarket()
        }, [])
    )

    function renderWalletIfoSection() {
        return (
            <View
                style={{
                    paddingHorizontal: SIZES.padding,
                    borderRadius: 25,
                    backgroundColor: COLORS.grey,
                }}
            >
                <BalanceInfo
                    text="Your Wallet"
                    displayAmount="45,500"
                    changePct="2.30"
                    containerStyle={{
                        margin: 50
                    }}
                ></BalanceInfo>
            </View>
        )
    }


    return (
        <MainLayout>
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.black,
                }}>
                {renderWalletIfoSection()}
            </View>
        </MainLayout>

    )
}

function mapStateToProps(state) {
    return {
        myHoldings: state.marketReducer.myHoldings,
        coins: state.marketReducer.coins
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getHoldings: (holdings, currency, coinList, orderBy, sparkline, priceChangePerc, perPage, page) => {
            return dispatch(getHoldings(holdings, currency, coinList, orderBy, sparkline, priceChangePerc, perPage, page))
        },
        getCoinMarket: (currency, coinList, orderBy, sparkline, priceChangePerc, perPage, page) => {
            return dispatch(getCoinMarket(
                currency, coinList, orderBy, sparkline, priceChangePerc, perPage, page
            ))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);