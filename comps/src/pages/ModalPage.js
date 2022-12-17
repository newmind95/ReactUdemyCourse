import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

const ModalPage = () => {

	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(true);
	}

	const handleClose = () => {
		setIsOpen(false);
	}

	const actionBar = <div>
		<Button onClick={handleClose} primary>I Accept</Button>
	</div>

	const modal = (<Modal onClick={handleClose} actionBar={actionBar}>
		<p>Here is an importan message for you. Please do not close it before you have read it.</p>
		</Modal>
	);

	return (
		<div className="relative">
			<Button primary onClick={handleClick}>Open Modal</Button>
			{isOpen && modal}
		</div>
	)
}

export default ModalPage;