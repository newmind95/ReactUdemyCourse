import className from 'classnames';

const Button = ({
	children,
	primary,
	secondary,
	success,
	warning,
	danger,
	outline,
	rounded,
	...rest
}) => {


	const classes = className(rest.className, 'flex items-center px-3 py-1.5 border', {
		'border-blue-600 bg-blue-500 text-white': primary,
		'border-gray-600 bg-gray-500 text-white': secondary,
		'border-green-600 bg-green-500 text-white': success,
		'border-yellow-400 bg-yellow-300 text-white': warning,
		'border-red-600 bg-red-600 text-white': danger,
		'rounded-full': rounded,
	})

	return <button {...rest} className={classes}>{children}</button>
}

Button.propTypes = {
	checkVariationValue: ({ primary, secondary, success, warning, danger}) => {
		const count = 
			Number(!!primary) +
			Number(!!secondary) +
			Number(!!success) +
			Number(!!warning) +
			Number(!!danger);

		if (count > 1) {
			throw new Error('Only one of the primary, secondary, success, warning, danger can be true');
		}
	}
}

export default Button;