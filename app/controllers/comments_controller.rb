class CommentsController < ApplicationController

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        if  @comment.destroy
            @comments = Comment.all
            render :index
        else
             render json: @comment.errors.full_messages, status: 401
        end
    end

    def index
        @comments = Comment.where(event_log_id: params[:event_log_id])
        render :index
    end

    def update
        @comment = Comment.find(params[:id])
        if @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    private 
    def comment_params
        params.require(:comment).permit(:event_log_id, :content)
    end
end
