var settings = {};

// Slack API tokens
settings.tokens = {
	'[FIRST SLACK INSTANCE]' : '[FIRST API KEY]',
	'[SECOND SLACK INSTANCE]' : '[SECOND API KEY]',
}

settings.domainReferrer = {
	'[FIRST SLACK INSTANCE]' : '[SECOND SLACK INSTANCE]',
	'[SECOND SLACK INSTANCE]' : '[FIRST SLACK INSTANCE]'
}

settings.postUrl = '/services/hooks/incoming-webhook?token=';

module.exports = settings;



