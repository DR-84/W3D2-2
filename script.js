const huiswerkMaken = function(vak, callback) {
	console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
	setTimeout(() => {
		callback();
	}, 5000);
};

const klaarMetHuiswerk = function() {
	console.log(`Kijk Paps/Mams, ik ben klaar met mijn huiswerk!`);
};

huiswerkMaken('wiskunde', klaarMetHuiswerk);
//
//

/* document.addEventListener('DOMContentLoaded', event => {
	console.log('DOM fully loaded and parsed');
});
 */
