import Dialog from "../Dialog/Dialog";

import PaymentOptions from "../../models/PaymentOptions";

interface Props {
    paymentOption: PaymentOptions,
    onClose: () => void
}

const PaymentSuccessDialog = ( props : Props ) => {
    return (
        <Dialog>
            <div>
                <h3>Your Payment of Rs 5000 is Successful!!!</h3>
                <hr />
                <p>
                    Your order will be delivered by Sun Jul 21 2024
                </p>
                <p>
                    Payment mode: {props.paymentOption}
                </p>
                <button className="btn btn-close" onClick={props.onClose}>Close</button>
            </div>
        </Dialog>
    );
}
 
export default PaymentSuccessDialog;