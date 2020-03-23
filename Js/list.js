
var list = [
	    {
	        name: "item 1"
	    },
	    {
	        name: "item 2"
	    },
	    {
	        name: "item 3"
	    },
	    {
	        name: "item 4",
	        items: [
	            {
	                name: "sub-item 1"
	            },
	            {
	                name: "sub-item 2"
	            },
	            {
	                name:  "sub-item 3",
	                items: [
	                    {
	                        name: "sub-sub-item 1"
	                    },
	                    {
	                        name: "sub-sub-item 2"
	                    },
	                    {
	                        name:  "sub-sub-item 3",
	                        items: [
	                            {
	                                name: "sub-sub-sub-item 1"
	                            },
	                            {
	                                name: "sub-sub-sub-item 2"
	                            },
	                            {
	                                name: "sub-sub-sub-item 3"
	                            },
	                            {
	                                name: "sub-sub-sub-item 4"
	                            }
	                        ]
	                    }
	                ]
	            },
	            {
	                name:  "sub-item 4"
	            }
	        ]
	    },
	    {
	        name: "item 5"
	    },
	    {
	        name: "item 6"
	    }
	]
	var ul = $("<ul></ul>")
		ul.appendTo('.AddList')
	for (var i = 0; i < list.length; i++) {
  		 var listOfName = list[i];
 		for (var name in listOfName) {
  			li = $('<li data-id="'+listOfName[name]+'">'+listOfName[name]+ '<button class="listButtons plus btn btn-info">'+'+</button>'+ '<button class="listButtons minus btn btn-info">'+'-</button>' + '</li>')
  			li.appendTo('ul')
  		}
	}

	Child = $('li:nth-child(4)')
	var subUl  = $("<ul></ul>")
		subUl.appendTo(Child)
  	var subList = list[3].items
  	for (var j = 0; j < subList.length; j++) {
  		 var subItem = subList[j]
  		for (var items in subItem) {
  			subLi = $('<li data-id="'+subItem[items]+'">'+subItem[items]+ '<button class="listButtons plus btn btn-info">'+'+</button>'+ '<button class="listButtons minus btn btn-info">'+'-</button>' + '</li>')
  			subLi.appendTo(subUl)
		}
  	}
  	subChild = $('subLi:nth-child(3)')
	var nestedUl  = $("<ul></ul>")
		nestedUl.appendTo(subChild)
  	var nestedList = list[3].items[2]
  	for (var k = 0; k < nestedList.length; k++) {
  		 var nestedItem = nestedList[k]
  		for (var item in nestedItem) {
  			nestedLi = $('<li>'+nestedItem[item]+ '<button class="listButtons plus btn btn-info">'+'+</button>'+ '<button class="listButtons minus btn btn-info">'+'-</button>' + '</li>')
  			nestedLi.appendTo(nestedUl)
		}
  	}

$(document).ready(function(){

	$(document).on("click",".plus", function(){
  		$(this).parent().append('<ul><li>'+list.items+ '<button class="listButtons plus btn btn-info">'+'+</button>'+ '<button class="listButtons minus btn btn-info">'+'-</button>' + '<li></ul>')
	});

	$(document).on("click",".minus", function(){
		
  		$(this).parent().remove();
	});
})