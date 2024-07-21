import { ChangeEvent, Component, FormEvent } from 'react';
import PaymentConfirmationDialog from '../PaymentConfirmationDialog/PaymentConfirmationDialog';
import PaymentOptions from '../../models/PaymentOptions';

type State = {
    ID : string,
    showPaymentConfirmationDialog : boolean
}

class UPI extends Component<{}, State> {
    state = {
        ID : '',
        showPaymentConfirmationDialog : false
    }

    onButtonClick = () => {
        this.setState({ showPaymentConfirmationDialog: true });
    }

    onCancelButton = () =>{
        this.setState({ showPaymentConfirmationDialog : false });
    }

    submitHandler = ( event : FormEvent<HTMLFormElement> ) =>{
        event.preventDefault();
        this.onButtonClick();
    }
    
    payHandler = (event : ChangeEvent<HTMLInputElement>) =>{
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        } as unknown as Pick<State, keyof State>);
    }  

    reset = () => {
        this.setState({
            ID : '',
            showPaymentConfirmationDialog : false
        });
    }
    
    render() {
        const { ID } =  this.state;

        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="upiId">Enter UPI ID: </label></td>
                                <td>
                                    <input type="text" 
                                        name="ID" 
                                        value={ID}
                                        minLength = {10}
                                        onChange={this.payHandler}
                                        id="upiId" 
                                        placeholder="Enter your id here"
                                        required
                                    />
                                </td>
                            </tr>
                            <tr><td>
                                <button className="btn btn-pay" value="Submit">Pay</button>
                            </td></tr>
                        </tbody>
                    </table>
                </form>
                {
                    this.state.showPaymentConfirmationDialog && (
                        <PaymentConfirmationDialog
                            onClose={this.onCancelButton}
                            onClosePaymentSuccess={this.reset}
                            paymentOption={PaymentOptions.UPI}
                        />
                    )
                }
            </>
        )
    }
}

export default UPI