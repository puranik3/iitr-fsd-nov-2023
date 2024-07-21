import { ChangeEvent, Component, FormEvent } from 'react';
import PaymentConfirmationDialog from '../PaymentConfirmationDialog/PaymentConfirmationDialog';
import PaymentOptions from '../../models/PaymentOptions';

type State = {
    bank : any,
    username : string,
    password : string,
    showPaymentConfirmationDialog : boolean
}

class NetBanking extends Component<{}, State>{
    state = {
        bank : '',
        username : "",
        password : "",
        showPaymentConfirmationDialog : false
    };

    onBankChange = (event : ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            bank : event.target.value
        });
    }

    onButtonClick = () => {
        this.setState({
            showPaymentConfirmationDialog: true
        });
    }

    onCancelButton = () =>{
        this.setState({
            showPaymentConfirmationDialog : false
        });
    }

    submitHandler = ( event : FormEvent<HTMLFormElement> ) =>{
        event.preventDefault()
        console.log(this.state)
        this.onButtonClick()
    }
    
    payHandler = (event : ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
        const name = event.target.name
        const value = event.target.value

        this.setState(
            {
                [name]: value
            } as unknown as Pick<State, keyof State>
        )
    }

    reset = () => {
        this.setState({
            bank : '',
            username : "",
            password : "",
            showPaymentConfirmationDialog : false
        })
    }

    render() {
        const {bank, username, password} = this.state

        return(
            <>
                <form onSubmit={this.submitHandler}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="">Bank Name</label></td>
                                <td>
                                    <select name="bank" value={bank} onChange={this.payHandler} id="bankName" required>
                                        <option value="" disabled>Select</option>
                                        <option value="Andhra Bank">Andhra Bank</option>
                                        <option value="Axis Bank">Axis Bank</option>
                                        <option value="Bank of Baroda">Bank of Baroda</option>
                                        <option value="HDFC Bank">HDFC Bank</option>
                                        <option value="ICICI Bank">ICICI Bank</option>
                                        <option value="South Indian Bank">South Indian Bank</option>
                                        <option value="State Bank of India">State Bank of India</option>
                                        <option value="Yes Bank">Yes Bank</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="u_name">Username</label>
                                </td>

                                <td>
                                    <input type="text" 
                                        name="username"
                                        value={username}
                                        onChange={this.payHandler}
                                        id="u_name" 
                                        placeholder="username" 
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="pwd">Password</label>
                                </td>
                                <td>
                                    <input type="password" 
                                        name="password" 
                                        value={password}
                                        onChange={this.payHandler}
                                        id="pwd" 
                                        placeholder="password" 
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button className="btn btn-pay" value="Submit">Pay</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                {
                    this.state.showPaymentConfirmationDialog && (
                        <PaymentConfirmationDialog
                            onClose={this.onCancelButton}
                            onClosePaymentSuccess={this.reset}
                            paymentOption={PaymentOptions.NetBanking}
                        />
                    )
                }
            </>
        );
    }
}

export default NetBanking