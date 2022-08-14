import React, { Component } from 'react';
import './Modal.css';


interface IProps {
    isOpen: boolean | false;
    onClose: () => void;
    onSubmit: () => void;
    title: string | "Mot du Jour !";
    message: string | "";
    emojiGrid: React.ReactNode | null;
}


interface IState {
    message: string;
}


class Modal extends Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            message: props.message,
        }
        this.onClose = this.onClose.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onClose() {
        this.props.onClose();
    }

    onSubmit() {
        this.props.onSubmit();
    }

    render(): React.ReactNode {
        return this.props.isOpen ? (
            <>
                <div className='modalContainer' onClick={this.onClose} />
                <div className='modal' onClick={(e) => e.stopPropagation()}>
                    <div className='modalContent'>
                        <div className='modalHeader'>
                            <div className='modalClose' onClick={this.onClose}>&times;</div>
                            <div className='modalTitle'>{this.props.title}</div>
                        </div>
                        <div className='modalBody'>
                            <div className='modalMessage'>
                                {this.state.message}
                            </div>
                            <div className='modalComponant'>
                                {this.props.emojiGrid}
                            </div>
                            <div className='modalFooter'>
                                <div className='modalSubmit' onClick={this.onSubmit}>New</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ) : null;
    }
}

export default Modal;


