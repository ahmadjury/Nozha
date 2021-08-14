# Nozha
MERN-project
[Home](http://localhost:8080/)


![logo](https://cdn.discordapp.com/attachments/872084511721156639/874284069100339240/Group_15.png)

 *
**NOZHA** is a platform that contains all entertainment/cultural places that schools would arrange tours to.
We have 3 kinds of users: Admin, Facility, School.
School User is authorized to view all facilities on our site, and request a reservation by specifying the date and number of students.
Facility User is authorized to add a facility, review schools’ request and accept or decline them.
When the facility accept the school’s request it will send them an email which contains an offer letter to agree on different terms.
**Nozha** has a support team who are available 24/7 to answer your question on live chat.
*


# Our Main functions:

**Main Functions**
------------ | 
our functionalities:
-A resort can register their data on the website
-any school  can fill in a trip reservation form
-the website shows all reserved trips of a resort
-a resort can be added/edited/updated





# Requirements:



**login/ registration for User (with validation):**
------------ | 
-We have 2 Models:
**Trip model(for schools):**


-**Attributes:**
- Name
- City
- Email
- Telephone Number
- Password
- ...
**Resort model:**
**Attributes:**
- Name
- City
- License Number (should be 9 unique numbers)
- Email
- Telephone Number
- Password
- Capacity



**Home page:**
------------ | 
The homepage contains header (logo, home, services, about us, username, logout) Footer (copyrights, contact us, about us). In the main body we will have image carousel that alternate clickable locations photos.




**Location page:**
------------ | 
-When you click on the location’s photo (on the home page) it will redirect you to the Location page which contains ( a school can make multiple requests for one location) a small paragraph about this place. And a link that redirects you to request a reservation form.



**Reservation Form:**
------------ | 
-A Request that sent by a school to location to reserve a date.
	a. date
	b. number of visitors
	c. status : pending by default



**School Profile:**
------------ | 
-shows school’s information {name, contact info. .} 
-shows school requests.
-A school can delete any request prior to the due date 3 days at most. Location Profile:
-shows locations information {name, contact info. .}.
-shows schools requests.
-location can accept or reject schools request.


**Support Chat:**
- Users (School/ Location) can contact Nozhas support team – who are available 24/ 7) Socket.io will be used to build the support chat. 


##  1️⃣  Login & Regestraion 
⚪ *Here in this page of the login & Registertion.*
*A user can choose to login or register as a school or as a resort*

<img src="https://cdn.discordapp.com/attachments/872084511721156642/874277606294433802/Dribbble_Shot_HD_2.png" data-canonical-src="https://cdn.discordapp.com/attachments/872084511721156642/874277606294433802/Dribbble_Shot_HD_2.png" width="400" height="500" />



## 2️⃣ Show all resorts
⚪ *Here this is the main page we show all the resorts thata school can reserve in.*

<img src="https://cdn.discordapp.com/attachments/872084511721156642/874277614049710130/Dribbble_Shot_HD.png" data-canonical-src="https://cdn.discordapp.com/attachments/872084511721156642/874277614049710130/Dribbble_Shot_HD.png" width="300" height="370" />





## 3️⃣ Show  school reservations
⚪ *Here in this page we will show the school's reservations list.*

<img src="https://cdn.discordapp.com/attachments/872084511721156642/874277592457433158/Dribbble_Shot_HD_5.png" data-canonical-src="https://cdn.discordapp.com/attachments/872084511721156642/874277592457433158/Dribbble_Shot_HD_5.png" width="400" height="370" />








## Responsive:
<img src="https://cdn.discordapp.com/attachments/874283119832883250/874283326612062248/Dribbble_Shot_HD_6.png" data-canonical-src="https://cdn.discordapp.com/attachments/874283119832883250/874283326612062248/Dribbble_Shot_HD_6.png" width="200" height="500" />
--------------------------------------
<img src="https://cdn.discordapp.com/attachments/874283119832883250/874283181606592592/Dribbble_Shot_HD_10.png" data-canonical-src="https://cdn.discordapp.com/attachments/874283119832883250/874283181606592592/Dribbble_Shot_HD_10.png" width="200" height="360" />
--------------------------------------
<img src="https://cdn.discordapp.com/attachments/874283119832883250/874283186174193684/Dribbble_Shot_HD_9.png" data-canonical-src="https://cdn.discordapp.com/attachments/874283119832883250/874283186174193684/Dribbble_Shot_HD_9.png" width="200" height="360" />
--------------------------------------
<img src="https://cdn.discordapp.com/attachments/874283119832883250/874283178091765861/Dribbble_Shot_HD_11.png" data-canonical-src="https://cdn.discordapp.com/attachments/874283119832883250/874283178091765861/Dribbble_Shot_HD_11.png" width="200" height="360" />
--------------------------------------
<img src="https://cdn.discordapp.com/attachments/874283119832883250/874283187361181696/Dribbble_Shot_HD_7.png" data-canonical-src="https://cdn.discordapp.com/attachments/874283119832883250/874283187361181696/Dribbble_Shot_HD_7.png" width="200" height="400" />
--------------------------------------
<img src="https://cdn.discordapp.com/attachments/874283119832883250/874283189173108756/Dribbble_Shot_HD_8.png" data-canonical-src="https://cdn.discordapp.com/attachments/874283119832883250/874283189173108756/Dribbble_Shot_HD_8.png" width="200" height="400" />



## Team members :
◻️ *Ahmad Jury* 

◻️ *Dara Rawagba*

◻️ *Fatima Alheeh*

◻️ *Hani Khamees*


## Contact us on :
###### 🔻 **Mobile number** 0599000000 📱
###### 🔻 **Phone**       02-2950000    ☎️

