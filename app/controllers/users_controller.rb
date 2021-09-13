class UsersController < ApplicationController
	wrap_parameters format: []
	skip_before_action :authorize, only: [:auth_show, :create]

	#GET /users/
	def index 
        users = User.all
        render json: users, status: :ok
	end 
    
	#GET /users/:id
	def show 
        user = find_user
        render json: user, status: :ok
	end 

	# GET /auth
	def auth_show
	  user = User.find_by(id: session[:user_id])
    if user
      render json: user, status: :created
    else
      render json: { errors: "Not authorized" }, status: :unauthorized
    end	
	end

	#POST /signup/
	def create
		user = User.create!(user_params)
		session[:user_id] = user.id
		render json: user, status: :created
		# else
		# 	render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
		# end
	end

	#PATCH /users/:id
	def update

		user = User.find_by(id: session[:user_id])
    if user
			user.update!(user_params)
			render json: user, status: :accepted
		else
      render json: { errors: "Not authorized" }, status: :unauthorized
    end				
	end

	# DELETE /users/:id
	def destroy
		user = User.find_by(id: session[:user_id])
		if user
			user.destroy
			head :no_content
    	end
	end 
		
	private

	def find_user
    user = User.find(params[:id])
  end 

	def user_params
		params.permit(:name, :password, :password_confirmation, :email, :handle, :bio, :image)
	end

end
