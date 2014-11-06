var settings = {};

// Slack API tokens
settings.tokens = {
	'trello.slack.com' : '[API token]',
	'fogcreek-trello.slack.com' : '[API token]',

};

settings.domainReferrer = {
	'fogcreek-trello.slack.com' : 'trello.slack.com',
	'trello.slack.com' : 'fogcreek-trello.slack.com',
	//'fogcreek.slack.com' : 'trello.slack.com'
}

settings.postUrl = '/services/hooks/incoming-webhook?token=';

module.exports = settings;



