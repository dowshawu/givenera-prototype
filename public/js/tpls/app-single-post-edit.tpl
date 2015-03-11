<div class="app-single-post-overlay js-overlay"></div>
<div class="app-single-post-body col-xs-12 col-sm-12 col-md-8">
    <i class="fa fa-close app-single-post-btn js-closeBtn"></i>
    <div class="app-single-post-content">
        <div class="panel panel-primary pricing-big">
            <div class="panel-heading"></div>
            <div class="panel-body app-single-post-panel-body">
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
                    <button class="btn btn-danger pull-right js-cancel">Cancel</button>
                    <button class="btn btn-warning pull-right js-savePost">Save</button>
                </form>
            </div>
        </div>
    </div>
</div>