# Project Ankara

*CLI tool* to generate codenames for projects and check if it's available in [Azure](https://azure.com) or not

> as of `2019-07-23` there is an issue with the [Azure SDK for NodeJs](https://github.com/Azure/azure-sdk-for-js), I already reported it on [WebSiteManagementClient class or the documentation needs fix #4395](https://github.com/Azure/azure-sdk-for-js/issues/4395). it's a blocker now, I'm waiting for a fix

## Goal

I'm a long-time software developer. Ideas coming to my mind all the times.

*Worst* part of starting a project is, finding a good project *code-name*, such as, *Blue Raven*, *Lavender Bison*, *Mercury Eagle* or *Sloth Prague*, etc.

[Microsoft](https://microsoft.com) has a very good list of very-good-looking project names, you can find a list on *Wikipedia* ([List of Microsoft codenames](https://en.wikipedia.org/wiki/List_of_Microsoft_codenames))

That's why I started this project.

This is a NodeJs project to create a CLI tool which is generates a random code-name from several parameters.

Good thing is, it'll also check the [Azure](https://azure.com) for the availability of the code-name on following resource types;

* AppServices
* API Management
* Storage Account

Most probably, I'll ad more resource types over time.

Plan, is to have keyword dictionaries for different groups, such as, *color names*, *alloy names*, *animal names*, *capital city names*, etc.

Arguments will be the following;

```javascript
argument('-c, --color', 'Add random color name')
argument('-a, --alloy', 'Add random alloy name')
argument('-n, --animal', 'Add random animal name')
argument('-b, --bird', 'Add random bird name')
argument('-p, --capital', 'Add random capital name')
```

Example usage will be similar to this;

```bash
ankara -c -a

ankara -b -n -p
```

I didn't think about the output of the command yet, but most probably it will display the *code-name* immediately and *Azure Resource Types* will be listed with a spinner.

When the *CLI tool* gets the response from *Azure Management API*, it'll show the *availability status* instead of a spinner for a *resource type*.
