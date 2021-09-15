class PostsController < ApplicationController
	# GET /posts/
	def index
		posts = Post.all
		render json: posts, status: :ok
	end
	
	# GET /posts/:id
	def show 
		post = find_post
		render json: post, status: :ok
	end

	# POST /posts/:id
	def create
		post = Post.create!(post_params)
		render json: post, status: :created
	end
	
	# PATCH /posts/:id
	def update
		post = find_post
		# if session[:user] == post.user.id
			post.update!(post_params)
			render json: post, status: :accepted
		# else
		# 	render json: {errors: ["Not authorized"] }, status: :unauthorized
		# end
	end

	# DELETE /posts/:id
	def destroy
		post = find_post
		# if session[:user] == post.user.id
			post.destroy
			head :no_content
		# end
	
	end

	private 

	def find_post 
		Post.find(params[:id])
	end

	def post_params
		params.permit(:content)
	end

end
