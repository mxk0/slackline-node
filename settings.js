var settings = {};

settings.tokens = {
	'[FIRST SLACK INSTANCE]' : 'SECOND INSTANCE API KEY',
	'[SECOND SLACK INSTANCE]' : 'FIRST INSTANCE API KEY'
};

settings.postUrl = '/services/hooks/incoming-webhook?token=';

module.exports = settings;
