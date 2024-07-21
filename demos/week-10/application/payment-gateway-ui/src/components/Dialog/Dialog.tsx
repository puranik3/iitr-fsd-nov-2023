import { ReactNode } from 'react';

import './Dialog.css';

interface Props {
    show: boolean,
    children: ReactNode
}

const Dialog = ( props : Props ) => {
    return props.show ? (
        <div className="dialog-overlay">
            <div className="dialog">{props.children}</div>
        </div>
    ) : null;
}

Dialog.defaultProps = {
    show: true
};
 
export default Dialog;

/*
Examples: How to use this
<Dialog show={false} children="Hello world" />

<Dialog>
    <h2>Please confirm!</h2>
    <p>Are you sure you want to continue with the payment?</p>
    <form>
        <input />
    </form>
</Dialog>
*/