Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebElement("*Amount").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebNumber("amount").Set "100000" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebElement("You need to enable JavaScript").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebList("*Interest rate").Select "1%" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebElement("You need to enable JavaScript_2").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebList("*Interest rate").Select "EUR" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Calculate").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").Sync
Browser("Home - Advantage Bank").CloseAllTabs
