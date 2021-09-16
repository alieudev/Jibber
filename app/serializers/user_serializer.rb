class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password_digest, :handle, :image, :bio, :email, :created_at
  has_many :posts
end
