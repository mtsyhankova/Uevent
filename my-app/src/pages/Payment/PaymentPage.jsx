import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import GooglePayButton from '@google-pay/button-react'

import "./style.css"

export const PaymentPage = () => {
    const { date, name, location, city, price } = useParams();
    let navigate = useNavigate();

    return (
        <div className='pay_box'>
            <p className='pay_uppertext'>Оплата івенту {name} на {date}</p>

            <div className='pay_margin'>
                <GooglePayButton
                    environment="TEST"
                    paymentRequest={{
                        apiVersion: 2,
                        apiVersionMinor: 0,
                        allowedPaymentMethods: [
                            {
                                type: 'CARD',
                                parameters: {
                                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                    allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                },
                                tokenizationSpecification: {
                                    type: 'PAYMENT_GATEWAY',
                                    parameters: {
                                        gateway: 'example',
                                        gatewayMerchantId: 'exampleGatewayMerchantId',
                                    },
                                },
                            },
                        ],
                        merchantInfo: {
                            merchantId: '12345678901234567890',
                            merchantName: 'Demo Merchant',
                        },
                        transactionInfo: {
                            totalPriceStatus: 'FINAL',
                            totalPriceLabel: 'Total',
                            totalPrice: `${price}`,
                            currencyCode: 'UAH',
                            countryCode: 'UA',
                        },
                        shippingAddressRequired: true,
                        callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
                    }}
                    onLoadPaymentData={paymentRequest => {
                        navigate(`/event/open/${date}/${name}/${location}/${city}/${price}/${"true"}`)
                        //paymentRequest - информация про оплату
                    }}
                    onPaymentAuthorized={paymentData => {
                        console.log('Payment Authorised Success', paymentData)
                        return { transactionState: 'SUCCESS' }
                    }
                    }
                    onPaymentDataChanged={paymentData => {
                        console.log('On Payment Data Changed', paymentData)
                        return {}
                    }
                    }
                    existingPaymentMethodRequired='false'
                    buttonColor='black'
                    buttonType='Buy'
                />
            </div>
        </div>
    )
}
export default PaymentPage;