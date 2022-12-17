import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ onClick, children, actionBar }) => {

	useEffect(() => {
		document.body.classList.add('overflow-hidden');

		return () => {
			document.body.classList.remove('overflow-hidden');
		}
	}, [])

	return ReactDOM.createPortal (
		<div>
			<div onClick={onClick} className="fixed inset-0 bg-gray-300 opacity-80"></div>
			<div className="fixed inset-40 p-10 bg-white"></div>
			<div className="absolute inset-40 p-10 bg-white">
				<div className="flex flex-cool justify-between h-full">
					{children}
				</div>
				<div className="flex justify-end">{actionBar}</div>
			</div>
		</div>,
		document.querySelector('.modal-container')
	);
}

export default Modal;