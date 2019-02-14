var GoogleBooks = {
	init: function(){
		$("#searchButton").click(GoogleBooks.search)
		$("body").on("click", ".book", function() {
			id = "#" + this.id + "detail";
			$(id).toggle();
		});
	},
	search: function(){	
		var searchBox = $("#searchText").val()
		$.ajax(
			{
				"url":"https://www.googleapis.com/books/v1/volumes",
				"data":{
					"q":searchBox
				},
				"success": function(responseData){
					//debugger;
					for(var i = 0; i < responseData.items.length; i++) {
						var item = responseData.items[i];
						var book = item.volumeInfo;
						$("#searchResults").append("<div id=" + i + " class='book'>"+
						"Title: " + book.title +
						"Author(s): " + book.authors.join(", ") +
						"Publisher: " + book.publisher +
						"Published Date: " + book.publishedDate +
						"</div>");

						$("#searchResults").append("<div id="+ i + "detail"+ " class='book-detail'><img src='" +
						book.imageLinks.smallThumbnail +
						"' />" +
						"Rating: " + book.averageRating +
						 "<br>" +
						"Description: " + "<p>" + book.description + "</p>" +
						"<br>" +
						"Page Count:" + book.pageCount +
						"<br>" +
						"Type: " + book.printType +
						"<br>" +
						"<a href='" + book.previewLink + "'>"+ "Preview!" + "</a>"+
						"</div>" + "<hr>")
					}

				}
			}
		)
	}
}