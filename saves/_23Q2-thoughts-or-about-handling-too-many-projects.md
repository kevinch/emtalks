---
title: 23Q2 Thoughts or "about handling (too) many projects"
date: 2023/6/21
description: Context, frustrations, mistakes and lessons learned in 23Q1
tag: project management, learnings, mistakes
---

# 23Q2 Thoughts or "about handling (too) many projects"

During the second quarter of 2023, I have been managing quite a lot of projects over the weeks and wanted to share here the frustrations, mistakes, and lessons learned along the way. 

## Context

Since the end of 2022, I am managing a team of eight developers with the following capabilities: frontend, backend, and native (iOS & Android). Reminder, my background has been frontend development for years with a pinch of backend with NodeJS on my side project [bolao.io](https://bolao.io/). This is a warning in my opinion because those programming areas are quite specific on their own. For instance, I knew nothing of the process of native development in 2022 and it is something quite complex. Sure enough, as a leader/manager, I do not need to know everything, but a global understanding is a good thing to have. The other point here is that you have to multiply by almost eight the number of 1:1s, PDI sessions, and all the people management tasks. 

On top of that, I became responsible for quite a few projects in 23Q2 due to internal decisions. Six projects with one being linked to a regulatory update by the central bank of Brazil. Three "old ones" from 23Q1. Five others internal IT items, and around eight for an external team (which turned out to be three sub-teams with each having their leaders and developers/designers/product people). 

To add a bit more _todos_, we got our share of bugs to be fixed, vulnerabilities to mitigate, unplanned API migrations, downtime with some testing environments, and so on. 

And here is the main feeling that arose from all that.

## Frustration 

Frustration due to the feeling that I always seemed to be missing something. An alignment, a few metrics, a deploy date, a piece of information about a related system of a project, a delivery estimation... The list goes on. The feeling has been that of running behind the present moment in time rather than acting in front of it to plan and organize things well and have tasks happen smoothly. 

Basically:  _me running behind_ -> _present time_ instead of _present time_ -> _me in front organizing for it all to happen well_. Makes sense? I hope it does.

Frustration when a leader of mine asked something I should have known at the time. Frustration to realize I did not know something important during an alignment meeting with people from the UX or Product team. 

Frustration to see a project using way over the estimated time at the start of the quarter and therefore impacting the others planned. 

## Mistakes

Not being able to spot the risks ahead of time. That is a hard one and my take would be that you only improve by making them, getting feedback and iterate. Oh, and asking a lot of questions.

Not enough metrics for a given project to be released. While ready to push the button of something important, we realized our control via metrics of the project with all its internal and external connexions, restrictions, user-flows, etc., was way too weak and incomplete. 

Not asking sooner for help from more company-experienced peers. 

Not having clear definitions of some projects. That is a shared mistake, team-wide. But still, as a project leader (or EM), I should have been able to spot those missing definitions and raise my hand. 

Not tracking all rollout dates, native app versions released and sharing simple metrics with the stakeholders. 

## Lessons learned

We need full control of our projects' metrics to be able to answer most of the questions that could be asked about their health status from entry to end. This is especially critical when the project uses some external (company-wide in my cases) flows like a 2FA verification system for security verification. How many users get in? How many get out? Where do they stop? Can we apply parameters to track the problems and pinpoint future issues? Are the metrics aligned with the Product team from the start? What does the company need to track? Can I easily display my work with numbers?

Get notified about the basic health of your main APIs. Are they alive? If so, do they answer? Without necessarily using an on-call tactic — although medium-large companies do — have a simple Slack-triggered message when something goes off. This can spare days of staying blind if someone does not manually enter the dashboard for a manual scan. 

Protect yourself and your team by letting events like setbacks, blockers, handoffs, rollouts, ETAs, etc., be publicly known to the direct stakeholders like UX, IT, or Product teams, as well as direct leaders.

Tell your leader that you are stressed or overwhelmed. With her or his experience, you might find ways to delegate tasks, prioritize others, receive help, or even trade off projects. They are here for this, to know when it goes well and especially when it does less so. 

Organize yourself. I am testing [Trello](https://trello.com/) for all the tasks I have to do, stuff I need to keep an eye on, future projects to organize, holidays to manage, or metrics to get back at. All of those things do not belong to our Jira board so I had to find a solution better than Sublime/Calendar/Keep. 

## Lessons confirmed

Keep talking to your team members. Do not skip 1:1s, or dailies, because you have way too much stuff to do. Instead, reduce the durations, rearrange them during the week, or go async for the dailies. 

Keep doing sprint retros if you do. I use [metroretro.io](https://metroretro.io/) and choose a different template almost every two weeks to make it dynamic. I have seen some retros turning into "therapy sessions" around one specific problem and it was worth the time. 

Delegate meeting presences if your agenda goes crazy. Ask your developers to represent you and do a quick catch-up later on. 

Organize your notes every day so they do not become obsolete and always add a date if you do not use something that automates this. For example, I like to write in a Sublime file. Super fast, super light. But it requires some note management. 

And keep having those Spanish lessons every week. A new language is not something easy to master.

## Tiny conclusion

Those are important insights of 23Q2 but it has not been all bad, do not fear. We delivered quite a few tasks and managed a few remote happy hours :) 

