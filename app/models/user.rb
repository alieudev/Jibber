class User < ApplicationRecord
	has_secure_password
	
	validates :name, presence: true, uniqueness: true, length: {minimum: 2}
	validates :handle, presence: true, uniqueness: true, length: {minimum: 2}
	validates :password, presence: true, length: {minimum: 2}

	has_many :posts, dependent: :destroy
end
