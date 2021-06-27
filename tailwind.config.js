module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
	minHeight: {
	    '96': '24rem',
	    '64': '16rem',
	    '80': '20rem',
	},
	extend: {
	    fontFamily: {
		'roboto': ['Roboto']
	    },
	    spacing: {
		'194': '97%',
		'36/2': '18%',
	    },
	    colors: {
		'hyper': '#0B4A72',
		'almost-pink': '#FEF8F1',
		'cover-color': '#E6F2B4',
		'started': '#0B4A72',
		'normal': '#F0F7CE36',
	    }
	},
    },
    variants: {
	extend: {},
    },
    plugins: [],
}
