<div class="app-single-post-body well posts-grid col-md-12">
    <div class="app-single-post-content">
        <form class="form-horizontal">
            <div class="app-single-post-form-img-container">
                <input type="file" class="js-photoUpload choose-photo-button" />
                <img class="js-photoPreview app-single-post-img img-responsive" src="<%=ImageUrl%>"/>
            </div>
            <div class="app-single-post-detail-container">
                <div class="form-group">
                    <label for="title" class="col-sm-2">Title</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control js-title" placeholder="Title" value="<%=Title%>" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="Summary" class="col-sm-2">Detail</label>
                    <div class="col-sm-10">
                        <textarea rows="3" class="form-control js-summary" placeholder="Detail" ><%=Summary%></textarea>
                    </div>
                </div>
            </div>
        </form>
        <button class="btn btn-danger pull-right js-cancel">Cancel</button>
        <button class="btn btn-warning pull-right js-savePost">Save</button>
    </div>
</div>