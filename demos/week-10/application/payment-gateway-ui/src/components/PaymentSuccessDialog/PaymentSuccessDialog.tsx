import Dialog from "../Dialog/Dialog";

import PaymentOptions from "../../models/PaymentOptions";

import './PaymentSuccessDialog.css';

interface Props {
    paymentOption: PaymentOptions,
    onClose: () => void
}

const PaymentSuccessDialog = ( { paymentOption, onClose } : Props ) => {
    return (
        <Dialog>
            <div>
                <h3>Your Payment of Rs 5000 is Successful!!!</h3>
                <hr />
                <p>
                    Your order will be delivered by Sun Jul 21 2024
                </p>
                <p>
                    Payment mode: {paymentOption}
                </p>
                <button className="btn btn-close" onClick={onClose}>Close</button>
            </div>
        </Dialog>
    );
}
 
export default PaymentSuccessDialog;