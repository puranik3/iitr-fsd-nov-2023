import { useState } from "react";
import PaymentOptions from "../../models/PaymentOptions";

import CreditDebitCard from "../CreditDebitCard/CreditDebitCard";
import NetBanking from "../NetBanking/NetBanking";
import UPI from "../UPI/UPI";

import "./Menu.css";

const options = [
    PaymentOptions.CreditDebitCard,
    PaymentOptions.NetBanking,
    PaymentOptions.UPI,
];

const Menu = () => {
    // [ state, setter function ]
    // console.log(useState(options[0]));
    const [paymentOption, setPaymentOption] = useState<PaymentOptions>(options[0]);

    // JSX creates a "React element" - an object representing this UI
    console.log(<button className="payment-option">{options[0]}</button>);

    // event handlers
    function showAlert(option: PaymentOptions) {
        // alert(option);
        setPaymentOption(option);
    }

    return (
        <div className="menu">
            <div className="payment-options">
                {/* [
                    <button className="payment-option">{options[0]}</button>,
                    <button className="payment-option">{options[1]}</button>,
                    <button className="payment-option">{options[2]}</button>,
                ] */}
                {options.map((option) => {
                    return (
                        <button
                            className={
                                "payment-option" + (paymentOption === option ? " payment-option-selected" : "")
                            }
                            onClick={() => showAlert(option)}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>
            <div className="payment-details">
                {/* false */}
                {/* Using && is like if... */}
                {paymentOption === options[0] && <CreditDebitCard />}
                {paymentOption === options[1] && <NetBanking />}
                {paymentOption === options[2] && <UPI />}
            </div>
        </div>
    );
};

export default Menu;
