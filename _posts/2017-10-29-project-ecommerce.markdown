---
layout: default
title:  "Design a B2C E-commerce web application with API integration"
date:   2017-10-29 11:49:36 +0100
date_update:   2017-10-31 17:07:12 +0100
categories: project design e-commerce web-api pattern
comments: true
images_path: /assets/images/posts/2017-10-29-project-ecommerce
---
# Design a B2C E-commerce web application with API integration
{{ page.date | date: '%B %d, %Y' }}, updated {{ page.date_update | date: '%B %d, %Y' }}  |  900 – 1000 words  |  <i class="fa fa-clock-o" aria-hidden="true"></i> +/- 4 mn

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
9. [Improvements](#recommendations-and-improvements)
10. [Conclusion](#conclusion)
11. [Some useful links](#further-readings)

[<i class="fa fa-arrow-up" aria-hidden="true"></i>](#design-a-b2c-e-commerce-web-application-with-api-integration)
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

![Overview of the Software development cycle]({{ page.images_path }}/method.png)
<div class="image-caption"><em>Figure 1: Overview of the Software development cycle</em></div>

[<i class="fa fa-arrow-up" aria-hidden="true"></i>](#design-a-b2c-e-commerce-web-application-with-api-integration)
## Project

The e-commerce web application provides two interfaces, a front-office and a back-office.

The front-office allow customers to consult the product catalog and to perform searches. They can place an order, check out using secured online payments and track their shipments. They can also print invoices and review items.

The back-office allow administrators to manage the product catalog and provide customer service. Each administrator has permissions such as the right to list, to create or to update a resource.

[<i class="fa fa-arrow-up" aria-hidden="true"></i>](#design-a-b2c-e-commerce-web-application-with-api-integration)
## Database design

It was not easy to design a database schema supporting a flexible data structure. The data structure should scale as I added more products categories.

![The problem I am trying to solve]({{ page.images_path }}/product.png)
<div class="image-caption"><em>Figure 2: The problem I am trying to solve</em></div>

I found several alternatives to the chosen solution. If I didn’t have to stick with a relational database, I would have chosen a NoSQL database. It provides a more flexible data structure than a relational database. I also considered using a PostgreSQL database along with its JSONB functionality. Binary JSON (JSONB) allows you to save JSON as a record’s field. You can then query it as it was a regular relational database field.

[<i class="fa fa-arrow-up" aria-hidden="true"></i>](#design-a-b2c-e-commerce-web-application-with-api-integration)
### EAV model

The chosen solution is the Entity – Attribute – Value model. It is a key – value pattern used in various fields such as scientific research and e-commerce platforms such as Magento and Drupal. That is because it provides the ability to work with disparate data structures.

![The EAV model]({{ page.images_path }}/eav.png)
<div class="image-caption"><em>Figure 3: The EAV model</em></div>

In spite of that, I had to weight the advantages and the disadvantages of the model nonetheless.

**Pros:**

- dynamic and flexible schema : easy to add and update entities, attributes and values

- ability to optimize search performances with lookup tables

**Cons:**

- loss of the capacity to enforce data integrity, particularly on the attributes and the values

- complex DML operations : selecting a product based on its attribute’s values or on attributes can take at least two to three joints besides the conditionals clauses

[<i class="fa fa-arrow-up" aria-hidden="true"></i>](#design-a-b2c-e-commerce-web-application-with-api-integration)
## Detailed analysis of a use case

I choose to describe the “_Place an order_” use case in this detailed analysis. It consists of a description, and of three UML diagrams: use case, activity and sequence.

The [_table 1_](#pass-order-use-case) describes the use case. I only assumed the best case scenario and in doing so I left aside the handling of exceptions. An example of an exception would be an item out-of-stock.

<table id="pass-order-use-case" class="use-case-description">
  <tr>
    <th>Use case name :</th>
    <td>Place an order</td>
  </tr>
  <tr>
    <th>Description :</th>
    <td>The customer order the basket's content.</td>
  </tr>
  <tr>
    <th>Actors :</th>
    <td>A customer</td>
  </tr>
  <tr>
    <th>Prerequisites :</th>
    <td>
      <ul>
        <li>The customer has an account</li>
        <li>The customer signed in</li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Main process :</th>
    <td>
      <ul>
        <li>The customer displays the basket and begin the check out process</li>
        <li>The customer reviews personal informations including the shipping address</li>
        <li>The customer selects a shipping rate</li>
        <li>The customer selects a payment method</li>
        <li>The customer reviews and confirm the order</li>
        <li>The customer makes the payment</li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Postconditions :</th>
    <td>
      <ul>
        <li>The basket is empty</li>
        <li>The order saved and it is now accessible in the orders history</li>
        <li>The customer can print the invoice</li>
      </ul>
    </td>
  </tr>
</table>
<div class="image-caption"><em>Table 1: "Place an order" Use case description</em></div>

!["Place an order" Use case diagram]({{ page.images_path }}/use-case-order.png)
<div class="image-caption"><em>Figure 4: "Place an order" Use case diagram</em></div>

!["Place an order" Activity diagram]({{ page.images_path }}/activity-order.png)
<div class="image-caption"><em>Figure 5: "Place an order" Activity diagram</em></div>

!["Place an order" Sequence diagram]({{ page.images_path }}/sequence-order.png)
<div class="image-caption"><em>Figure 6: "Place an order" Sequence diagram</em></div>

[<i class="fa fa-arrow-up" aria-hidden="true"></i>](#design-a-b2c-e-commerce-web-application-with-api-integration)
## The application’s architecture

The B2C e-commerce web application has a client – server architecture. A user send requests to the web server, which implements the MVC model. The web server interact with the database and consumes web services.

![Application's architecture]({{ page.images_path }}/architecture.png)
<div class="image-caption"><em>Figure 7: The application's architecture</em></div>

I have used Shippo for the shipments and Stripe for the online payments. These web services help me bring an enriching experience to my customers.

I choose Stripe because it allows me to deliver an e-commerce web site that follow the PCI DSS standard. PCI DSS helps organizations meet the security standards for manipulating credit cards data.

[<i class="fa fa-arrow-up" aria-hidden="true"></i>](#design-a-b2c-e-commerce-web-application-with-api-integration)
## Deliverable

A B2C e-commerce web application that offers a front and a back user interfaces. It provides the abilities to sale and manage a product catalog.

[<i class="fa fa-arrow-up" aria-hidden="true"></i>](#design-a-b2c-e-commerce-web-application-with-api-integration)
## Improvements

- Integrate the B2C e-commerce web site with one or more ERP modules
- Transform the stock management into a drop shipping system

[<i class="fa fa-arrow-up" aria-hidden="true"></i>](#design-a-b2c-e-commerce-web-application-with-api-integration)
## Conclusion

To carry out this project has been a worthwhile experience. I enjoyed applying solutions to the problems encountered. The most interesting part has been to quit my comfort zone to find a solution, the EAV model, to an unknown problem.

Did you learn something new as I did? Tell me what you think in the comment section below.

Thank you for you time.

[<i class="fa fa-arrow-up" aria-hidden="true"></i>](#design-a-b2c-e-commerce-web-application-with-api-integration)
## Some useful links

- <a href="https://goshippo.com/" target="``_blank``"><i class="fa fa-external-link-square" aria-hidden="true"></i> Shippo API</a>
- <a href="https://stripe.com/" target="``_blank``"><i class="fa fa-external-link-square" aria-hidden="true"></i> Stripe API</a>
- <a href="https://www.pcisecuritystandards.org/" target="``_blank``"><i class="fa fa-external-link-square" aria-hidden="true"></i> Payment Card Industry Data Security Standard</a>

<script>
var i_fa_node = document.getElementsByClassName("fa-arrow-up");
for(var i = 0; i < i_fa_node.length; i++){
  i_fa_node[i].parentNode.parentNode.style.cssFloat = "right";
}

var img_node = document.getElementsByTagName("img");
for(var i = 0; i < img_node.length; i++){
  if(img_node[i].parentNode.tagName == "P"){
    img_node[i].parentNode.style.textAlign = "center";
  }
}
</script>
