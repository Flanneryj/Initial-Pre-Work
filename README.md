# TG-Pre-Work

>>>I did my best to answer the last three questions, through research, asking other senior coders @ redzone, and working with a tutor I was unable to completely define the word "instances" and the context in which it was being used! I understood and answered to the best of my ability. The work cited is just for reference, I didn't directly copy paste anything but it is there just incase. I did check all my paragraphs for plagiarism before submitting. Thank you so much for the opportunity to even  apply to your course, I enjoyed getting through the pre-work you assigned and learned a whole lot from it! - James <<<

 


### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

  Most simply when clicking on the https://www.techtonic.com/ external link you are redirected to the Techtonic webpage through a series of rules and checks. The client requests information or resources on a web server. That web server locates and sends information out to a web browser. In return this displays the current result.


## From start to finish, how does data reach you to be rendered in the browser?

  For example (https://www.techtonic.com/)  When you click on this external link URL (uniform resource locator) your browser checks the memory cache, looking for a DNS (Domain Name System) record to find the equivalent IP address of https://www.techtonic.com/. 
  As soon as the browser has the right IP address it starts a connection to the server that has the same IP address to relay different information. 
This connection is made using a TCP(Transmission Control Protocol)/IP (Internet Protocol) process that allows three things. 
  1. The client sends a synchronize packet to the server asking if the server is open for new possible connections.
  2. If the server is open it can accept and start new connections. It will communicate with an ACK or acknowledgment of the SYN or synchronize packet using a SYN/ACK combined packet 
  3. Client receives a SYN/ACK packet courtesy of the server. The server acknowledges it by sending an ACK packet and your connection is ready for data relay!  
  Next the browser sends GET request for the https://www.techtonic.com/ webpage! The request also has some other info included such as browser identification (User-Agent header), (Accept header), and (Connection headers) asking the TCP connection to stay alive for additional requests. (The browser is sending out an http request)  
  The web server receives the request, then passes it to a request handler. This checks the request, headers, and cookies to see what is being requested. Also it has the ability to update the information if needed. 
  Then it forms a response in HTML, JSON, XML etc. The response contains the web page you requested! It also includes status code, content encoding, cache control, any cookies to set, privacy information, so on and so forth. 
  Finally the browser renders the HTML content until complete, starting with the bare HTML structure then rendering a full webpage in steps following 


## What code is rendered in the browser?

 The browser renders its display’s starting with HTML (Hypertext Markup Language) in sections. The most basic of HTML structure to start, the browser then checks HTML tags and sends GET requests out (GET requests data from a specified source) for other elements in the web-page like CSS stylesheets, Images and hen eventually moves forward to Javascript files, etc.
  One way you can display information on a screen is by server-side rendering. Server-side rendering converts HTML files from the server to create information that can be used for the browser. 
  You can also render content using client-side rendering. It renders information in the browser in Javascript. You get a basic HTML structure code and the rest is filled in by Javascript using the browser.



## What is the server-side code’s main function?

  Server-side code is used mainly to engage with indefinite storage units, including files and/or databases. Server-side code also is good at processing user information and input as well as rendering pages to the client. Processing of Server-side code occurs upon a pages first request, and when those pages post back onto the server. Most of the time Server-side code is written in C#, VB.NET, etc. and it uses .NET framework!


## What is the client-side code’s main function?

  Different from server-side code, client-side code is actually included in the client’s web page and processed in their internet browser. It is directly written in scripting language and interrelates to the page’s HTML elements, HTML and CSS  are 2 languages that are also used by the client. These elements include buttons, tables, text box, etc. For any of the client side code to even operate, first the client’s browser needs to be able to support the specific languages necessary. 


## What is runtime?

  Runtime is a general description of software/instructions which are executed while your program is running. It relates to the framework, library or platform of any type that your code runs on. Especially instructions that weren’t written explicitly, but are necessary for execution of code. 
  In my research I found it could also simply be a period of time that a program runs for. It begins when the program is open and ends when closed.


## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

  HTML, CSS,  JavaScript and their main files need to be downloaded and re-created each time that you enter into a site. This also means that it won’t work without a connection to the internet. Mostly all of client-side code is written in Javascript, once you’ve loaded a webpage and its HTML structural elements, javascript or whatever script language your running fills in the rest.  
  Some assets might be saved in local storage and therefore might not be re-created on subsequent visits or on a soft refresh. A hard refresh or exiting the browser would require all assets to be re-created on the next visit.


## How many instances of the server-side code are available at any given time?

  Multiple instances of server-side code could be available at any given time, server-side code has access to the server operating system. The number of server side instances depends on the needed scale for an app. To know the size and scale of what you are working with is required for scalability. 
  This in return will determine the number of instances.An app with a large amount of users might require multiple server side instances to handle all the traffic, while an app with a smaller user base may only require a single server side instance. 



## How many instances of the databases connected to the server application are created?

An instance of the database is a snapshot of the actual content at any given time, including the data itself and its relationship to other data in the database. Database administrators might create multiple instances of the same database for different purposes.

Work Cited !!!

>	Wijesinghe, Maneesha. “What Happens When You Type an URL in the Browser and Press Enter?” Medium, Medium, 26 Apr. 2017, medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a.

>	“What Is ‘Runtime’?” W3Cgeek, 31 July 2017, w3cgeek.com/what-is-runtime.html.

>	 “Client-Side vs. Server-Side Code: What's the Difference?” Segue Technologies, 14 Aug. 2017, www.seguetech.com/client-server-side-code/.

>	“Runtime.” Runtime Definition, techterms.com/definition/runtime.

> 	Chapple, Mike. “The Difference Between a Database and a Database Instance.” Lifewire, Lifewire, 5 Nov. 2018, www.lifewire.com/database-instance-1019612.




