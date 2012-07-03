CKEDITOR.plugins.add('wordcount',
{

	init: function(editor)
	{
		var wordCount = 0;
		var maxWordCount = editor.config.wordcount_max;

		$('td#cke_bottom_' + editor.name).hide();

		setTimeout(function() 
		{
			var htmlData = editor.getData();
			var element = $(document.createElement('div')).addClass('cke_word_count').html('Word Count: ' + htmlData.replace(/<(?:.|\s)*?>/g, '').split(' ').length);
			$('td#cke_bottom_' + editor.name).append(element).find('.cke_word_count').css({
				'display' : 'block',
				'float' : 'right',
				'font-weight' : 'bold'
			});

		}, 4000);

		editor.on('key', showWordCount);
	}
});

function showWordCount(event) 
{
	var editor = event.editor;

	var htmlData = editor.getData();
	$('td#cke_bottom_' + editor.name + ' .cke_word_count').html('Word Count: '+htmlData.replace(/<(?:.|\s)*?>/g, '').split(' ').length); 

}