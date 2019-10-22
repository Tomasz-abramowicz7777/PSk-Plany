var allPs, allTDs, allAs, allNOBRs, tableOne, tableTwo;

duplicateTable();
addParzysteNieparzysteTitle();
clearParzysteLubNieparzyste();
clearTrash(tableOne);
clearTrash(tableTwo);

function duplicateTable()
	{tableTwo = document.body.getElementsByTagName("table")[0];
	tableOne = tableTwo.cloneNode(true);
	document.body.insertBefore(tableOne, tableTwo);
	}

function addParzysteNieparzysteTitle()
	{var titleNieparzyste = document.createElement("h1");
	var textnode = document.createTextNode("Nieparzyste");
	titleNieparzyste.appendChild(textnode);
	var titleParzyste = document.createElement("h1");
	var textnode = document.createTextNode("Parzyste");
	titleParzyste.appendChild(textnode);
	document.body.insertBefore(titleNieparzyste, tableOne);
	document.body.insertBefore(titleParzyste, tableTwo);
	}
	
function clearParzysteLubNieparzyste()
	{allPs = 	tableOne.getElementsByTagName("p");
	clearNodesWithText(allPs, ">parzyste<");
	allPs = 	tableTwo.getElementsByTagName("p");
	clearNodesWithText(allPs, ">nieparzyste<");
	}

function clearTrash(table)
	{allTDs = 	table.getElementsByTagName("td");
	allAs = 	table.getElementsByTagName("a");
	allNOBRs =  table.getElementsByTagName("nobr");
	clearNodesWithText(allAs, "Stacjonarne");
	clearNodesWithText(allNOBRs, "Stacjonarne");
	clearNodesWithText(allNOBRs, "nieparzyste");
	clearNodesWithText(allNOBRs, "parzyste");
	clearNodesWithText(allNOBRs, "tydzień");
	}

function clearNodesWithText(nodeArray,text)
	{for (i = 0; i < nodeArray.length; i++) 
		{var contents = nodeArray[i].innerHTML;
		if (contents.indexOf(text) >= 0)
			{nodeArray[i].innerHTML = ""; }
		}
	}
