var getLuminosity = function(r, g, b){
	var luminosity = 0.2126*r + 0.7152*g + 0.0722*b
	if (luminosity > 155){
		console.log('light')
		return luminosity
	}
	else {
		console.log('dark')
		return luminosity
	}
}

var mkDarken = function(r, g, b){
	var output = (0.8*r + ' ' + 0.8*g + ' ' + 0.8*b)
	return output
}

module.exports = {
	luminosity: getLuminosity,
	darken: mkDarken
}