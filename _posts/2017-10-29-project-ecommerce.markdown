---
layout: default
title:  "Design a B2C E-commerce web application with API integration"
date:   2017-10-29 11:49:36 +0100
date_update:   2017-xx-xx xx:xx:xx +0100
categories: project design e-commerce web-api pattern
comments: true
---
# Design a B2C E-commerce web application with API integration
{{ page.date | date: '%B %d, %Y' }}  |  700 – 800 words | <i class="fa fa-clock-o" aria-hidden="true"></i> +/- 3mn

Today I am going to describe how I designed and implemented an e-commerce web site. May I invite you to make yourself comfortable and grab your drink and/or food of choice? Ready? Let’s get working.

## Table of contents
1. [Context](#context)
2. [Method of work](#method-of-work)
3. [The project](#project)
4. [Database design](#database-design)
5. [EAV model](#eav-model)
6. [Detailed analysis of a use case](#detailed-analysis-of-a-use-case)
7. [The application’s architecture](#the-applications-architecture)
8. [Deliverable](#deliverable)
9. [Recommendations and improvements](#recommendations-and-improvements)
10. [Conclusion](#conclusion)
11. [Further readings](#further-readings)

## Context
I have designed an e-commerce B2C web site for a small company. I took on the role of an analyst – programmer to deliver the product.

The web application has two parts, a front-office and a back-office. In the front-office, customers can consult, search and buy items from a product catalog. The back-office is the e-commerce’s management area.

[<i class="fa fa-arrow-up" aria-hidden="true"></i>](#design-a-b2c-e-commerce-web-application-with-api-integration)

## Method of work

To complete the project, I have employed the following method:

- conduct a preliminary study to define the scope of the project and the company’s field of activity

- carry out an analysis of the existing e-commerce web sites to get an insight of their common characteristics

- redact functional and non-functional specifications

- design a relational database schema, as well as the web site functionalities with UML diagrams

- put in place the database and implement the web site functionalities

[<i class="fa fa-arrow-up" aria-hidden="true"></i>](#design-a-b2c-e-commerce-web-application-with-api-integration)

## Project

The e-commerce web application provides two interfaces, a front-office and a back-office.

The front-office allow customers to consult the product catalog and to perform searches. They can pass an order, check out using secured online payments and track their shipments. They can also print invoices and review items.

The back-office allow administrators to manage the product catalog and provide customer service. Each administrator has permissions such as the right to list, to create or to update a resource.

[<i class="fa fa-arrow-up" aria-hidden="true"></i>](#design-a-b2c-e-commerce-web-application-with-api-integration)

## Database design

It was not easy to design a database schema supporting a flexible data structure. The data structure should scale as I added more products categories.

I found several alternatives to the chosen solution. If I hadn’t to stick with a relational database, I would have chosen a NoSQL database. It provides a more flexible data structure than a relational database. I also considered using a PostgreSQL database along with its JSONB functionality. Binary JSON (JSONB) allows you to save JSON as a record’s field. You can then query it as it was a regular relational database field.

[<i class="fa fa-arrow-up" aria-hidden="true"></i>](#design-a-b2c-e-commerce-web-application-with-api-integration)

### EAV model

The chosen solution is the Entity – Attribute – Value model. It is a key – value pattern used in various fields such as scientific research and e-commerce platforms such as Magento and Drupal. That is because it provides the ability to work with disparate data structures.

In spite of that, I had to weight the advantages and the disadvantages of the model nonetheless.

**Pros:**

- dynamic and flexible schema : easy to add and update entities, attributes and values

- ability to optimize search performances with lookup tables

**Cons:**

- loss of the capacity to enforce data integrity, particularly on the attributes and the values

- complex DML operations : selecting a product based on its attribute’s values or on attributes can take at least two to three joints besides the conditionals clauses

[<i class="fa fa-arrow-up" aria-hidden="true"></i>](#design-a-b2c-e-commerce-web-application-with-api-integration)

## Detailed analysis of a use case

I choose to describe the “Pass an order” use case in this detailed analysis. It consists of the description of the use case, and of a use case, an activity and a sequence UML diagrams.
//

[<i class="fa fa-arrow-up" aria-hidden="true"></i>](#design-a-b2c-e-commerce-web-application-with-api-integration)

## The application’s architecture

The B2C e-commerce web application has a client – server architecture. A user send requests to the web server, which implements the MVC model. The web server interact with the database and consumes web services.

I have used Shippo for the shipments and Stripe for the online payments. These web services help me bring an enriching experience to my customers.

I choose Stripe because it allows me to deliver an e-commerce web site that follow the PCI DSS standard. PCI DSS helps organizations meet the security standards for manipulating credit cards data.

[<i class="fa fa-arrow-up" aria-hidden="true"></i>](#design-a-b2c-e-commerce-web-application-with-api-integration)

## Deliverable

A B2C e-commerce web application that offers a front and a back user interfaces. It provides the abilities to sale and manage a product catalog.

[<i class="fa fa-arrow-up" aria-hidden="true"></i>](#design-a-b2c-e-commerce-web-application-with-api-integration)

## Recommendations and improvements

- Integrate the B2C e-commerce web site with one or more ERP modules
- Transform the stock management into a drop shipping system

[<i class="fa fa-arrow-up" aria-hidden="true"></i>](#design-a-b2c-e-commerce-web-application-with-api-integration)

## Conclusion

To carry out this project has been a worthwhile experience. I enjoyed applying solutions to the problems encountered. The most interesting part has been to quit my comfort zone to find a solution, the EAV model, to an unknown problem.

Did you learn something new as I did? Tell me what you think in the comment section below.

Thank you for you time.

[<i class="fa fa-arrow-up" aria-hidden="true"></i>](#design-a-b2c-e-commerce-web-application-with-api-integration)

## Further readings

[<i class="fa fa-arrow-up" aria-hidden="true"></i>](#design-a-b2c-e-commerce-web-application-with-api-integration)

<script>
var node = document.getElementsByClassName("fa-arrow-up");

for(var i = 0; i < node.length; i++){
  node[i].parentNode.parentNode.style.cssFloat = "right";
}
</script>
