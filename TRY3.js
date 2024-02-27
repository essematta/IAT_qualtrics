define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Black people', //Will appear in the data.
			title : {
				media : {word : 'Black people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block. 
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'ambik.jpg'}, 
    			{image : 'ambik.jpg'}, 
    			{image : 'ambik1.jpg'}, 
    			{image : 'ambik2.jpg'}, 
    			{image : 'ambik3.jpg'}, 
    			{image : 'ambik5.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'White people', //Will appear in the data.
			title : {
				media : {word : 'White people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block. .
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'safom.jpg'}, 
    			{image : 'safom.jpg'}, 
    			{image : 'safom1.jpg'}, 
    			{image : 'safom2.jpg'}, 
    			{image : 'safom3.jpg'}, 
    			{image : 'safom5.jpg'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://github.com/essematta/IAT_qualtrics/tree/main/pictures'
		} 
	});
});
