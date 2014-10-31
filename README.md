slackline-node
==============

A Node.js implementation of [Slackline](https://github.com/ernesto-jimenez/slackline).

Slackline is a web hook bridge that allows you to mirror channels across Slack teams.

To use it:

- Set up a slackline-node instance
```
node server.js
```

Set up the necessary Slack integrations:
- Create a channel you'd like to share with another team.
- Create an Incoming WebHook and select the channel you created.
- Make a URL with the following format:
```
http://[Your Slackline Instance]/bridge?token=[Incoming WebHook token]&domain=[Your Slack Domain]
```
- Mirror the above steps on the Slack team you'd like to share a channel with
- Create Outgoing WebHooks on each team using the URLs created above (use the URL from the opposite team for your team's Outgoing hook)