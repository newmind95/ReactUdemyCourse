import { useState, useEffect, useRef } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go'
import Panel from './Panel';

const Dropdown = ({ options, selection, onSelect }) => {

	const [isOpen, setIsOpen] = useState(false);
	const divEl = useRef()

	useEffect(() => {
		const handler = (event) => {
			if(!divEl.current.contains(event.target)) {
				setIsOpen(false);
			}
		}

		document.addEventListener("click", handler, true);

		return () => {
			document.removeEventListener("click", handler);
		}
	}, []);

	const handleClick = () => {
		setIsOpen(!isOpen);
	}

	const handleClickOption = (option) => {
		setIsOpen(false);
		onSelect(option);
	}

	const renderedOptions = options.map((option) => {
		return (
			<div 
				className="hover:bg-sky-100 rounded curosor-pointer p-1"
				onClick={() => handleClickOption(option)} 
				key={option.value}
			>
				{option.label}
			</div>
		);
	});

	const isExpanded = isOpen ? <GoChevronDown className="text-lg"/> : <GoChevronLeft className="text-lg"/>
	
	return (
		<div ref={divEl} className="w-48 relative">
			<Panel
				className= "flex justify-between items-center cursor-pointer" 
				onClick={handleClick}
			>
				{selection?.label || 'Selected...'}
				{isExpanded}
			</Panel>
			{isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
		</div>
	);

}

export default Dropdown;
