# [whatsth.is][site]

[![CodeFactor](https://www.codefactor.io/repository/github/soup-bowl/whatsth.is/badge)](https://www.codefactor.io/repository/github/soup-bowl/whatsth.is)

Simple technology scanner designed to inspect the content of websites and attempt to determine what CMS and other technologies they have used.

This app comprises of two components - A React frontend (this repository), and a [Python inspection API][api].

[The website this powers][site] is deployed by the 'main' branch. All changes and PRs go into the 'develop' branch (see [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)).

## Getting Started

### With Docker

You can quickly jump into project development using **Docker** with the **compose** script:

```bash
docker-compose up --build
```

This will start-up a **dynamically recompiling** ReactJS server on localhost:3000, but will also download the [latest edge image of the whatsth.is API server][api], and run that too. This effectively gives you the entire system on your computer to play with.

### Without Docker

**Note you will need to either [run a copy of the API server][api], or hook up to the production one (api.whatsth.is).**

This project requires NodeJS to develop, test and compile the code. The following - run in root - will quickstart you.

```bash
npm install
npm start
```

And you're off! A Docker method is coming soon, I promise.

The API the system will communicate with is defined in the appropriate `.env` file (if using `npm start`, it's `.development`).

[site]: https://whatsth.is
[api]:  https://github.com/soup-bowl/api.whatsth.is
