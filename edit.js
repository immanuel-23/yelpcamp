
<%- include("../partials/header") %>
<div class="container">
		<div class="row">
				<div class="col-lg-12">
					
			
			<h1 style="text-align:center">
	 			Edit<%=campground.name%>
			</h1>
			<p>
				
			</p>
		<div style ="width:30%; margin :50px auto; ">
		<form action="/campgrounds/<%= campground._id%>?_method=PUT" method ="POST">
				<div class="form-group">
					<input class="form-control" type ="text" name ="campground[name]" value="<%=campground.name%>">

				</div>
				<div class="form-ground">
					<input class="form-control" type="text" name ="campground[image]" value="<%=campground.image%>">
				</div>
				<div class="form-ground">
					<input class="form-control" type="text" name ="campground[description]" value="<%=campground.description%>">
				</div>
				<div class="form-group">
    <label for="location">Location</label>
    <input class="form-control" type="text" name="location" id="location" value="<%= campground.location %>">
</div>
				<div class="form-ground">
					<button class="btn btn-lg btn-primary btn-block">
		 			submit
					</button>
				</div>
				
			</form>
			<a href="/campgrounds">Back</a>
		</div>


			</div>
	</div>
</div>
<%- include("../partials/footer") %>