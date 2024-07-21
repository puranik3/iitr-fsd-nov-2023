import { ChangeEvent, Component, FormEvent } from 'react';
import { generateArrayFromRange, getCurrentYear } from '../../utils';
import PaymentConfirmationDialog from '../PaymentConfirmationDialog/PaymentConfirmationDialog';
import PaymentOptions from '../../models/PaymentOptions';

// "React Food Truck"
// sfc
class CreditDebitCard extends Component {
    state = {
        ccdbNumber: '',
        name: '',
        month: '',
        year: '',
        cvv: '',
        showPaymentConfirmationDialog: false
    };

    updateValue = (event : ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
        const { name, value } = event.target;
        console.log( name, value );

        this.setState({
            [name]: value
        });
    }

    submitHandler = (event : FormEvent) => {
        event.preventDefault();
        console.log( this.state );

        this.setState({
            showPaymentConfirmationDialog: true
        });
    }

    closePaymentConfirmationDialog = () => {
        this.setState({
            showPaymentConfirmationDialog: false
        });
    }

    closePaymentConfirmationDialogAndClearForm = () => {
        this.setState({
            showPaymentConfirmationDialog: false,
            ccdbNumber: '',
            name: '',
            month: '',
            year: '',
            cvv: '',
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label
                                        htmlFor="ccdbNumber"
                                    >
                                        Card Number
                                    </label>
                                </td>
                                <td>
                                    <input
                                        id="ccdbNumber"
                                        name="ccdbNumber"
                                        type="number"
                                        min="100000000000"
                                        max="999999999999"
                                        value={this.state.ccdbNumber}
                                        onChange={this.updateValue}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                </td>
                                <td>
                                    <input
                                        id="name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.updateValue}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label
                                        htmlFor="expiry-date"
                                    >
                                        Expiry
                                    </label>
                                </td>
                                <td>
                                    <div id="expiry-date">
                                        <select
                                            id="month"
                                            name="month"
                                            value={this.state.month}
                                            onChange={this.updateValue}
                                            required
                                        >
                                            <option value="">Month</option>

                                            <option value="1">January</option>
                                            <option value="2">February</option>
                                            <option value="3">March</option>
                                            <option value="4">April</option>
                                            <option value="5">May</option>
                                            <option value="6">June</option>
                                            <option value="7">July</option>
                                            <option value="8">August</option>
                                            <option value="9">September</option>
                                            <option value="10">October</option>
                                            <option value="11">November</option>
                                            <option value="12">December</option>
                                        </select>
                                        <select
                                            id="year"
                                            name="year"
                                            value={this.state.year}
                                            onChange={this.updateValue}
                                            required
                                        >
                                            <option value="">Year</option>

                                            {
                                                generateArrayFromRange(getCurrentYear(), getCurrentYear() + 10).map(
                                                    year => <option value={year}>{year}</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label
                                        htmlFor="cvv"
                                    >
                                        CVV
                                    </label>
                                </td>
                                <td>
                                    <input
                                        id="cvv"
                                        name="cvv"
                                        value={this.state.cvv}
                                        onChange={this.updateValue}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button
                                        className="btn btn-pay"
                                    >
                                        Pay
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>

                {
                    /* Using ?: is like if..else */
                    this.state.showPaymentConfirmationDialog ? (
                        <PaymentConfirmationDialog
                            onClose={this.closePaymentConfirmationDialog}
                            onClosePaymentSuccess={this.closePaymentConfirmationDialogAndClearForm}
                            paymentOption={PaymentOptions.CreditDebitCard}
                        />
                    ) : (
                        'You will asked for confirmation when you submit these details'
                    )
                }
            </div>
        );
    }
};

export default CreditDebitCard;
