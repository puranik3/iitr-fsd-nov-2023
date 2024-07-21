import { useState } from 'react';

import Dialog from "../Dialog/Dialog";
import PaymentSuccessDialog from '../PaymentSuccessDialog/PaymentSuccessDialog';

import PaymentOptions from '../../models/PaymentOptions';

interface Props {
    onClose: () => void,
    onClosePaymentSuccess: () => void,
    paymentOption: PaymentOptions,
}

const PaymentConfirmationDialog = ( props : Props ) => {
    const [ showPaymentSuccessDialog, setShowPaymentSuccessDialog ] = useState(false);
    
    return (
        <>
            {
                showPaymentSuccessDialog ? (
                    <PaymentSuccessDialog
                        paymentOption={props.paymentOption}
                        onClose={props.onClosePaymentSuccess}
                    />
                ) : (
                    <Dialog>
                        <div>
                            <h3>Please confirm payment</h3>
                            <hr />
                            <p>
                                Proceed to complete payment? If you click yes, the amount shall be debited.
                            </p>
                            <button className="btn btn-cancel" onClick={props.onClose}>No</button>
                            <button className="btn btn-confirm" onClick={() => setShowPaymentSuccessDialog(true)}>Yes</button>
                        </div>
                    </Dialog>
                )
            }
        </>
    );
}
 
export default PaymentConfirmationDialog;