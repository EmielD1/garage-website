# Requirements

What the site must do, written so that someone else can check it. Each requirement expresses a need of
your users, and has a check that passes or fails on the live site. Add a row per requirement.
Written by Emiel
**How to fill in this file**

- Write your own text in the lines and tables under each grey box.
- Replace every TODO, and the hint after it, with your own text. A section that still holds a TODO
  counts as not filled in.
- Delete a line or a table row that you do not use.
- The grey boxes are guidance. The course's checks do not read them, so you may keep them or delete
  them. In the editor, a box is every line from the one that starts with `<table` to the line
  `</td></tr></table>`: to delete a box, delete all of those lines.

In a team, write under the title who wrote this document, by first name or GitHub username.

<table width="100%"><tr></tr><tr><td>

**Guidance.** Write one row per requirement. Cover both of your user tasks first, then accessibility,
privacy and speed. The five columns:
- **Id:** R1, R2 and so on. A number is never used again.
- **Requirement:** who can do what, under which condition. It names no product.
- **Serves:** the task or the need behind it, in the words of the user or the organisation, with
  the evidence it rests on, or how you will collect it.
- **Check:** the page, the action and the exact result on the live site, so that another person can
  run the check without asking you.
- **Result:** "passed" with the date you checked it on the live site, or "not yet" with what is
  missing, for example "not yet: not built".

A requirement says what the site must do. Ask of each line: can the same outcome be reached in a
different way? "A user can see which events are full" is a requirement, because a "Full" label and
"0 seats left" both reach it. "A red Full label on the button" is one way of building it.

**Example of one row:** R1. Requirement: a user can reserve one seat at an event that still has
seats, with a name and an e-mail address, and sees a confirmation that says the reservation is
saved. Serves: reserving a seat; the events coordinator needs to know before each event how many
people are coming. Check: on `/events`, open "Meet the author" and reserve a seat with made-up
details: the confirmation says the reservation is saved, and the reservation is listed in `/admin`.
Result: not yet: the reservation is listed in `/admin`, but the confirmation does not say that it
is saved.

</td></tr></table>

| Id | Requirement | Serves | Check | Result |
| --- | --- | --- | --- | --- |
| R1 | A car owner can book an available appointment for car maintenance or repairs by providing their name and e-mail address. | Customers want to make an appointment easily, so that they know when they can bring their car to the garage. | The website provides an appointment booking form. | not yet: to be tested on the live site |
| R2 | A car owner can find information about the maintenance and repair services offered by the garage. | Customers want to understand which services are available before contacting the garage. |The website provides information about the garage and its services. | not yet: to be tested on the live site|
| R3 | A visitor can navigate the website and read its content using a keyboard. | Visitors who cannot or do not use a mouse need to access the website. | Open the live site and use only the Tab and Enter keys to navigate the main pages and links. The focus must be visible and the links must work. | not yet: to be tested on the live site |
| R4 | A customer can submit an appointment booking without providing real personal information. | The project uses test data only and must protect users' privacy. | Open the booking form, enter made-up names and e-mail addresses, and submit a booking successfully. | not yet: to be tested on the live site |
| R5 | A visitor can open the main pages without having to wait an unreasonable amount of time. | Visitors want to find information and book appointments without unnecessary delays. | The website contains accessible pages for its main content and tasks.
